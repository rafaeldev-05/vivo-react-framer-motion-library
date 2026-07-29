import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
};

export function Button({ children, className, variant = "primary", arrow = false, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 active:scale-[.98]",
        variant === "primary" && "bg-[#ff35a8] text-white shadow-[0_14px_35px_rgba(213,0,124,.26)] hover:-translate-y-0.5 hover:bg-[#ed178f]",
        variant === "secondary" && "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/15",
        variant === "light" && "bg-white text-[#4b168c] shadow-xl shadow-purple-950/15 hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />}
    </a>
  );
}
