import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-[.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-[#d95717]",
        outline:
          "border border-foreground/60 bg-transparent text-foreground hover:border-accent hover:text-accent",
        light: "bg-[#fbf6ed] text-dark hover:bg-white",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
}
export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(variants({ variant }), className)} {...props} />;
}
export { variants as buttonVariants };
