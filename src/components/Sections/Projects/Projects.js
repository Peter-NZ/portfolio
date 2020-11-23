import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import LargeCard from "../../Common/Cards/LargeCard/LargeCard";
import classes from "./Projects.module.scss";
import {projectCardContent} from './ProjectsContent';

const Projects = () => {
  const projectCards = projectCardContent.map(projectCard => (
    <LargeCard
      key={projectCard.title}
      title={projectCard.title}
      icon={projectCard.icon}
      backgroundImage={projectCard.backgroundImage}
      bottomListItems={projectCard.bottomListItems}
    >
      {projectCard.text}
    </LargeCard>
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
