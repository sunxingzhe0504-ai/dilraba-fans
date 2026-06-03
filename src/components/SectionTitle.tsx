import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-2 flex items-center gap-2",
          align === "center" && "justify-center",
        )}
      >
        <Sparkles className="text-accent" size={16} aria-hidden />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
          Dilraba
        </span>
      </div>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-dark sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 flex items-center gap-2",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary-soft" />
        <span className="h-2 w-2 rounded-full bg-primary-soft" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary-soft" />
      </div>
    </div>
  );
}
