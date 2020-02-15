import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import LinkCard from "../../Common/Cards/LinkCard/LinkCard";
import classes from "./Home.module.scss";
const Home = () => {
  const links = [
    {
      text: "Linked In",
      href: "https://www.linkedin.com/in/peteramdavidson"
    },
    {
      text: "GitHub",
      href: "https://github.com/Peter-NZ"
    },
    {
      text: "MySpace",
      href: "#"
    }
  ];
  const linkCardProps = [
    {
      title: "About",
      link: "/about",
      icon: "perm_identity",
      subTitle: "A few works about me"
    },
    {
      title: "Skills",
      link: "/skills",
      icon: "whatshot",
      subTitle: "A selection of my technical skills"
    },
    {
      title: "My Work",
      link: "/projects",
      icon: "trending_up",
      subTitle: "Some of the projects I've worked on"
    },
    {
      title: "Contact Me",
      link: "/contact",
      icon: "mail_outline",
      subTitle: "Where you can drop me a line"
    }
  ];
  const linkCards = linkCardProps.map(linkCard => (
    <LinkCard
      title={linkCard.title}
      icon={linkCard.icon}
      link={linkCard.link}
      subTitle={linkCard.subTitle}
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
