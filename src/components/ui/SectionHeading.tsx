import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className={cn("mb-4 text-xs font-extrabold uppercase tracking-[.22em]", light ? "text-fuchsia-200" : "text-[#8b2bd5]")}>{eyebrow}</p>}
      <h2 className={cn("text-balance text-3xl font-bold tracking-[-.045em] sm:text-4xl lg:text-5xl", light ? "text-white" : "text-[#201331]")}>{title}</h2>
      {description && <p className={cn("mt-5 text-base leading-7 sm:text-lg", light ? "text-white/70" : "text-[#665c70]")}>{description}</p>}
    </div>
  );
}
