import React, {useContext} from "react";
import { routeLinks } from "../../Routes";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.scss";
import NavigationButton from "./NavigationButton/NavigationButton";
import LayoutContext from "../../context/LayoutContext";

const Navigation = props => {
  const NavItems = routeLinks.map(routeLink => (
    <NavigationItem key={routeLink.title} itemSettings={routeLink} />
  ));
  const layout = useContext(LayoutContext);
  console.log(layout);
  const navClasses = layout.openSidenav ? [classes.sidenav] : [classes.sidenav, classes['sidenav--hidden']].join(' ');
  return (
    <React.Fragment>
      <NavigationButton
        open={layout.openSidenav}
        toggleSidenav={layout.toggleSidenav}
      />
      <nav className={navClasses}>{NavItems}</nav>
    </React.Fragment>
  );
};

export default Navigation;
