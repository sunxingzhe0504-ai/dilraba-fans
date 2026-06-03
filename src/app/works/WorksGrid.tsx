"use client";

import { useMemo, useState } from "react";
import type { Work, WorkType } from "@/lib/types";
import { FilterTabs } from "@/components/FilterTabs";
import { WorkCard } from "@/components/WorkCard";
import { EmptyState } from "@/components/EmptyState";
import { StaggerGrid, StaggerItem } from "@/components/FadeIn";

type WorksGridProps = {
  works: Work[];
};

export function WorksGrid({ works }: WorksGridProps) {
  const [active, setActive] = useState<WorkType | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return works;
    return works.filter((work) => work.type === active);
  }, [works, active]);

  return (
    <>
      <FilterTabs active={active} onChange={setActive} />

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="该分类暂无作品"
            description="试试选择「全部」查看完整作品列表。"
          />
        </div>
      ) : (
        <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <StaggerItem key={work.slug}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      )}
    </>
  );
}
