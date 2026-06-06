import { Heart } from "lucide-react";
import { cn } from "@/lib/cn";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
  index?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  kicker = "Dilraba",
  index,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index && <span className="index-num">{index}</span>}
        <span className="kicker">
          <Heart size={12} className="fill-rouge text-rouge" aria-hidden />
          {kicker}
        </span>
      </div>
      <h2 className="display text-4xl text-wine-deep sm:text-5xl">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-ink-soft sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
