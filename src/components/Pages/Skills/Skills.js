import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";

const Skills = () => {
  const skills = [
    { name: "HTML5", emphasis: true },
    { name: "JavaScript(ES6)", emphasis: true },
    { name: "CSS", emphasis: true },
    { name: "Angular", emphasis: true },
    { name: "React", emphasis: true },
    { name: "Git", emphasis: true },
    { name: "Stylus", emphasis: true },
    { name: "Angular CLI", emphasis: true },
    { name: "Agile Methodology", emphasis: true },
    { name: "Angular Material", emphasis: false },
    { name: "SCSS", emphasis: false },
    { name: "TypeScript", emphasis: false },
    { name: "VueJS", emphasis: false },
    { name: "Python", emphasis: false },
    { name: "VueJS", emphasis: false }
  ];

  
  return (
    <React.Fragment>
      <Cockpit
        title="Technical Skills"
        label="Some of the technical skills I've picked up in my time as a developer"
      ></Cockpit>
    </React.Fragment>
  );
};

export default Skills;
