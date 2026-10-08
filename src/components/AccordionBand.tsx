import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

export interface AccordionItem {
  title: string;
  copy: string;
}

export function AccordionBand({ items, startOpen = 0 }: { items: AccordionItem[]; startOpen?: number }) {
  const [open, setOpen] = useState<number>(startOpen);

  return (
    <div className="border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <button
            key={item.title}
            onClick={() => setOpen(i)}
            className={cn(
              "block w-full border-b border-line text-left transition-colors duration-300 last:border-b-0",
              isOpen ? "bg-lime" : "bg-transparent hover:bg-paper-dim"
            )}
          >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:gap-10 lg:px-10 lg:py-8">
              <div className="flex items-center gap-4 sm:w-[340px] sm:shrink-0">
                <span className="text-[13px] font-semibold text-ink/50">0{i + 1}</span>
                <h3 className="text-[20px] font-bold tracking-[-0.01em] text-ink sm:text-[24px]">
                  {item.title}
                </h3>
              </div>
              <div
                className={cn(
                  "grid transition-all duration-300 sm:flex-1",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 sm:opacity-100 sm:grid-rows-[1fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl pr-6 text-[14.5px] leading-relaxed text-ink/70 sm:py-0">{item.copy}</p>
                </div>
              </div>
              <ArrowRight
                size={20}
                className={cn("ml-auto hidden shrink-0 text-ink sm:block", isOpen && "rotate-[-45deg]")}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
