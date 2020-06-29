import React from "react";
import { Route } from "react-router-dom";
import * as Pages from "./components/Pages";

export const routePaths = {
  home: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  contact: "/contact",
};

export const routeLinks = [
  { path: routePaths.home, title: "Home", icon: "home" },
  { path: routePaths.about, title: "About Me", icon: "perm_identity" },
  { path: routePaths.projects, title: "My Work", icon: "trending_up" },
  { path: routePaths.skills, title: "Skills", icon: "whatshot" },
  { path: routePaths.contact, title: "Contact Me", icon: "mail_outline" },
];

const Routes = () => {
  return (
    <React.Fragment>
      <Route path={routePaths.home} exact component={Pages.Home}></Route>
      <Route path={routePaths.about} exact component={Pages.About}></Route>
      <Route path={routePaths.projects} exact component={Pages.Projects}></Route>
      <Route path={routePaths.skills} exact component={Pages.Skills}></Route>
      <Route path={routePaths.contact} exact component={Pages.Contact}></Route>
    </React.Fragment>
  );
};





export default Routes;
