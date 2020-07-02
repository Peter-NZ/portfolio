import React from "react";
import classes from "../Navigation.module.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationItem = props => {
  return (
    <NavLink
      exact
      activeClassName={classes["sidenav__item--active"]}
      className={props.mobile ? classes['sidenav__item--mobile']: classes['sidenav__item']}
      to={props.itemSettings.path}
      onClick={props.toggleSidenav}
    >
      <i className={`${props.mobile ? classes['sidenav__icon--mobile']: classes['sidenav__icon']} material-icons`}>
        {props.itemSettings.icon}
      </i>
      {props.itemSettings.title}
    </NavLink>
  );
};

export default NavigationItem;

NavigationItem.propTypes = {
  toggleSidenav: PropTypes.func,
  mobile: PropTypes.bool,
  itemSettings: 
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }
  )
};
