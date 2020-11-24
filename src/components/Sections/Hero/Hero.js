import React from "react";
import classes from "./Hero.module.scss";
import Avatar from "../../Common/Avatar/Avatar";
import { useTrail, animated, config } from "react-spring";
import { Spring } from "react-spring/renderprops";

const Hero = () => {
  const trail = useTrail(4, {
    from: { transform: "translateY(10rem)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: config.gentle,
  });
  const titles = [
    <span key="1" className="title-primary--main">
      Peter Davidson
    </span>,
    <span key="2" className="title-primary--sub">
      Software Developer
    </span>,
  ].map((title, index) => (
    <animated.span
      key={title.key}
      style={{ ...trail[index], display: "block" }}
    >
      {title}
    </animated.span>
  ));

  const buttons = [
    <a
      key="1"
      className="btn--link btn--round btn--secondary btn--icon u-margin-right-3"
      href="#about"
    >
      ABOUT ME <i className="material-icons">keyboard_arrow_right</i>
    </a>,
    <a
      key="2"
      className="btn--link btn--round btn--primary btn--icon"
      href="#work"
    >
      MY WORK <i className="material-icons">keyboard_arrow_right</i>
    </a>,
  ].map((button, index) => (
    <animated.span
      key={button.key}
      style={{ ...trail[index + 2], display: "block" }}
    >
      {button}
    </animated.span>
  ));

  return (
    <header className={classes["hero"]}>
      <div>
        <h1 className="title-primary">{titles}</h1>
        <div className={classes["hero__buttons"]}>{buttons}</div>
      </div>
      <Spring
        config={config.slow}
        from={{ transform: "translateX(20rem)", opacity: 0 }}
        to={{ transform: "translateX(0)", opacity: 1 }}
      >
        {(props) => (
          <animated.div style={props}>
            <Avatar></Avatar>
          </animated.div>
        )}
      </Spring>
    </header>
  );
};

export default Hero;
