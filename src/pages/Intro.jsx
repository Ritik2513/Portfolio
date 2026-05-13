import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Intro({ portrait }) {
  const ref = useRef(null);

  // Framer Motion scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // GSAP fade-in animation
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll("[data-intro-fade]"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT — Portrait */}
        <motion.div
          style={{ y: imgY }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* floating glow blobs */}
          <motion.div
            aria-hidden
            className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-gradient-primary opacity-40 blur-3xl"
            animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-12 -right-8 w-64 h-64 rounded-full bg-accent/40 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute top-1/3 -right-16 w-24 h-24 rounded-2xl glass"
            animate={{ rotate: [0, 12, 0], y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -left-10 bottom-10 w-16 h-16 rounded-full glass"
            animate={{ rotate: [0, -15, 0], y: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* portrait card */}
          <motion.div
            data-intro-fade
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] overflow-hidden glass shadow-elegant p-2"
          >
            <img
              src="/Hero/profile.png"
              alt="Ritik Kumar Gupta — Software Engineer"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-[1.6rem] object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT — Text */}
        <div className="relative">
          <div className="rounded-[32px] p-10 md:p-14 glass shadow-elegant border border-white/10">
            {/* small label */}
            <div
              data-intro-fade
              className="uppercase tracking-[0.35em] text-xs text-primary mb-6"
            >
              — Software Engineer | MERN STACK DEVELOPER
            </div>

            {/* big headline */}
            <h2 data-intro-fade className="heading">
              Build a credible, conversion-focused website that shows your ideal
              client{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                exactly how you can help them.
              </span>
            </h2>

            {/* buttons */}
            <div data-intro-fade className="flex flex-wrap gap-5 mt-3">
              <a
                href="mailto:ritikgupta2513@gmail.com"
                className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
              >
                Hire Me
              </a>
              <a
                href="/Resume/Ritik_Kumar_Gupta.pdf"
                download="Ritik_Kumar_Gupta_Resume.pdf"
                className="px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
