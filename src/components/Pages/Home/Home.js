import React, { useContext } from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import LinkCard from "../../Common/Cards/LinkCard/LinkCard";
import classes from "./Home.module.scss";
import { links } from "./HomeContent";
import { routeContext } from "../../../context/RouteContext";

const Home = () => {
  const context = useContext(routeContext);
  const linkCardProps = [
    {
      title: "About",
      link: context.routePaths.about,
      icon: "perm_identity",
      subTitle: "A few words about me",
      backgroundImage: "linear-gradient(to bottom right, #30cfd0, #5b397d)",
    },
    {
      title: "My Work",
      link: context.routePaths.projects,
      icon: "trending_up",
      subTitle: "Some projects I've worked on",
      backgroundImage: "linear-gradient(to bottom right, #30cfd0, #3c1053)",
    },
    {
      title: "Skills",
      link: context.routePaths.skills,
      icon: "whatshot",
      subTitle: "A selection of my technical skills",
      backgroundImage: "linear-gradient(to bottom left, #30cfd0, #330867)",
    },
    {
      title: "Contact Me",
      link: context.routePaths.contacts,
      icon: "mail_outline",
      subTitle: "Where you can drop me a line",
      backgroundImage: "linear-gradient(to bottom left, #30cfd0, #762b8f)",
    },
  ];
  const linkCards = linkCardProps.map((linkCard) => (
    <LinkCard
      key={linkCard.title}
      title={linkCard.title}
      icon={linkCard.icon}
      link={linkCard.link || ''}
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
