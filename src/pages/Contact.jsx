import { motion } from "framer-motion";

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          initial={{
            x: `${(i * 37) % 100}%`,
            y: `${(i * 53) % 100}%`,
            opacity: 0,
          }}
          animate={{ y: ["0%", "-120%"], opacity: [0, 0.8, 0] }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${100 + ((i * 17) % 30)}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative glass rounded-[2rem] overflow-hidden p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />
          <Particles />
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto"
            >
              Let's build something{" "}
              <span className="text-gradient">impactful.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-muted-foreground max-w-xl mx-auto"
            >
              Currently taking on a small number of product engineering
              engagements. If you're shipping something real, I'd love to hear
              about it.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:hello@aarav.dev"
                className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition"
              >
                View Resume
              </a>
              <a
                href="mailto:hello@aarav.dev"
                className="px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aarav Mehta · Built with React, R3F, GSAP
          & Framer Motion.
        </footer>
      </div>
    </section>
  );
}
