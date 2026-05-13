import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Drive from "./pages/Drive";
import Impact from "./pages/Impact";
import TechStack from "./pages/TechStack";
import Journey from "./pages/Journey";
import DevOps from "./pages/Devops";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Drive />
      <Impact />
      <TechStack/>
      <Projects />
      <Journey/>
      <DevOps/>
      <Contact/>
    </>
  );
};

export default App;
