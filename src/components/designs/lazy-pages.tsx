import dynamic from "next/dynamic";
import { DesignPageFallback } from "./DesignPageFallback";

export const AboutPageDesign = dynamic(
  () => import("./pages/AboutPages").then((m) => ({ default: m.AboutPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const ChangelogPageDesign = dynamic(
  () => import("./pages/ChangelogPages").then((m) => ({ default: m.ChangelogPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const CharacterDetailPageDesign = dynamic(
  () =>
    import("./pages/CharacterDetailPages").then((m) => ({
      default: m.CharacterDetailPageDesign,
    })),
  { loading: () => <DesignPageFallback /> },
);
export const CharactersPageDesign = dynamic(
  () => import("./pages/CharactersPages").then((m) => ({ default: m.CharactersPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const CharityPageDesign = dynamic(
  () => import("./pages/CharityPages").then((m) => ({ default: m.CharityPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const ContactPageDesign = dynamic(
  () => import("./pages/ContactPages").then((m) => ({ default: m.ContactPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const EventDetailPageDesign = dynamic(
  () => import("./pages/EventDetailPages").then((m) => ({ default: m.EventDetailPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const EventsPageDesign = dynamic(
  () => import("./pages/EventsPages").then((m) => ({ default: m.EventsPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const FansPageDesign = dynamic(
  () => import("./pages/FansPages").then((m) => ({ default: m.FansPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const FashionPageDesign = dynamic(
  () => import("./pages/FashionPages").then((m) => ({ default: m.FashionPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const GalleryPageDesign = dynamic(
  () => import("./pages/GalleryPages").then((m) => ({ default: m.GalleryPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const LatestPageDesign = dynamic(
  () => import("./pages/LatestPages").then((m) => ({ default: m.LatestPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const MagazineDetailPageDesign = dynamic(
  () =>
    import("./pages/MagazineDetailPages").then((m) => ({
      default: m.MagazineDetailPageDesign,
    })),
  { loading: () => <DesignPageFallback /> },
);
export const MagazinePageDesign = dynamic(
  () => import("./pages/MagazinePages").then((m) => ({ default: m.MagazinePageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const NewsDetailPageDesign = dynamic(
  () => import("./pages/NewsDetailPages").then((m) => ({ default: m.NewsDetailPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const UpcomingPageDesign = dynamic(
  () => import("./pages/UpcomingPages").then((m) => ({ default: m.UpcomingPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const VideosPageDesign = dynamic(
  () => import("./pages/VideosPages").then((m) => ({ default: m.VideosPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const WorkDetailPageDesign = dynamic(
  () => import("./pages/WorkDetailPages").then((m) => ({ default: m.WorkDetailPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
export const WorksPageDesign = dynamic(
  () => import("./pages/WorksPages").then((m) => ({ default: m.WorksPageDesign })),
  { loading: () => <DesignPageFallback /> },
);
