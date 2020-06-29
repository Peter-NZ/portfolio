import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import LinkCard from "../../Common/Cards/LinkCard/LinkCard";
import classes from "./Home.module.scss";
import {links, linkCardProps} from './HomeContent';
const Home = () => {
  
  const linkCards = linkCardProps.map(linkCard => (
    <LinkCard
      key={linkCard.title}
      title={linkCard.title}
      icon={linkCard.icon}
      link={linkCard.link}
      subTitle={linkCard.subTitle}
      backgroundImage={linkCard.backgroundImage}
    ></LinkCard>
  ));
  return (
    <React.Fragment>
      <Cockpit
        title="Peter Davidson"
        subTitle="FRONT-END WEB DEVELOPER"
        links={links}
      ></Cockpit>
      <nav className={classes.cards}>{linkCards}</nav>
    </React.Fragment>
  );
};

export default Home;
