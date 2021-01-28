import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import WideCard from "../../Common/Cards/WideCard/WideCard";
import classes from "./About.module.scss";
import { wideCardProps } from "./AboutContent";
import ContentCard from "../../Common/Cards/ContentCard/ContentCard";
import Divider from "../../Divider/Divider";

const About = () => {
  const cards = wideCardProps.map((card) => (
    <ContentCard key={card.title} title={card.title} icon={card.icon}>
      {card.text}
    </ContentCard>
  ));

  return (
    <section className="section">
      <div className="section__content">
        <Divider>About</Divider>
        <div className={classes.cards}>{cards}</div>
      </div>
    </section>
  );
};

export default About;
