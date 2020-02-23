import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import LargeCard from "../../Common/Cards/LargeCard/LargeCard";
import classes from "./Projects.module.scss";

const Projects = () => {
  const projectCardProps = [
    {
      title: "Electronic Travel Authority",
      icon: "flight_takeoff",
      text: "A few works about me",
      bottomListItems: [
        { color: "#a2443f", label: "Angular" },
        { color: "#a2443f", label: "React" }
      ]
    },
    {
      title: "Personal Portfolio Site",
      icon: "perm_identity",
      text: "A selection of my technical skills",
      bottomListItems: [
        { color: "#a2443f", label: "Angular" },
        { color: "#a2443f", label: "React" }
      ]
    },
    {
      title: "Various Prototypes",
      icon: "call_split",
      text: "Some of the projects I've worked on",
      bottomListItems: [
        { color: "#a2443f", label: "Angular" },
        { color: "#a2443f", label: "Vue JS" }
      ]
    }
  ];
  const projectCards = projectCardProps.map(projectCard => (
    <LargeCard
      key={projectCard.title}
      title={projectCard.title}
      icon={projectCard.icon}
      backgroundImage={projectCard.backgroundImage}
      bottomListItems={projectCard.bottomListItems}
    >{projectCard.text}</LargeCard>
  ));
  return (
    <React.Fragment>
      <Cockpit
        title="My Work"
        label="Some of the projects I have worked on professionally and in my spare time"
      ></Cockpit>
      <div className={classes.cards}>{projectCards}</div>
    </React.Fragment>
  );
};

export default Projects;
