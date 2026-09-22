"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Phone, Calendar, ArrowRight } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please provide a valid NZ phone number")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number format"),
  suburb: z.string().min(2, "Please enter your property suburb (e.g. Remuera, Takapuna)"),
  projectType: z.string().min(1, "Please select your renovation type"),
  estimatedBudget: z.string().min(1, "Please select an estimated budget range"),
  timeline: z.string().min(1, "Please select your preferred timeline"),
  message: z.string().min(10, "Please briefly describe your renovation scope (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      suburb: "",
      projectType: "Kitchen Renovation",
      estimatedBudget: "$50,000 - $100,000",
      timeline: "1 - 3 Months",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry. Please try again or call us directly.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please call +64 21 882 582 directly.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-sm shadow-luxury border border-brand-border p-6 sm:p-8 md:p-10">
      {isSuccess ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark">Consultation Request Received</h3>
          <p className="text-stone-600 text-sm max-w-md mx-auto">
            Thank you for reaching out to Star Property Service Limited. Director Raymond Zhang will review your project requirements and get in touch within 24 business hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+6421882582"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-xs font-semibold rounded-sm hover:bg-brand-charcoal transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-bronze" />
              <span>Call Raymond Directly: 021 882 582</span>
            </a>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs text-stone-500 hover:text-brand-dark underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
              Complimentary Consultation & Feasibility
            </span>
            <h3 className="text-2xl font-bold text-brand-dark mt-1">
              Start Your Renovation Journey
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Fill out the details below. Raymond Zhang will personally review your project scope and schedule a site visit.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Raymond Taylor"
                {...register("fullName")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. raymond@example.nz"
                {...register("email")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                NZ Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 021 882 582"
                {...register("phone")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Auckland Suburb */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                Property Suburb / Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Remuera, Takapuna, Epsom"
                {...register("suburb")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              />
              {errors.suburb && (
                <p className="text-xs text-red-500 mt-1">{errors.suburb.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Project Type */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                Project Type
              </label>
              <select
                {...register("projectType")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              >
                <option value="Kitchen Renovation">Kitchen Renovation</option>
                <option value="Bathroom Transformation">Bathroom Transformation</option>
                <option value="Full House Extension">Full House Extension</option>
                <option value="Interior Fit-Out & Joinery">Interior Fit-Out & Joinery</option>
                <option value="Decking & Outdoor Living">Decking & Outdoor Living</option>
                <option value="Commercial Renovation">Commercial Renovation</option>
                <option value="Other / Multiple Spaces">Other / Multiple Spaces</option>
              </select>
            </div>

            {/* Estimated Budget */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                Estimated Budget
              </label>
              <select
                {...register("estimatedBudget")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              >
                <option value="Under $50,000">Under $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                <option value="$200,000 - $350,000">$200,000 - $350,000</option>
                <option value="$350,000+">$350,000+</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
                Ideal Timeline
              </label>
              <select
                {...register("timeline")}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors"
              >
                <option value="Immediate (Within 1 Month)">Immediate (Within 1 Month)</option>
                <option value="1 - 3 Months">1 - 3 Months</option>
                <option value="3 - 6 Months">3 - 6 Months</option>
                <option value="Planning & Concept Stage">Planning & Concept Stage</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">
              Project Description & Scope <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your home, current condition, and your renovation ideas or wish list..."
              {...register("message")}
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:outline-none focus:border-brand-dark transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-brand-dark hover:bg-brand-charcoal text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Consultation Request...</span>
              ) : (
                <>
                  <span>Request Free On-Site Consultation</span>
                  <ArrowRight className="w-4 h-4 text-brand-bronze" />
                </>
              )}
            </button>
            <p className="text-[11px] text-stone-400 text-center mt-2.5">
              No obligation. We respect your privacy and will never share your details.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
