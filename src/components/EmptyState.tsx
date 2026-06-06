import { SearchX } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "暂无匹配内容",
  description = "试试切换其他筛选条件，或稍后再来看看。",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-border-strong px-8 py-20 text-center">
      <SearchX className="mb-4 text-gold" size={36} aria-hidden />
      <h3 className="display text-xl text-ink">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-ink-soft">{description}</p>
    </div>
  );
}
