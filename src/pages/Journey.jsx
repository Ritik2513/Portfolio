"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ========= DATA ========= */

const journeyData = [
  {
    year: "2020",
    title: "BCA — Started Coding",
    icon: "🎓",
    desc: "Discovered web development and built my first UI projects.",
  },
  {
    year: "2023",
    title: "Digipodium Internship",
    icon: "💼",
    desc: "Worked on real client projects and learned production workflow.",
  },
  {
    year: "2024",
    title: "MCA — MERN Specialization",
    icon: "🚀",
    desc: "Built full-stack apps and strengthened DSA & architecture.",
  },
  {
    year: "2025",
    title: "Click Melon Media",
    icon: "🏢",
    desc: "Shipping production websites and real client products.",
  },
];

/* ========= COMPONENT ========= */

export default function JourneyAwwwards() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    const totalWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      // Horizontal scroll
      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          scrub: 1,
          pin: true,
        },
      });

      // Progress line animation
      gsap.fromTo(
        progress,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            scrub: 1,
          },
        },
      );

      // Card animation
      gsap.from(".journey-card", {
        opacity: 0,
        scale: 0.8,
        rotate: 3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top center",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen text-white overflow-hidden"
    >
      {/* Top heading */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
          My Career Story
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mt-3">
          From Student → Shipping Products
        </h2>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-16 left-0 w-full h-[2px] bg-white/20">
        <div ref={progressRef} className="h-full bg-white w-full scale-x-0" />
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="flex items-center h-full gap-40 px-40 mt-50">
        {journeyData.map((item, i) => (
          <div key={i} className="journey-card min-w-[420px]">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
              <div className="text-6xl mb-6">{item.icon}</div>

              <p className="text-sm text-gray-400 tracking-widest">
                {item.year}
              </p>

              <h3 className="text-3xl font-bold mt-2 mb-4">{item.title}</h3>

              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
