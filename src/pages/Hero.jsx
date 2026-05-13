import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  /* ================= PARALLAX ENGINE ================= */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  /* ================= ANIMATION VARIANTS ================= */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, delay },
    }),
  };

  return (
    <section className="bg-[#f5f5f7] font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* ================= MOBILE HERO ================= */}
        <div className="md:hidden min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
          <motion.h2
            variants={fadeDown}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-[42px] italic"
          >
            I'm
          </motion.h2>

          <motion.h2
            variants={fadeDown}
            initial="hidden"
            animate="show"
            custom={0.25}
            className="text-[42px] italic -mt-3"
          >
            Software
          </motion.h2>

          <motion.h1
            variants={scaleIn}
            initial="hidden"
            animate="show"
            custom={0.35}
            className="text-[70px] leading-none font-bold text-[#1E35FF] -mt-2"
          >
            Engineer
          </motion.h1>

          <motion.img
            src="/Hero/photo.png"
            alt="hero"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="w-[260px] mt-6 mb-8"
          />

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
            className="bg-[#1E35FF] text-white px-8 py-3 rounded-full shadow-xl"
          >
            LET’S CHAT
          </motion.button>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.7}
            className="mt-12 text-xs max-w-xs"
          >
            <div className="w-10 h-[2px] bg-black mx-auto mb-3"></div>
            SPECIALIZED IN WEB DESIGN, UX/UI WEBFLOW, AND FRONT END DEVELOPMENT.
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.85}
            className="mt-6 text-xs text-gray-600 max-w-xs"
          >
            Build a credible, conversion-focused website that shows your ideal
            client exactly how you can help them.
          </motion.p>
        </div>

        {/* ================= DESKTOP HERO ================= */}
        <div
          onMouseMove={handleMouseMove}
          className="hidden md:block relative min-h-screen overflow-hidden pt-28"
        >
          {/* I'm */}
          <motion.h2
            style={{ x: smoothX.get() * 0.02, y: smoothY.get() * 0.02 }}
            variants={fadeDown}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="absolute top-[12%] left-[5%] lg:left-[10%] text-[clamp(40px,8vw,120px)] italic"
          >
            I'm
          </motion.h2>

          {/* Software */}
          <motion.h2
            style={{ x: smoothX.get() * 0.02, y: smoothY.get() * 0.02 }}
            variants={fadeDown}
            initial="hidden"
            animate="show"
            custom={0.25}
            className="absolute top-[12%] right-[5%] lg:right-[2%] text-[clamp(40px,8vw,120px)] italic"
          >
            Software
          </motion.h2>

          {/* Engi */}
          <motion.h2
            style={{ x: smoothX.get() * 0.05, y: smoothY.get() * 0.05 }}
            variants={scaleIn}
            initial="hidden"
            animate="show"
            custom={0.35}
            className="absolute top-[30%] left-[-2%] text-[clamp(80px,13vw,220px)] font-bold text-[#1E35FF]"
          >
            Engi
          </motion.h2>

          {/* neer */}
          <motion.h2
            style={{ x: smoothX.get() * -0.05, y: smoothY.get() * 0.05 }}
            variants={scaleIn}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="absolute top-[30%] right-[-5%] sm:right-[8%] text-[clamp(80px,13vw,220px)] font-bold text-[#1E35FF]"
          >
            neer
          </motion.h2>

          {/* IMAGE */}
          <motion.div
            style={{ x: smoothX.get() * 0.08, y: smoothY.get() * 0.08 }}
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[380px] lg:w-[550px] xl:w-[650px]"
          >
            <img src="/Hero/photo.png" alt="hero" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-20"
          >
            <button className="bg-[#1E35FF] text-white px-10 py-4 rounded-full text-lg shadow-xl hover:scale-105 transition">
              LET’S CHAT
            </button>
          </motion.div>

          {/* Bottom left text */}
          <motion.div
            style={{ x: smoothX.get() * -0.03, y: smoothY.get() * -0.03 }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.85}
            className="absolute bottom-[6%] left-[5%] lg:left-[8%] max-w-xs text-sm"
          >
            <div className="w-10 h-[2px] bg-black mb-3"></div>
            SPECIALIZED IN WEB DESIGN, UX/UI WEBFLOW, AND FRONT END DEVELOPMENT.
          </motion.div>

          {/* Bottom right text */}
          <motion.div
            style={{ x: smoothX.get() * 0.03, y: smoothY.get() * -0.03 }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="absolute bottom-[6%] right-[5%] lg:right-[8%] max-w-xs text-sm text-gray-600"
          >
            Build a credible, conversion-focused website that shows your ideal
            client exactly how you can help them.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
