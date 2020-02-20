import React, { useContext } from "react";
import { routeLinks } from "../../Routes";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.scss";
import NavigationButton from "./NavigationButton/NavigationButton";
import LayoutContext from "../../context/LayoutContext";
import { CSSTransition } from "react-transition-group";

const Navigation = props => {
  const layout = useContext(LayoutContext);

  const NavItems = routeLinks.map(routeLink => (
    <NavigationItem
      mobile={layout.openSidenav}
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
    enter: classes["mobile-nav--enter"],
    enterActive: classes["mobile-nav--enter-active"],
    enterDone: classes["mobile-nav--enter-active"],
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
        <nav className={classes["mobile-nav"]}>{NavItems}</nav>
      </CSSTransition>
      

      {!layout.openSidenav && <nav className={classes.sidenav}>{NavItems}</nav>}
    </React.Fragment>
  );
};

export default Navigation;
