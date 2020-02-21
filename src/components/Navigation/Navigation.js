import React, { useContext } from "react";
import { routeLinks } from "../../Routes";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.scss";
import NavigationButton from "./NavigationButton/NavigationButton";
import LayoutContext from "../../context/LayoutContext";
import { CSSTransition } from "react-transition-group";

const Navigation = props => {
  const layout = useContext(LayoutContext);

  const navItems = routeLinks.map(routeLink => (
    <NavigationItem key={routeLink.title} itemSettings={routeLink} />
  ));
  const navItemsMobile = routeLinks.map(routeLink => (
    <NavigationItem
      mobile={true}
      key={routeLink.title}
      itemSettings={routeLink}
    />
  ));
  const backgroundAnimationClasses = {
    enter: classes["background--enter"],
    enterActive: classes["background--enter-active"],
    enterDone: classes["background--enter-active"],
    exit: classes["background--exit"],
    exitActive: classes["background--exit-active"]
  };
  const navAnimationClasses = {
    enterActive: classes["mobile-nav--enter-done"],
    enterDone: classes["mobile-nav--enter-done"],
    exit: classes["mobile-nav--exit"],
    exitActive: classes["mobile-nav--exit-active"]
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
      <NavigationButton
        open={layout.openSidenav}
        toggleSidenav={layout.toggleSidenav}
      />
      <CSSTransition
        unmountOnExit
        timeout={400}
        in={layout.openSidenav}
        classNames={navAnimationClasses}
      >
        <nav className={classes["mobile-nav"]}>{navItemsMobile}</nav>
      </CSSTransition>

      {!layout.openSidenav && <nav className={classes.sidenav}>{navItems}</nav>}
    </React.Fragment>
  );
};

export default Navigation;
