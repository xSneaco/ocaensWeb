export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ocaens",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "HLTV 2.0",
      href: "/hltv-calculator",
    },
    {
      label: "Sheets",
      href: "/sheets",
    },
    {
      label: "Changelog",
      href: "/sheets/changelog",
    },
  ],
  navMenuItems: [
    {
      label: "HLTV 2.0",
      href: "/hltv-calculator",
    },
    {
      label: "Sheets",
      href: "/team",
    },
    {
      label: "Changelog",
      href: "/calendar",
    },
    {
      label: "VLR",
      href: "/settings",
    },
  ],
  links: {
    twitter: "https://twitter.com/xSneaco",
    youtube: "https://www.youtube.com/@Sneaco",
    steam: "https://steamcommunity.com/id/xSneaco",
  },
};
