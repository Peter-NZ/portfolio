import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import WideCard from "../../Common/Cards/WideCard/WideCard";
import classes from "./About.module.scss";
import { wideCardProps } from "./AboutContent";
import ContentCard from "../../Common/Cards/ContentCard/ContentCard";

const About = () => {
  const cards = wideCardProps.map((card) => (
    <ContentCard key={card.title} title={card.title} icon={card.icon}>
      {card.text}
    </ContentCard>
  ));

  return (
    <div class="section">
      <div className="section__content">
        <h2 className="heading-secondary">About Me</h2>
        <div className={classes.cards}>{cards}</div>
      </div>
    </div>
  );
};

export default About;
