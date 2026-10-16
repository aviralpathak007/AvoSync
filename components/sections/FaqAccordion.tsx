"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/content/site";
import { cn } from "@/lib/utils";

/** Accessible accordion: real buttons, aria-expanded/controls, and inert collapsed panels. */
export function FaqAccordion() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white/[0.02]">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-base font-semibold transition-colors hover:bg-white/[0.03] sm:px-6 sm:text-lg"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-all duration-300",
                    open && "rotate-45 border-lime/50 bg-lime/10 text-lime",
                  )}
                >
                  <Icon name="plus" size={16} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out-expo",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 leading-relaxed text-muted sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
