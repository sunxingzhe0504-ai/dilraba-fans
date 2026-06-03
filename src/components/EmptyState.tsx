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
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-8 py-16 text-center">
      <SearchX className="mb-4 text-muted" size={40} aria-hidden />
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted">{description}</p>
    </div>
  );
}
