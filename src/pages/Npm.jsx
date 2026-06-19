import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiNpm,
  SiTypescript,
  SiReact,
  SiVite,
  SiGreensock,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "GSAP", icon: <SiGreensock /> },
];

const highlights = [
  { label: "Published", value: "Open Source" },
  { label: "Maintained", value: "CI/CD Pipeline" },
  { label: "Built With", value: "TS + GSAP" },
  { label: "Purpose", value: "Dev Toolkit" },
];

const Npm = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden grain">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="top">Open Source Contribution</p>

          <h2 className="heading max-w-4xl mx-auto">
            Built a library for <span>developers building products</span>
          </h2>

          <p className="subheading max-w-2xl mx-auto px-2">
            Published a production-ready TypeScript-first React package solving
            real-world animation use cases for developers shipping modern UI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {/* LEFT */}
          <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-elegant">
            {/* package header */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-lg sm:text-2xl shrink-0">
                <SiNpm />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg sm:text-2xl font-semibold wrap-break-word">
                  react-gsap-effects
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Reusable React + GSAP animation components
                </p>

                {/* credibility strip */}
                <p className="text-[11px] sm:text-xs mt-2 text-green-400">
                  Trusted by developers • Published on npm registry
                </p>
              </div>
            </div>

            {/* npm badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <img
                src="https://img.shields.io/npm/v/react-gsap-effects"
                alt="npm version"
                className="h-5 sm:h-6"
              />

              <img
                src="https://img.shields.io/npm/dm/react-gsap-effects"
                alt="npm downloads"
                className="h-5 sm:h-6"
              />
            </div>

            {/* description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-7 mb-6">
              A TypeScript-first package of reusable GSAP-powered React
              animation components built from production requirements. Designed
              for text reveals, stagger animations and scroll-triggered effects
              with simple plug-and-play integration.
            </p>

            {/* stack */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="glass px-3 py-2 sm:px-4 rounded-xl flex items-center gap-2 text-xs sm:text-sm"
                >
                  {tech.icon}
                  {tech.name}
                </div>
              ))}
            </div>

            {/* highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="glass rounded-xl p-3 sm:p-4">
                  <p className="text-[11px] sm:text-xs text-muted-foreground">
                    {item.label}
                  </p>

                  <p className="text-sm sm:text-base font-semibold mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-elegant flex flex-col">
            {/* install */}
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Installation
              </p>

              <div className="bg-black/30 rounded-xl p-3 sm:p-4 font-mono text-[11px] sm:text-sm overflow-x-auto scrollbar-hide">
                <p className="text-green-400 whitespace-nowrap mb-2">
                  npm install react-gsap-effects
                </p>

                <p className="text-green-400 whitespace-nowrap">
                  npm install gsap @gsap/react
                </p>
              </div>
            </div>

            {/* usage */}
            <div className="mb-4 flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Usage Example
              </p>

              <div className="bg-black/30 rounded-xl p-3 sm:p-4 font-mono text-[10px] sm:text-sm overflow-x-auto scrollbar-hide">
                <pre className="whitespace-pre-wrap wrap-break-word">
                  {`import { TextReveal } from "react-gsap-effects";
import "react-gsap-effects/styles";

<TextReveal
  text="Build beautiful user experiences"
  duration={1.2}
  stagger={0.05}
/>`}
                </pre>
              </div>
            </div>

            {/* links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              <a
                href="https://github.com/Ritik2513/react-gsap-effects"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl glass hover:scale-[1.02] transition-all flex justify-center items-center gap-2 text-sm"
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href="https://www.npmjs.com/package/react-gsap-effects"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl glass hover:scale-[1.02] transition-all flex justify-center items-center gap-2 text-sm"
              >
                <SiNpm />
                NPM
              </a>

              <a
                href="https://react-gsap-effects.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-gradient-primary text-black font-medium hover:scale-[1.02] transition-all flex justify-center items-center gap-2 text-sm"
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Npm;
