import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  wide?: boolean;
};

export function Container({ children, className, id, wide }: ContainerProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={wide ? "container-wide" : "container-main"}>{children}</div>
    </section>
  );
}
