import React from "react";
import classes from "./Skills.module.scss";
import { skillProps } from "./SkillsContent";
import Divider from "../../Divider/Divider";


const Skills = () => {
  let startCol = 1;
  const skills = skillProps.map((skill, i) => {
    let row = 1;
    if (i > 4) {
      row = i < 9 ? 2 : 3;
      if (startCol >= 10) {
        startCol = row === 3 ? 1 : 2;
      }
    }
    const gridPos = `${row} / ${startCol} / ${row} / ${startCol + 2}`;
    startCol += 2;
    const skillClasses = skill.emphasis
      ? [classes["skill-hexagon"], classes["emphasis"]].join(" ")
      : classes["skill-hexagon"];
    return (
      <div
        key={skill.name}
        style={{ gridArea: gridPos }}
        className={skillClasses}
      >
        <span className="content">{skill.name}</span>
      </div>
    );
  });

  return (
    <div class="section">
      <div className="section__content">
        <Divider>Technical Skills</Divider>
        <div className="u-center">
          <div className={classes.skills}>{skills}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
