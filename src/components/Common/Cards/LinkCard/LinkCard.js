import React from "react";
import { Link } from "react-router-dom";
import classes from "./LinkCard.module.scss";
import PropTypes from "prop-types";
const LinkCard = props => {
  return (
    <Link to={props.link} className={classes.card}>
      <div className={classes["card__top"]}>
        <div className={classes["card__circle"]}>
          <i className={`${classes["card__icon"]} material-icons`}>
            {props.icon}
          </i>
        </div>
      </div>
      <h2 className={classes["card__title"]}>{props.title}</h2>
      <p className={classes["card__text"]}>{props.subTitle}</p>
    </Link>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  backgroundGradient: PropTypes.string
};
