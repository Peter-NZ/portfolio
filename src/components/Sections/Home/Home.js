import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <React.Fragment>
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="section__wrapper section__wrapper--solid">
        <About />
      </div>
      <div id="work" className="section__wrapper">
        <Projects />
      </div>
      <div id="skills" className="section__wrapper">
        <Skills />
      </div>
      <div id="contact" className="section__wrapper">
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default Home;
