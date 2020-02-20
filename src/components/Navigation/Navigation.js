import React, { useContext } from "react";
import { routeLinks } from "../../Routes";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.scss";
import NavigationButton from "./NavigationButton/NavigationButton";
import LayoutContext from "../../context/LayoutContext";
import { CSSTransition } from "react-transition-group";

const Navigation = props => {
  const NavItems = routeLinks.map(routeLink => (
    <NavigationItem key={routeLink.title} itemSettings={routeLink} />
  ));
  const layout = useContext(LayoutContext);
  const animationClasses = {
    enter: classes['mobile-nav--enter'],
    enterActive: classes['mobile-nav--enter-active'],
    enterDone: classes['mobile-nav--enter-active'],
    exit: classes['mobile-nav--exit'],
    exitActive: classes['mobile-nav--exit-active']
  };

  return (
    <React.Fragment>
      <CSSTransition unmountOnExit timeout={200} in={layout.openSidenav} classNames={animationClasses}>
      <nav className={classes["mobile-nav"]}></nav>
    </CSSTransition>
      <NavigationButton
        open={layout.openSidenav}
        toggleSidenav={layout.toggleSidenav}
      />
      
      <nav className={classes.sidenav}>{NavItems}</nav>
    </React.Fragment>
  );
};

export default Navigation;
