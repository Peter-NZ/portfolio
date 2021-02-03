import React, { useState, useContext } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Shell.module.scss";
import LayoutContext from "../../context/LayoutContext";
import Hero from "../../components/Sections/Hero/Hero";
import About from "../../components/Sections/About/About";
import Projects from "../../components/Sections/Projects/Projects";
import Skills from "../../components/Sections/Skills/Skills";
import Contact from "../../components/Sections/Contact/Contact";
import { useInView } from "react-intersection-observer";

const Shell = () => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const [homeRef, homeInView, homeEntry] = useInView();
  const [aboutRef, aboutInView, aboutEntry] = useInView();
  const [workRef, workInView, workEntry] = useInView();
  const [skillsRef, skillsInView, skillsEntry] = useInView();
  const [contactRef, contactInView, contactEntry] = useInView();

  const toggleSidenav = () => {
    setOpenSidenav((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <LayoutContext.Provider
        value={{
          openSidenav: openSidenav,
          toggleSidenav: toggleSidenav,
        }}
      >
        <Navigation
          homeInView={homeInView}
          aboutInView={aboutInView}
          workInView={workInView}
          skillsInView={skillsInView}
          contactInView={contactInView}
        />
      </LayoutContext.Provider>
      <main className={classes["center-wrapper"]}>
        <div ref={homeRef} id="home">
          <Hero />
        </div>
        <div
          ref={aboutRef}
          id="about"
          className="section__wrapper section__wrapper--solid"
        >
          <About />
        </div>
        <div ref={workRef} id="work" className="section__wrapper">
          <Projects />
        </div>
        <div ref={skillsRef} id="skills" className="section__wrapper">
          <Skills />
        </div>
        <div ref={contactRef} id="contact" className="section__wrapper">
          <Contact />
        </div>
      </main>
      <Backdrop />
    </React.Fragment>
  );
};
export default Shell;
