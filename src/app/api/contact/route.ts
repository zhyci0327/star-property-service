import { NextResponse } from "next/server";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  suburb: z.string().min(2),
  projectType: z.string().min(1),
  estimatedBudget: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // In production, this can forward to SendGrid, Resend, or direct to admin@starproperty.nz
    console.log("New Consultation Inquiry Received:", {
      to: "admin@starproperty.nz",
      director: "Raymond Zhang",
      data: validatedData,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. Raymond Zhang will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
