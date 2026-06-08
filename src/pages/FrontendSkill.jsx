import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Zomato Landing Experience",
    category: "Frontend UI Showcase",
    image: "/FrontendSkill/zomato.png",
    live: "https://zomatolp.vercel.app/",
    featured: true,
    desc: "A premium food-delivery inspired landing page built to demonstrate modern frontend engineering. Features responsive layouts, smooth animations, polished visual hierarchy, and conversion-focused user journeys.",
    highlights: [
      "Responsive Design",
      "Interactive UI",
      "Modern Animations",
      "Landing Page Design",
      "Performance Focused",
    ],
  },
  {
    title: "Margadarsana Consulting Revamp",
    category: "Corporate Website Redesign",
    image: "/FrontendSkill/mdc.png",
    live: "https://margadarsanaconsulting.vercel.app/",
    featured: true,
    desc: "A complete redesign and modernization of a consulting firm's corporate website focused on improving user experience, visual storytelling, responsiveness, and brand credibility. Built with modern frontend technologies to deliver a fast, engaging, and professional digital presence.",
    highlights: [
      "Website Revamp",
      "Responsive Design",
      "Modern UI/UX",
      "Performance Optimization",
      "Professional Branding",
      "Smooth Animations",
    ],
  },

  {
    title: "Click Melon",
    category: "Corporate Website",
    image: "/FrontendSkill/cm.png",
    live: "https://clickmelon.co/",
    featured: true,
    desc: "A production-ready corporate platform for a digital marketing and education brand. Designed around lead generation, SEO-driven architecture, service presentation, and business-focused user experiences.",
    highlights: [
      "Lead Generation",
      "SEO Optimized",
      "Corporate Design",
      "Responsive Layout",
      "Business Focused UX",
    ],
  },

  {
    title: "LeadIQ",
    category: "SaaS Platform",
    image: "/FrontendSkill/lead.png",
    live: "https://leadiq.in/",
    featured: true,
    desc: "A modern SaaS-style interface designed for lead management and business growth workflows. The UI emphasizes clean information architecture, scalable components, CRM-style interactions, and conversion-oriented experiences.",
    highlights: [
      "SaaS Dashboard UI",
      "Scalable Components",
      "Enterprise UX",
      "Modern Design System",
      "Conversion Focused",
    ],
  },
];

export default function FrontendSkill() {
  return (
    <section
      id="frontend-projects"
      className="relative py-28 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-2xl mx-auto text-center px-6"
      >
        <p className="top">Frontend Craftsmanship</p>
        <h2 className="heading">
          Landing pages that move, breathe and convert.
        </h2>
        <p className="subheading">
         Built with React, Tailwind, Framer Motion and GSAP — pixel-perfect, performant and animated with intent.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              {project.featured && (
                <span className="absolute top-5 right-5 px-4 py-2 rounded-full bg-primary text-white text-xs font-medium">
                  Featured Work
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-primary text-sm font-medium mb-3">
                {project.category}
              </p>

              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full border border-white/10 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Production Project
                </span>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-white font-medium hover:scale-105 transition"
                >
                  View Live
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
