import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import classes from "./Skills.module.scss";
const Skills = () => {
  const skillProps = [
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
    { name: "Python", emphasis: false },
    { name: "VueJS", emphasis: false }
  ];
  let startCol = 1;
  const skills = skillProps.map((skill, i) => {
    let row = 1;
    if (i > 4) {
      row = i < 9 ? 2 : 3;
      if(startCol > 10){
        startCol = row === 3 ? 1 : 2;
      }
    }
    const gridPos = `${row} / ${startCol} / ${row} / ${startCol + 2}`;
    startCol += 2;
    return (
      <div style={{ gridArea: gridPos }} className={classes["skill-hexagon"]}>
        <span>{skill.name}</span>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Cockpit
        title="Technical Skills"
        label="Some of the technical skills I've picked up in my time as a developer"
      ></Cockpit>
      <div className={classes.skills}>{skills}</div>
    </React.Fragment>
  );
};

export default Skills;
