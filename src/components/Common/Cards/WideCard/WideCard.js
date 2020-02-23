import React from "react";
import classes from "./WideCard.module.scss";
import PropTypes from "prop-types";

const WideCard = props => {
  const topBackground = {
    backgroundImage: props.backgroundImage
  };
  return (
    <section className={classes.card}>
      <div style={topBackground} className={classes["card__side"]}>
        <div className={classes["card__circle"]}>
          <i className={`${classes["card__icon"]} material-icons`}>
            {props.icon}
          </i>
        </div>
      </div>
      <div className={classes["card__content"]}>
        <h2 className={classes["card__title"]}>{props.title}</h2>
        <p className={[classes["card__text"], 'content'].join(' ')}>{props.children}</p>
      </div>
    </section>
  );
};

export default WideCard;

WideCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string
};
