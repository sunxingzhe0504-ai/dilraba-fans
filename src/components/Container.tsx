import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container-main">{children}</div>
    </section>
  );
}
