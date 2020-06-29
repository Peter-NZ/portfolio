import React from 'react';

export const projectCardContent = [
    {
      title: "INZ Request Processing System",
      icon: "flight_takeoff",
      text: (
        <span>
          Since November 2018 I have been working as the primary front end
          developer on the DXC Technology team for this project. My role has
          been to create and maintain a variety of internal and external facing
          greenfields business applications built in Angular as part of an agile
          team. Through this work I have gained a significant amount of
          experience integrating RESTful API services with Angular applications
          to enable complex user interactions and create a first class user
          experience.
        </span>
      ),
      bottomListItems: [
        { color: "#a2443f", label: "Angular" },
        { color: "#a2443f", label: "NgRx" },
        { color: "#a2443f", label: "RxJS" },
        { color: "#a2443f", label: "Angular Material" },
        { color: "#a2443f", label: "Jasmine" },
        { color: "#139ffe", label: "TypeScript" },
        { color: "#656c87", label: "Agile" },
        { color: "#12531d", label: "Stylus" },
        { color: "#9d31be", label: "Git" }
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
          . In future I am looking to expand the site with 3D interactive content using <a className="card-link" href="https://threejs.org/">three.js</a>.
        </span>
      ),
      bottomListItems: [
        { color: "#00d8ff", label: "React" },
        { color: "#9d31be", label: "Git" },
        { color: "#cf649a", label: "SCSS" },
        { color: "#00d8ff", label: "CSS Modules" },
        { color: "#e44d26", label: "HTML5" },
        { color: "#7f71ad", label: "JavaScript" },
        { color: "#656c87", label: "Agile" },
        { color: "#139ffe", label: "TypeScript" }
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
        { color: "#a2443f", label: "Vue JS" },
        { color: "#9d31be", label: "Git" },
        { color: "#7f71ad", label: "JavaScript" },
        { color: "#e44d26", label: "HTML5" },
        { color: "#12531d", label: "Stylus" }
      ]
    },
    {
      title: "Fitness Tracker (WIP)",
      icon: "timeline",
      text: (
        <span>
          I am currently working on a fitness tracking web app to track and
          visualise progress over time for specific lifts and exercises. I am
          using this as an opportunity to build a progressive web application in
          React using Redux for state management with Google Firebase for data
          persistence and authentication. I have decided to use the{" "}
          <a className="card-link" href="https://nivo.rocks/">
            Nivo
          </a>{" "}
          charting framework to visualize the data as it offers a wide variety
          of functional chart components with a great look and feel.
        </span>
      ),
      bottomListItems: [
        { color: "#00d8ff", label: "React" },
        { color: "#764abc", label: "Redux" },
        { color: "#f5820b", label: "Cloud Firestore" },
        { color: "#f5820b", label: "Firebase Auth" },
        { color: "#cf649a", label: "SCSS" },
        { color: "#7f71ad", label: "JavaScript" },
        { color: "#ff6a51", label: "Nivo Charts" },
        { color: "#9d31be", label: "Git" }
      ]
    }
  ];