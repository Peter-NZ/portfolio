import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import WideCard from "../../Common/Cards/WideCard/WideCard";
import classes from "./About.module.scss";
import { wideCardProps } from "./AboutContent";

const About = () => {
  const wideCards = wideCardProps.map((wideCard) => (
    <WideCard
      key={wideCard.title}
      title={wideCard.title}
      icon={wideCard.icon}
      backgroundImage={wideCard.backgroundImage}
    >
      {wideCard.text}
    </WideCard>
  ));

  return (
    <React.Fragment>
      <Cockpit title="About Me"></Cockpit>
      <div className={classes.cards}>{wideCards}</div>
    </React.Fragment>
  );
};

export default About;
