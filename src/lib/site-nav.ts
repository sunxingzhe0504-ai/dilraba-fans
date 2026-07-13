import type { UiKey } from "@/lib/i18n/ui";

export type NavItem = {
  href: string;
  labelKey: UiKey;
};

export type NavGroup = {
  titleKey: UiKey;
  items: NavItem[];
};

/** Desktop primary navigation — keep to 6 items +「更多」dropdown. */
export const PRIMARY_NAV: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/latest", labelKey: "nav.latest" },
  { href: "/works", labelKey: "nav.works" },
  { href: "/gallery", labelKey: "nav.gallery" },
  { href: "/magazine", labelKey: "nav.magazine" },
  { href: "/events", labelKey: "nav.events" },
];

export const MORE_NAV_GROUPS: NavGroup[] = [
  {
    titleKey: "nav.group.content",
    items: [
      { href: "/stories", labelKey: "nav.stories" },
      { href: "/videos", labelKey: "nav.videos" },
      { href: "/characters", labelKey: "nav.characters" },
      { href: "/upcoming", labelKey: "nav.upcoming" },
    ],
  },
  {
    titleKey: "nav.group.fans",
    items: [
      { href: "/fashion", labelKey: "nav.fashion" },
      { href: "/charity", labelKey: "nav.charity" },
      { href: "/fans", labelKey: "nav.fans" },
    ],
  },
  {
    titleKey: "nav.group.about",
    items: [
      { href: "/about", labelKey: "nav.about" },
      { href: "/contact", labelKey: "nav.contact" },
      { href: "/changelog", labelKey: "nav.changelog" },
    ],
  },
];

export const MORE_NAV_ITEMS = MORE_NAV_GROUPS.flatMap((group) => group.items);

export function navItemActive(barePath: string, href: string): boolean {
  return href === "/"
    ? barePath === "/"
    : barePath === href || barePath.startsWith(`${href}/`);
}

export function isMoreNavActive(barePath: string): boolean {
  return MORE_NAV_ITEMS.some((item) => navItemActive(barePath, item.href));
}
