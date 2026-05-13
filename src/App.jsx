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
import Testimonials from "./pages/Testimonials";
import Intro from "./pages/Intro";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Drive />
      <Intro/>
      <Impact />
      <TechStack/>
      <Projects />
      {/* <Testimonials/> */}
      <Journey/>
      <DevOps/>
      <Contact/>
    </>
  );
};

export default App;
