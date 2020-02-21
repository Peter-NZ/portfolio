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
      subTitle: "A few words about me",
      backgroundImage: "linear-gradient(to bottom right, #30cfd0, #5b397d)"
    },
    {
      title: "Skills",
      link: "/skills",
      icon: "whatshot",
      subTitle: "A selection of my technical skills",
      backgroundImage: "linear-gradient(to bottom left, #30cfd0, #330867)"
    },
    {
      title: "My Work",
      link: "/projects",
      icon: "trending_up",
      subTitle: "Some of the projects I've worked on",
      backgroundImage: "linear-gradient(to bottom right, #30cfd0, #3c1053)"
    },
    {
      title: "Contact Me",
      link: "/contact",
      icon: "mail_outline",
      subTitle: "Where you can drop me a line",
      backgroundImage: "linear-gradient(to bottom left, #30cfd0, #762b8f)"
    }
  ];
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
