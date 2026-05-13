import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Drive from "./pages/Drive";
import Impact from "./pages/Impact";
import TechStack from "./pages/TechStack";
import Journey from "./pages/Journey";

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
    </>
  );
};

export default App;
