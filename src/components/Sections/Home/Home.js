import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default Home;
