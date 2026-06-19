import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-[10rem] font-light leading-none text-blush-deep/80">404</p>
        <h1 className="zh-display mt-2 text-3xl text-wine">页面走丢了</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          你访问的页面可能已更名或不存在。试试从首页出发，或用搜索找到你想看的内容。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 text-sm text-paper transition-colors hover:bg-wine-deep"
          >
            <Home size={16} />
            返回首页
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-ink-soft transition-colors hover:border-wine hover:text-wine"
          >
            <ArrowLeft size={16} />
            浏览作品
          </Link>
        </div>
        <p className="mt-8 text-xs text-ink-mute">
          提示：桌面端可按{" "}
          <kbd className="rounded bg-background-deep px-1.5 py-0.5">Ctrl</kbd>+
          <kbd className="rounded bg-background-deep px-1.5 py-0.5">K</kbd>{" "}
          打开全站搜索
          <Search className="ml-1 inline" size={12} aria-hidden />
        </p>
      </div>
    </Container>
  );
}
