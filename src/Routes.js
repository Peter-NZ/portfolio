import React from "react";
import { Route } from "react-router-dom";
import * as Pages from "./components/Pages";
const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Pages.Home}></Route>
      <Route path="/home" exact component={Pages.Home}></Route>
      <Route path="/about" exact component={Pages.About}></Route>
      <Route path="/projects" exact component={Pages.Projects}></Route>
      <Route path="/skills" exact component={Pages.Skills}></Route>
      <Route path="/contact" exact component={Pages.Contact}></Route>
    </React.Fragment>
  );
};

export const routeLinks = [
  { path: "/home", title: "Home", icon: "home" },
  { path: "/about", title: "About Me", icon: "perm_identity" },
  { path: "/projects", title: "My Work", icon: "trending_up" },
  { path: "/skills", title: "Skills", icon: "whatshot" },
  { path: "/contact", title: "Contact Me", icon: "mail_outline" }
];

export default Routes;
