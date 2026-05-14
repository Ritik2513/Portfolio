import React, { useEffect } from "react";
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
import Lenis from "lenis"

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
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
