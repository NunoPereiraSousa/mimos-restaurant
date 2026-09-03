import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto min-w-0 w-full max-w-[1920px] px-5 md:px-8 xl:px-12 2xl:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-accent",
        className,
      )}
    >
      <span className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}
