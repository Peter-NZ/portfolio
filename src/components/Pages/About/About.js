import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import WideCard from "../../Common/Cards/WideCard/WideCard";
import classes from "./About.module.scss";
const About = () => {
  const sideBackgroundGradient = 'linear-gradient(45deg, rgba(79, 79, 79, 0.03) 0%, rgba(79, 79, 79, 0.03) 25%,rgba(215, 215, 215, 0.03) 25%, rgba(215, 215, 215, 0.03) 100%),linear-gradient(0deg, rgba(174, 174, 174, 0.1) 0%, rgba(174, 174, 174, 0.1) 36%,rgba(189, 189, 189, 0.1) 36%, rgba(189, 189, 189, 0.1) 100%),linear-gradient(0deg, rgba(197, 197, 197, 0.08) 0%, rgba(197, 197, 197, 0.08) 61%,rgba(118, 118, 118, 0.08) 61%, rgba(118, 118, 118, 0.08) 100%),linear-gradient(45deg, rgba(50, 50, 50, 0.08) 0%, rgba(50, 50, 50, 0.08) 3%,rgba(30, 30, 30, 0.08) 3%, rgba(30, 30, 30, 0.08) 100%),linear-gradient(0deg, rgba(10, 10, 10, 0.03) 0%, rgba(10, 10, 10, 0.03) 64%,rgba(112, 112, 112, 0.03) 64%, rgba(112, 112, 112, 0.03) 100%),linear-gradient(135deg, rgba(65, 65, 65, 0.09) 0%, rgba(65, 65, 65, 0.09) 44%,rgba(236, 236, 236, 0.09) 44%, rgba(236, 236, 236, 0.09) 100%),linear-gradient(90deg, rgba(124, 124, 124, 0.03) 0%, rgba(124, 124, 124, 0.03) 81%,rgba(138, 138, 138, 0.03) 81%, rgba(138, 138, 138, 0.03) 100%),linear-gradient(90deg, hsl(189,61%,44%),hsl(189,61%,44%))';
  const wideCardProps = [
    {
      title: "Overview",
      icon: "perm_identity",
      text: "A few works about me",
      backgroundImage: sideBackgroundGradient
    },
    {
      title: "What I do",
      icon: "laptop",
      text: "A selection of my technical skills",
      backgroundImage: sideBackgroundGradient
    },
    {
      title: "Education",
      icon: "school",
      text: "Some of the projects I've worked on",
      backgroundImage: sideBackgroundGradient
    }
  ];
  const wideCards = wideCardProps.map(wideCard => (
    <WideCard
      title={wideCard.title}
      icon={wideCard.icon}
      text={wideCard.text}
      backgroundImage={wideCard.backgroundImage}
    ></WideCard>
  ));

  return (
    <React.Fragment>
      <Cockpit title="About Me"></Cockpit>
      <div className={classes.cards}>{wideCards}</div>
    </React.Fragment>
  );
};

export default About;
