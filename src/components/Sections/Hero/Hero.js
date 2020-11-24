import React from "react";
import classes from "./Hero.module.scss";
import Avatar from "../../Common/Avatar/Avatar";
import classNames from "classnames";

const Hero = () => {
  return (
    <header className={classes["hero"]}>
      <div>
        <h1 className="title-primary">
          <span className="title-primary--main">Peter Davidson</span>
          <span className="title-primary--sub">Software Developer</span>
        </h1>
        <div className={classes['hero__buttons']}>
            <a className="btn--link btn--round btn--secondary btn--icon u-margin-right-3" href="#about">About me <i class="material-icons">keyboard_arrow_right</i></a>
            <a className="btn--link btn--round btn--primary btn--icon"  href="#work">Some of my Work <i class="material-icons">keyboard_arrow_right</i></a>
        </div>
      </div>
      <Avatar></Avatar>
    </header>
  );
};

export default Hero;
