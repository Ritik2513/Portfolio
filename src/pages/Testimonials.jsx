"use client";

import { useRef, useEffect } from "react";
import ReactLenis from "lenis/react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   🔥 LENIS + SCROLLTRIGGER SYNC HOOK (VERY IMPORTANT)
========================================================= */
function useLenisScrollTrigger() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis with ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);
}

/* =========================================================
   🟪 STICKY CARD STACK COMPONENT
========================================================= */
const StickyTestimonialCards = ({ cards }) => {
  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const elements = cardRefs.current;
      const totalCards = elements.length;
      if (!elements[0]) return;

      // Initial positions
      gsap.set(elements[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(elements[i], { y: "100%" });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.6,
        },
      });

      // Stack animation
      for (let i = 0; i < totalCards - 1; i++) {
        tl.to(
          elements[i],
          {
            scale: 0.75,
            rotation: 6,
            ease: "none",
          },
          i
        ).to(
          elements[i + 1],
          {
            y: "0%",
            ease: "none",
          },
          i
        );
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative w-full">
      <div className="flex items-center justify-center h-screen overflow-hidden px-4">
        <div className="relative w-full max-w-6xl h-[70vh]">
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute w-full h-full rounded-[40px] p-10 bg-white shadow-2xl flex flex-col justify-between"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                “{card.review}”
              </p>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  {card.name}
                </h3>
                <p className="text-gray-500">{card.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   🟩 TESTIMONIALS SECTION
========================================================= */
const Testimonials = () => {
  useLenisScrollTrigger(); // ⭐ scroll sync hook

  const testimonialsData = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "This team completely transformed our website. The performance and animations feel premium and our conversions increased massively.",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      role: "Marketing Manager",
      review:
        "Working with them felt effortless. Every detail was handled perfectly and the final product exceeded expectations.",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Startup Founder",
      review:
        "Our product finally looks like a world-class SaaS. The scroll animations and UX are simply stunning.",
    },
    {
      id: 4,
      name: "Priya Mehta",
      role: "UI/UX Designer",
      review:
        "The smoothness, the micro-interactions, the polish — everything screams quality. Loved the collaboration.",
    },
    {
      id: 5,
      name: "Karan Singh",
      role: "Product Manager",
      review:
        "We saw an immediate boost in engagement. The card stack storytelling section is everyone's favorite!",
    },
  ];

  return (
    <ReactLenis root>
      <section className="w-full h-[400vh] py-20">
        <h2 className="text-5xl font-bold text-center mb-20">
          What Clients Say
        </h2>

        <StickyTestimonialCards cards={testimonialsData} />
      </section>
    </ReactLenis>
  );
};

export default Testimonials;