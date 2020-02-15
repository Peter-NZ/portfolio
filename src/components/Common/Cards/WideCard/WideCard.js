import React from 'react'
import classes from "./LinkCard.module.scss";
import PropTypes from "prop-types";

const WideCard = () => {
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
        <h2 className={classes["card__title"]}>{props.title}</h2>
        <p className={classes["card__text"]}>{props.subTitle}</p>
      </section>
    )
}

export default WideCard


LinkCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string
};
  