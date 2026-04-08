"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const onToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-brand-light py-24" id="faq">
      <div className="mx-auto w-full max-w-[850px] px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-green">
            FAQ
          </span>
          <h2 className="mt-6 text-[48px] font-black leading-[1.1] tracking-[-0.02em] text-brand-black md:text-[50px]">
            Common questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={cn(
                  "border transition-colors",
                  isOpen ? "border-brand-green bg-[#F1F7ED]" : "border-[#E7E7E7] bg-transparent"
                )}
              >
                <button
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-[18px] py-[16px] text-left"
                  onClick={() => onToggle(index)}
                  type="button"
                >
                  <span className="text-[14px] font-semibold text-[#242D3A]">{item.question}</span>
                  <span
                    className={cn(
                      "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      isOpen ? "bg-brand-green text-white" : "bg-[#EEEEEE] text-[#9FA5AE]"
                    )}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-[18px] pb-[16px]" id={`faq-answer-${index}`}>
                    <p className="max-w-[640px] text-[13px] leading-[2.1] text-[#677384]">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[14px] text-[#A0A8B4]">Still have questions?</p>
          <a
            className="mt-4 inline-flex h-10 items-center justify-center bg-brand-green px-5 text-[14px] font-semibold text-white transition hover:brightness-95"
            href="https://facebook.com/ProhoseOfficial"
          >
            Chat with us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
