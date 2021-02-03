import { createContext } from "react";

export const pages = {
  home: {
    path: "#home",
    title: "Home",
    icon: "home",
  },
  about: {
    path: "#about",
    title: "About Me",
    icon: "perm_identity",
  },
  projects: {
    path: "#work",
    title: "My Work",
    icon: "trending_up",
  },
  skills: {
    path: "#skills",
    title: "Skills",
    icon: "whatshot",
  },
  contact: {
    path: "#contact",
    title: "Contact Me",
    icon: "mail_outline",
  },
};

export const initialRouteContext = {
  routeLinks: [
    {
      path: pages.home.path,
      title: pages.home.title,
      icon: pages.home.icon,
    },
    {
      path: pages.about.path,
      title: pages.about.title,
      icon: pages.about.icon,
    },
    {
      path: pages.projects.path,
      title: pages.projects.title,
      icon: pages.projects.icon,
    },
    {
      path: pages.skills.path,
      title: pages.skills.title,
      icon: pages.skills.icon,
    },
    {
      path: pages.contact.path,
      title: pages.contact.title,
      icon: pages.contact.icon,
    },
  ],
  pages
};

export const routeContext = createContext(initialRouteContext);
