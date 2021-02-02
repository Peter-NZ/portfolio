import React, { useState } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Shell.module.scss";
import LayoutContext from "../../context/LayoutContext";
import Hero from "../../components/Sections/Hero/Hero";
import About from "../../components/Sections/About/About";
import Projects from "../../components/Sections/Projects/Projects";
import Skills from "../../components/Sections/Skills/Skills";
import Contact from "../../components/Sections/Contact/Contact";
import {
  routeContext as RouteContext,
  initialRouteContext,
} from "../../context/RouteContext";

const Shell = () => {
  const [openSidenav, setOpenSidenav] = useState(false);

  const toggleSidenav = () => {
    setOpenSidenav((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <RouteContext.Provider value={initialRouteContext}>
        <LayoutContext.Provider
          value={{
            openSidenav: openSidenav,
            toggleSidenav: toggleSidenav,
          }}
        >
          <Navigation />
        </LayoutContext.Provider>
        <main className={classes["center-wrapper"]}>
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
          </div>{" "}
        </main>
      </RouteContext.Provider>
      <Backdrop />
    </React.Fragment>
  );
};
export default Shell;
