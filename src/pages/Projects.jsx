import { motion } from "framer-motion";

const projects = [
  {
    title: "Offerly",
    tag: "AFFILIATE SAAS PLATFORM",
    image: "/Fullstack/offerly.png",
    desc: "Multi-tenant affiliate SaaS with link tracking, commission payouts, real-time analytics, conversion attribution, and a publisher dashboard.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    live: "https://offerly-sigma.vercel.app/login",
  },
  {
    title: "Compare Vidya",
    tag: "EDTECH COMPARISON PLATFORM",
    image: "/Fullstack/cv.png",
    desc: "SEO-focused MERN platform helping students compare universities, courses, fees, placements, and reviews with dynamic content management.",
    stack: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Framer motion",
    ],
    live: "https://comparevidya.com",
  },
  {
    title: "Auto Blogger",
    tag: "AI CONTENT PLATFORM",
    image: "/Fullstack/ab.png",
    desc: "AI-powered content generation platform that transforms videos into SEO-optimized blog posts using automated content workflows.",
    stack: [
      "Node.js",
      "OpenAI",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Vercel",
    ],
    live: "https://auto-blogger-mauve.vercel.app/main/home",
  },
  {
    title: "Realtime Chat",
    tag: "REALTIME COMMUNICATION",
    image: "/Fullstack/chat.jpg",
    desc: "Production-grade real-time messaging application featuring typing indicators, online presence, read receipts, and secure authentication.",
    stack: [
      "React",
      "Socket.IO",
      "Express",
      "MongoDB",
      "WebSockets",
      "Node.js",
      "Tailwind CSS",
    ],
    live: "https://chitchat-md87.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl mx-auto text-center"
        >
          <p className="top">Full-Stack Projects</p>

          <h2 className="heading">Real products. Real users. Real revenue.</h2>

          <p className="subheading">
            End-to-end MERN builds — from database schema and APIs to UI,
            deployment and optimization.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/3
                backdrop-blur-xl
                p-5 md:p-8 lg:p-10
              "
            >
              <div
                className={`
                  flex flex-col
                  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                  items-center
                  gap-8 lg:gap-12
                `}
              >
                {/* Image */}
                <div className="w-full lg:w-[58%]">
                  <div className="relative">
                    <div
                      className="
                        absolute
                        inset-0
                        bg-linear-to-r
                        from-violet-600/30
                        via-purple-500/20
                        to-blue-500/30
                        blur-3xl
                        rounded-[30px]
                      "
                    />

                    <div
                      className="
                        relative
                        rounded-[24px]
                        overflow-hidden
                        border border-white/10
                      "
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-[1.03]
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[42%]">
                  <p
                    className="
                      text-xs
                      md:text-sm
                      tracking-[3px]
                      uppercase
                      text-gray-400
                      mb-3
                    "
                  >
                    {project.tag}
                  </p>

                  <h3
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      text-white
                      mb-4
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-gray-400
                      text-base
                      md:text-lg
                      leading-relaxed
                      mb-6
                    "
                  >
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2
                          rounded-full
                          border border-white/10
                          bg-white/4
                          text-sm
                          text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-7
                      py-4
                      rounded-full
                      font-medium
                      text-white
                      bg-linear-to-r
                      from-indigo-500
                      to-violet-500
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    Live Link →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
