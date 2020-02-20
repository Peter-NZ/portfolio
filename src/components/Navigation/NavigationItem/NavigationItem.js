import React from "react";
import classes from "../Navigation.module.scss";
import { NavLink } from "react-router-dom";
const NavigationItem = props => {
  return (
    <NavLink
      exact
      activeClassName={classes["sidenav__item--active"]}
      className={props.mobile ?classes['sidenav__item--mobile']: classes['sidenav__item']}
      to={props.itemSettings.path}
    >
      <i className={`${props.mobile ? classes['sidenav__icon--mobile']: classes['sidenav__icon']} material-icons`}>
        {props.itemSettings.icon}
      </i>
      {props.itemSettings.title}
    </NavLink>
  );
};

export default NavigationItem;
