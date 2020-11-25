import React from "react";
import LargeCard from "../../Common/Cards/LargeCard/LargeCard";
import classes from "./Projects.module.scss";
import { projectCardContent } from "./ProjectsContent";

const Projects = () => {
  const projectCards = projectCardContent.map((projectCard) => (
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
    <div class="section">
      <div className="section__content">
        <h2 className="heading-secondary">My Work</h2>
        <div className={classes.cards}>{projectCards}</div>
      </div>
    </div>
  );
};

export default Projects;
