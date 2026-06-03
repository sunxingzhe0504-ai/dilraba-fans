import { events } from "./events";
import { honors, timeline } from "./honors";
import { magazines } from "./magazines";
import { siteMeta } from "./site-meta";
import { works } from "./works";
import type { EventCategory, WorkType } from "@/lib/types";

export function getWorks() {
  return [...works].sort((a, b) => b.year - a.year);
}

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getFeaturedWorks(limit = 3) {
  return getWorks()
    .filter((work) => work.featured)
    .slice(0, limit);
}

export function getWorksByType(type: WorkType | "all") {
  const sorted = getWorks();
  if (type === "all") return sorted;
  return sorted.filter((work) => work.type === type);
}

export function getMagazines() {
  return [...magazines].sort((a, b) => b.year - a.year);
}

export function getFeaturedMagazines(limit = 6) {
  return getMagazines()
    .filter((mag) => mag.featured)
    .slice(0, limit);
}

export function getEvents() {
  return [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedEvents(limit = 4) {
  return getEvents()
    .filter((event) => event.featured)
    .slice(0, limit);
}

export function getEventsByCategory(category: EventCategory | "all") {
  const sorted = getEvents();
  if (category === "all") return sorted;
  return sorted.filter((event) => event.category === category);
}

export function getHonors() {
  return [...honors].sort((a, b) => b.year - a.year);
}

export function getTimeline() {
  return [...timeline].sort((a, b) => b.year - a.year);
}

export function getSiteMeta() {
  return siteMeta;
}

export function getWorkSlugs() {
  return works.map((work) => work.slug);
}

export { works, magazines, events, honors, timeline, siteMeta };
