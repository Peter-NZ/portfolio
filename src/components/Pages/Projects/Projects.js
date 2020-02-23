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
      text: (
        <span>
          This portfolio site was built using a combination of ReactJS and SCSS
          with CSS modules. It provided a good way for me to put some of the
          things I have learnt recently about React and responsive web
          development into practice in a real application. I created the
          background using the{" "}
          <a
            className="card-link"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
          >
            HTML canvas API
          </a>
          , it features a randomly generated star field along with animated
          shooting stars that appear based on random number generation. The
          icons used in the site are all taken from Google’s excellent{" "}
          <a
            className="card-link"
            href="https://material.io/resources/icons/?style=baseline"
          >
            material design icon library
          </a>
          .
        </span>
      ),
      bottomListItems: [
        { color: "#a2443f", label: "Angular" },
        { color: "#a2443f", label: "React" }
      ]
    },
    {
      title: "Various Prototypes",
      icon: "call_split",
      text: (
        <span>
          Throughout my time at DXC Technology I have been the lead front end
          developer for a variety of prototype and proof of concept front end
          applications. This has allowed me to apply my skills to a variety of
          different business cases and clients as well as gain experience
          helping mentor others on various front end technologies. Due to the
          nature of many of these projects tight deadlines were involved, this
          has helped develop my ability to deliver working software on a
          difficult schedule with rapidly changing requirements.
        </span>
      ),
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
