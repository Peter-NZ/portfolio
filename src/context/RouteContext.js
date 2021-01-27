import { createContext } from "react";

export const routePaths = {
  home: "#home",
  about: "#about",
  projects: "#work",
  skills: "#skills",
  contact: "#contact",
};

export const initialRouteContext = {
  routeLinks: [
    { path: routePaths.home, title: "Home", icon: "home" },
    { path: routePaths.about, title: "About Me", icon: "perm_identity" },
    { path: routePaths.projects, title: "My Work", icon: "trending_up" },
    { path: routePaths.skills, title: "Skills", icon: "whatshot" },
    { path: routePaths.contact, title: "Contact Me", icon: "mail_outline" },
  ],
  routePaths: routePaths,
};

export const routeContext = createContext(initialRouteContext);
