import { NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your full name").optional(),
    fullName: z.string().trim().min(2, "Please enter your full name").optional(),
    email: z.string().trim().email("Please enter a valid email address"),
    phone: z
      .string()
      .trim()
      .min(7, "Please provide a valid phone number")
      .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number format"),
    suburb: z.string().trim().optional(),
    projectType: z.string().trim().min(1, "Please select a project type"),
    budget: z.string().trim().min(1, "Please select an estimated budget").optional(),
    estimatedBudget: z
      .string()
      .trim()
      .min(1, "Please select an estimated budget")
      .optional(),
    timeline: z.string().trim().min(1, "Please select a timeline"),
    message: z
      .string()
      .trim()
      .min(10, "Please briefly describe your renovation scope (min 10 characters)"),
  })
  .superRefine((data, ctx) => {
    if (!data.name && !data.fullName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["name"],
        message: "Name is required",
      });
    }
    if (!data.budget && !data.estimatedBudget) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["budget"],
        message: "Estimated budget is required",
      });
    }
  });

/**
 * Generates UTC ISO and New Zealand local timestamps for the webhook payload.
 */
function buildTimestamps() {
  const now = new Date();
  const submittedAt = now.toISOString();
  const submittedAtNZ = new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  return { submittedAt, submittedAtNZ };
}

export async function POST(request: Request) {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted form fields and try again.",
        errors: parsed.error.errors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const { submittedAt, submittedAtNZ } = buildTimestamps();

  const payload = {
    name: data.name ?? data.fullName ?? "",
    email: data.email,
    phone: data.phone,
    suburb: data.suburb || "Not specified",
    projectType: data.projectType,
    budget: data.budget ?? data.estimatedBudget ?? "",
    timeline: data.timeline,
    message: data.message,
    source: "starproperty.nz",
    submittedAt,
    submittedAtNZ,
  };

  const webhookUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.warn(
      "POWER_AUTOMATE_WEBHOOK_URL is not configured. Inquiry was not forwarded:",
      { email: payload.email, submittedAt: payload.submittedAt }
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "Consultation service is temporarily unavailable. Please call Raymond Zhang directly on +64 21 882 582 or email admin@starproperty.nz.",
      },
      { status: 503 }
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text().catch(() => "");
      console.error("Power Automate webhook error response:", {
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
        body: errorText.slice(0, 500),
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to deliver your inquiry right now. Please try again shortly or call +64 21 882 582 directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Inquiry received successfully. Raymond Zhang will contact you shortly.",
        submittedAt: payload.submittedAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to forward inquiry to Power Automate:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Network error while sending your inquiry. Please try again or call +64 21 882 582 directly.",
      },
      { status: 502 }
    );
  }
}
