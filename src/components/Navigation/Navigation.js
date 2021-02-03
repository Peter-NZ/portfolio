import React, { useContext, useState } from "react";
import { routeContext } from "../../context/RouteContext";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.scss";
import NavigationButton from "./NavigationButton/NavigationButton";
import LayoutContext from "../../context/LayoutContext";
import { CSSTransition } from "react-transition-group";

const Navigation = ({homeInView, aboutInView, workInView, skillsInView, contactInView}) => {
  const layout = useContext(LayoutContext);
  const routes = useContext(routeContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkItemActive = (routeTitle) =>{
    switch(routeTitle){
      case(routes.pages.home.title):
        return homeInView;
      case(routes.pages.about.title):
        return aboutInView;
      case(routes.pages.projects.title):
        return workInView;
      case(routes.pages.skills.title):
        return skillsInView;
      case(routes.pages.contact.title):
        return contactInView;
      default:
        return false;
    }
  }

  const navItems = routes.routeLinks.map((routeLink) => (
    <NavigationItem key={routeLink.title} itemSettings={routeLink} active={checkItemActive(routeLink.title)}
    />
  ));

  const navItemsMobile = routes.routeLinks.map((routeLink) => (
    <NavigationItem
      mobile={true}
      key={routeLink.title}
      itemSettings={routeLink}
      toggleSidenav={layout.toggleSidenav}
    />
  ));
  const backgroundAnimationClasses = {
    enter: classes["background--enter"],
    enterActive: classes["background--enter-active"],
    enterDone: classes["background--enter-active"],
    exit: classes["background--exit"],
    exitActive: classes["background--exit-active"],
  };
  const navAnimationClasses = {
    enterActive: classes["mobile-nav--enter-done"],
    enterDone: classes["mobile-nav--enter-done"],
    exit: classes["mobile-nav--exit"],
    exitActive: classes["mobile-nav--exit-active"],
  };

  window.onscroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPosition((scrollTop / height) * 100);
  };

  return (
    <React.Fragment>
      <CSSTransition
        unmountOnExit
        timeout={200}
        in={layout.openSidenav}
        classNames={backgroundAnimationClasses}
      >
        <div className={classes["background"]}></div>
      </CSSTransition>
      <NavigationButton toggleSidenav={layout.toggleSidenav} />
      <CSSTransition
        unmountOnExit
        timeout={400}
        in={layout.openSidenav}
        classNames={navAnimationClasses}
      >
        <nav className={classes["mobile-nav"]}>{navItemsMobile}</nav>
      </CSSTransition>

      <nav className={classes.sidenav}>
        <div className={classes["progress-wrapper"]}>
          <div
            style={{ height: scrollPosition + "%" }}
            className={classes["progress-bar"]}
          ></div>
          {navItems}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
