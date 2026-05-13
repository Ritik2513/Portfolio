import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Pagination,
  Navigation,
} from "swiper/modules";
import { ExternalLink } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  const projects = [
    {
      name: "Compare Vidya",
      image: "/Projects/cv.png",
      description:
        "A modern education comparison platform that helps students discover and compare online universities, courses, and career programs. Built with performance, SEO and lead generation in mind.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "RBAC",
        "Cookie Auth",
        "VPS Deployment",
      ],
      live: "https://comparevidya.com/",
    },
    {
      name: "LeadIq",
      image: "/Projects/lead.png",
      description:
        "A high-converting lead generation website designed to capture, manage and nurture business leads with optimized landing pages and fast performance.",
      tech: ["React.js", "Hostinger"],
      live: "https://leadiq.in/",
    },
    {
      name: "Click Melon Media Pvt. Ltd.",
      image: "/Projects/cm.png",
      description:
        "Corporate website for a digital marketing and education consulting company featuring modern UI, animations, service pages and SEO-focused architecture.",
      tech: ["React.js", "Hostinger"],
      live: "https://clickmelon.co/",
    },
    {
      name: "Chit Chat",
      image: "/Projects/chitchat.png",
      description:
        "A full-stack real-time chat application with secure authentication, instant messaging, live notifications and scalable backend using WebSockets.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Render",
      ],
      live: "https://chitchat-md87.onrender.com/",
    },
    {
      name: "Auto Blogger",
      image: "/Projects/autoBlogger.png",
      description:
        "An AI SaaS tool that converts YouTube videos into SEO-optimized blog posts automatically, helping creators generate content faster using OpenAI APIs.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "Vercel",
      ],
      live: "https://auto-blogger-mauve.vercel.app/main/home",
    },
    {
      name: "Zemsto",
      image: "/Projects/zemsto.png",
      description:
        "A business website focused on global services and brand presence with performance optimization and secure Cloudflare deployment.",
      tech: ["React.js", "Cloudflare"],
      live: "https://zemsto.com/",
    },
  ];
  return (
    <>
      <section className="py-24 min-h-screen font-poppins">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl mx-auto text-center px-6"
        >
          <p className="top">
            Selected Work
          </p>
          <h2 className="heading">
            Products shipped, not just demos.
          </h2>
          <p className="subheading">
            Each project is live in production with real users, real revenue.
          </p>
        </motion.div>

        {/* Creative Carousel */}
        <div className="w-full max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Autoplay, EffectCreative, Pagination, Navigation]}
            effect="creative"
            grabCursor
            centeredSlides
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            navigation
            creativeEffect={{
              prev: { shadow: true, translate: ["-120%", 0, -500] },
              next: { shadow: true, translate: ["120", 0, -500] },
            }}
            className="rounded-3xl overflow-hidden"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[520px] w-full overflow-hidden rounded-3xl">
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 h-full w-full object-fill"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
                    <h3 className="text-4xl font-bold mb-3">{project.name}</h3>
                    <p className="max-w-xl text--lg mb-4 opacity-90">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full glass"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}

                    <div className="flex gap-4">
                      {/* LIVE Button */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition bg-gradient-primary text-primary-foreground"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Projects;
