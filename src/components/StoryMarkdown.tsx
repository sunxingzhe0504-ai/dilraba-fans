"use client";

import Markdown from "react-markdown";
import { cn } from "@/lib/cn";

type Props = {
  content: string;
  className?: string;
};

export function StoryMarkdown({ content, className }: Props) {
  return (
    <div
      className={cn(
        "prose-story space-y-4 text-sm leading-relaxed text-ink-soft",
        className,
      )}
    >
      <Markdown
        components={{
          h2: ({ children }) => (
            <h2 className="mt-8 text-lg font-medium text-ink first:mt-0">{children}</h2>
          ),
          p: ({ children }) => <p>{children}</p>,
          ul: ({ children }) => <ul className="list-disc space-y-1 pl-5">{children}</ul>,
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="font-medium text-ink">{children}</strong>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
