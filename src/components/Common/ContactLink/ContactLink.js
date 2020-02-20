import React from "react";
import PropTypes from "prop-types";
import classes from './ContactLink.module.scss';
const ContactLink = (props) => {
  return (
    <a
      className={classes['contact']}
      href={props.href}
    >
      <div className={classes['contact__circle']}>
        <i className={[classes['contact__icon'], 'material-icons'].join(' ')}>{props.icon}</i>
      </div>
      <div>
        <h2 className={classes['contact__heading']}>{props.title}</h2>
        <p className={classes['contact__sub-title']}>{props.subTitle}</p>
      </div>
    </a>
  );
};

export default ContactLink;

ContactLink.prototypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.string
};
