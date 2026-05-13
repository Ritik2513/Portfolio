import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const devops = [
  {
    title: "VPS Deployment",
    desc: "Hetzner, DigitalOcean — Nginx, PM2, zero-downtime.",
  },
  {
    title: "CI/CD Pipelines",
    desc: "GitHub Actions, automated tests, preview builds.",
  },
  { title: "Cloudflare", desc: "DNS, WAF, edge caching, image optimization." },
  {
    title: "Vercel / Render",
    desc: "Serverless deploys for frontends and APIs.",
  },
  {
    title: "Domain & DNS",
    desc: "Registrar to live in minutes — SSL, SPF, DMARC.",
  },
  {
    title: "Observability",
    desc: "Logs, uptime, error tracking, performance budgets.",
  },
];

export default function DevOps() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll("[data-do-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Deployment & DevOps
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Code is half the job. I ship the other half.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {devops.map((d) => (
            <div
              key={d.title}
              data-do-card
              className="glass rounded-2xl p-6 shadow-elegant hover:-translate-y-1 transition will-change-transform"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary mb-4 shadow-glow" />
              <h3 className="font-semibold text-lg">{d.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
