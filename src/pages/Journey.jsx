import React from "react";

const milestones = [
  {
    year: "2020",
    title: "🎓 BCA — The Genesis",
    desc: "Discovered the infinite possibilities of web development. Spent nights mastering CSS grid and the art of the perfect div.",
    tags: ["HTML/CSS", "JAVASCRIPT"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600",
  },
  {
    year: "2023",
    title: "💼 Digipodium Workflow",
    desc: "Internship that bridged the gap between code and clients. Real world demands, real world solutions, and the beauty of production code.",
    tags: ["PRODUCTION", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "🚀 MCA & MERN Deep Dive",
    desc: "Transitioning from visual layouts to complex data architectures and backend systems.",
    tags: ["ARCHITECTURE", "MERN"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "🏢 Click Melon Media",
    desc: "Architecting high-performance digital experiences for modern brands.",
    tags: ["LEADERSHIP", "SHIPPING"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Journey() {
  return (
    <section className="w-full text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        {/* LEFT PANEL */}
        <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="p-10 lg:p-16 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs tracking-[0.4em] opacity-60 mb-6">
                MY STORY
              </p>

              <h1 className="font-display text-5xl lg:text-7xl leading-tight">
                Journey <br /> Archived
              </h1>
            </div>

            <div className="mt-20 lg:mt-0 flex items-end justify-between">
              <p className="text-xs tracking-[0.5em] opacity-50">
                SCROLL TO EXPLORE
              </p>

              <div className="hidden lg:block text-[10px] tracking-[0.6em] rotate-90 origin-right opacity-40">
                CHRONICLES
              </div>
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
              <div className="max-w-xl">
                {/* YEAR */}
                <p className="text-4xl lg:text-5xl font-display mb-6 opacity-70">
                  {item.year}
                </p>

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-72 object-cover mb-8 rounded-xl shadow-lg"
                />

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-white/70 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs tracking-widest border border-white/20 px-3 py-1 rounded-full hover:border-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
