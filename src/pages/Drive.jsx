import React from "react";
import { motion } from "framer-motion";

const Drive = () => {
  return (
    <section className="relative md:min-h-screen py-24 overflow-hidden flex items-center justify-center px-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs md:text-sm text-muted-foreground mb-6"
        >
          <span className="text-emerald-400">●</span>
          Available for select projects · Q3 2026
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-bold leading-[0.95] 
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
          max-w-4xl mx-auto"
        >
          I build products that drive{" "}
          <span className="text-gradient">real results.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-6 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground"
        >
          MERN Stack Engineer delivering production-ready applications,
          performance optimization and scalable deployments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
          >
            View Projects →
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full glass font-medium hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-foreground/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Drive;
