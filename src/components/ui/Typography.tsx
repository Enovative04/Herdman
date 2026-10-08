import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
      {children}
    </span>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("text-[12px] font-semibold uppercase tracking-[0.18em] text-slate", className)}>
      {children}
    </span>
  );
}
