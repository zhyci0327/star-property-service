"use client";

import { useState } from "react";
import { FAQ } from "@/types";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className="py-5">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-bronze transition-colors">
                {faq.question}
              </span>
              <span
                className={`p-1 rounded-full bg-stone-100 text-stone-600 transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 bg-brand-dark text-white" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed pr-8 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
