import React from "react";
import PropTypes from "prop-types";
import classes from "./LargeCard.module.scss";

const LargeCard = props => {
  const bottomListItems = props.bottomListItems.map(listItem => (
    <li key={listItem.label} className={classes["card__list-item"]}>
      <div
        className={classes["card__hexagon"]}
        style={{ backgroundColor: listItem.color }}
      ></div>
      {listItem.label}
    </li>
  ));
  return (
    <section className={classes.card}>
      <div  className={classes["card__top"]}>
        <div style={props.backgroundImage} className={classes["card__background"]}></div>
        <div className={classes["card__circle"]}>
          <i className={`${classes["card__icon"]} material-icons`}>
            {props.icon}
          </i>
        </div>
      </div>
      <div className={classes["card__content"]}>
        <h2 className={classes["card__title"]}>{props.title}</h2>
        <p className={classes["card__text"]}>{props.text}</p>
      </div>
      <div className={classes["card__bottom"]}>
        <div style={props.backgroundImage} className={classes["card__background"]}></div>
        <ul className={classes["card__list-items"]}>{bottomListItems}</ul>
      </div>
    </section>
  );
};

export default LargeCard;

LargeCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  bottomListItems: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};
