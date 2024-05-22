type Link = {
  name: string;
  path: string;
};

type NavLinks = Link[];

export const navLinks: NavLinks = [
  {
    name: "Overview",
    path: "/overview",
  },
  {
    name: "Tickets",
    path: "/tickets",
  },
  {
    name: "Ideas",
    path: "/ideas",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
  {
    name: "Agents",
    path: "/agents",
  },
  {
    name: "Articles",
    path: "/articles",
  },
];

export const navMenu: NavLinks = [
  {
    name: "Settings",
    path: "/settings",
  },
  {
    name: "Subscription",
    path: "/subscription",
  },
];
