import React from "react";
import classes from "../Navigation.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const NavigationItem = (props) => {
  console.log(props.itemSettings.title , props.active);
  return (
    <a
      className={clsx(
        props.mobile && classes["sidenav__item--mobile"],
        !props.mobile && classes["sidenav__item"],
        props.active && classes["sidenav__item--active"]
      )}
      href={props.itemSettings.path}
      onClick={props.toggleSidenav}
    >
      <i
        className={`${
          props.mobile
            ? classes["sidenav__icon--mobile"]
            : classes["sidenav__icon"]
        } material-icons`}
      >
        {props.itemSettings.icon}
      </i>
      {props.itemSettings.title}
    </a>
  );
};

export default NavigationItem;

NavigationItem.propTypes = {
  toggleSidenav: PropTypes.func,
  mobile: PropTypes.bool,
  active: PropTypes.bool,
  itemSettings: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};
