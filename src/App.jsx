import React, { useEffect } from "react";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Drive from "./pages/Drive";
import Impact from "./pages/Impact";
import TechStack from "./pages/TechStack";
import Journey from "./pages/Journey";
import DevOps from "./pages/Devops";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import FrontendSkill from "./pages/FrontendSkill";

const App = () => {
  return (
    <>
      <Navbar />
      <Drive />
      <Intro />
      <Impact />
      <TechStack />
      <FrontendSkill />
      <Projects />
      <Journey />
      <DevOps />
      <Contact />
    </>
  );
};

export default App;
