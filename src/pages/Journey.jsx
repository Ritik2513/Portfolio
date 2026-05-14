import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const milestones = [
  {
    year: "2019 - 2022",
    title: "🎓 BCA — The Genesis",
    desc: "Discovered the infinite possibilities of web development. Spent nights mastering CSS grid and the art of the perfect div.",
    tags: ["HTML/CSS", "JAVASCRIPT"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600",
  },
  {
    year: "Jan 2022 - Jun 2022",
    title: "💼 Digipodium (Internship)",
    desc: "Internship that bridged the gap between code and clients. Real world demands, real world solutions, and the beauty of production code.",
    tags: ["MERN", "PRODUCTION", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "2022 - 2023",
    title: "📚 NIMCET Preparation",
    desc: "Dedicated year focused on mastering Data Structures, Algorithms, Mathematics, and Computer Science fundamentals.",
    tags: ["DSA", "Maths", "Discipline"],
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    year: "2023 - 2025",
    title: "🚀 MCA & MERN Deep Dive",
    desc: "Transitioning from visual layouts to complex data architectures and backend systems.",
    tags: ["ARCHITECTURE", "MERN"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "2025 - 2026",
    title: "🏢 Click Melon Media Pvt. Ltd.",
    desc: "Architecting high-performance digital experiences for modern brands.",
    tags: ["LEADERSHIP", "SHIPPING", "MERN", "VPS Deployment"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Journey() {
  return (
    <section id="experience" className="w-full text-white py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        
        {/* LEFT PANEL */}
        <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="p-10 lg:p-16 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs tracking-[0.4em] opacity-60 mb-6">
                MY STORY
              </p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Crafting My Path in Tech
              </h1>

              <p className="text-white/60 mt-4">
                From Student → Intern → Student → Working Professional
              </p>
            </div>

            <div className="mt-20 lg:mt-0 flex items-center gap-4 opacity-60">
              <FaArrowDown className="animate-bounce" />
              <p className="text-xs tracking-[0.5em]">
                SCROLL TO EXPLORE
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="lg:w-2/3 h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
          {milestones.map((item, i) => (
            <section
              key={i}
              className="h-screen snap-start flex items-center px-8 sm:px-14 lg:px-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <p className="text-4xl lg:text-5xl font-semibold mb-6 opacity-70">
                  {item.year}
                </p>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-72 object-cover mb-8 rounded-xl shadow-lg"
                />

                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {item.title}
                </h2>

                <p className="text-white/70 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs tracking-widest border border-white/20 px-3 py-1 rounded-full glass hover:bg-white/10 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>

      </div>
    </section>
  );
}