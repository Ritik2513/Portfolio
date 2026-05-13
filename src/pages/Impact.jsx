import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Impact = () => {
  const impact = [
    {
      label: "Lighthouse Score",
      value: 90,
      suffix: "+",
      desc: "Performance, SEO",
    },
    {
      label: "Leads / Month",
      value: 2100,
      suffix: "+",
      desc: "Generated for clients",
    },
    {
      label: "Revenue Impact",
      value: 1,
      suffix: "Cr+",
      prefix: "₹",
      desc: "Across delivered products",
    },
    { label: "WP → MERN Migrations", value: 4, desc: "Production rebuilds" },
  ];

  return (
    <section id="impact" className="relative py-20 md:py-28 px-6 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Numbers from real production work.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impact.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 shadow-elegant relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-primary opacity-20 blur-2xl" />

              <div className="text-4xl md:text-5xl font-bold text-gradient">
                <Counter to={m.value} suffix={m.suffix} prefix={m.prefix} />
              </div>

              <div className="mt-3 font-medium">{m.label}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;

export function Counter({ to, suffix = "", prefix = "", duration = 2 }) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now();

        const animate = (time) => {
          const progress = Math.min((time - startTime) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = to * eased;

          const display =
            to >= 100 ? Math.round(value).toLocaleString() : value.toFixed(1);

          ref.current.textContent = `${prefix}${display}${suffix}`;

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(animate);
          }
        };

        rafRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration, prefix, suffix]);

  return <span ref={ref}>0</span>;
}
