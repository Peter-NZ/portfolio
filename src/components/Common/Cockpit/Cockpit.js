import React from "react";
import styles from "./Cockpit.module.scss";
import PropTypes from "prop-types";
const Cockpit = props => {
  const links = props.links
    ? props.links.map(link => (
        <a className={styles['portfolio-heading__link']} key={link.href} href={link.href}>
          {link.text}
        </a>
      ))
    : null;
  return (
    <React.Fragment>
      <header className={styles["portfolio-heading"]}>
        <h1>
          <span className={styles["portfolio-heading--main"]}>
            {props.title}
          </span>
          {props.subTitle ? (
            <span className={styles["portfolio-heading--sub"]}>
              {props.subTitle}
            </span>
          ) : null}
        </h1>
      </header>
      {props.links ? <nav className={styles['portfolio-heading__links']}>{links}</nav> : null}
    </React.Fragment>
  );
};

export default Cockpit;

Cockpit.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};
