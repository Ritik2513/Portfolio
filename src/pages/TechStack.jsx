import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

/* -------------------- SKILLS DATA -------------------- */

const SKILLS = [
  { name: "HTML5", color: "#DD4B25" },
  { name: "CSS3", color: "#29A4D9" },
  { name: "JavaScript", color: "#F7DF1D" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "NPM Package Builder", color: "#CB0000" },
  { name: "React.js", color: "#16D4F7" },
  { name: "Node.js", color: "#7CB700" },
  { name: "MongoDB", color: "#4EA34B" },
  { name: "Redis", color: "#D53C34" },
  { name: "BullMQ", color: "#FFFFFF" },
  { name: "Express.js", color: "#FF9100" },
  { name: "Firebase", color: "#343434" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "Framer Motion", color: "#E601B8" },
  { name: "Strapi", color: "#8E75FF" },
  { name: "Cloudflare", color: "#F38020" },
  { name: "VPS Deployment", color: "#22D3EE" },
  { name: "Three.js", color: "#ffffff" },
  { name: "GSAP", color: "#88CE02" },
  { name: "Redux", color: "#AF8DED" },
  { name: "Context API", color: "#AF8DED" },
  { name: "Socket.io", color: "#343434" },
  { name: "REST APIs", color: "#007DBD" },
  { name: "JWT", color: "#F30158" },
  { name: "RBAC", color: "#544BFF" },
  { name: "Cookie Auth", color: "#EACF90" },
  { name: "Git", color: "#E84E31" },
  { name: "GitHub", color: "#343434" },
  { name: "CI/CD", color: "#572C7F" },
  { name: "Vercel", color: "#343434" },
  { name: "Render", color: "#292E57" },
  { name: "Cloudflare", color: "#F2A83D" },
  { name: "DSA", color: "#8EA3C7" },
  { name: "Postman", color: "#F56933" },
];

/* -------------------- FIBONACCI SPHERE -------------------- */
/* Evenly distributes points on sphere surface */

function fibonacciSphere(n, radius = 2.4) {
  const points = [];
  const phi = Math.PI * (Math.sqrt(5) - 1); // golden angle

  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * r * radius;
    const z = Math.sin(theta) * r * radius;

    points.push(new THREE.Vector3(x, y * radius, z));
  }

  return points;
}

/* -------------------- SPHERE CONTENT -------------------- */

function Sphere() {
  const group = useRef();
  const positions = useMemo(() => fibonacciSphere(SKILLS.length), []);
  const [hover, setHover] = useState(null);

  /* Smooth rotation animation */
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.18;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.15;
  });

  return (
    <group ref={group}>
      {/* Wireframe Globe */}
      <mesh>
        <sphereGeometry args={[2.35, 32, 32]} />
        <meshBasicMaterial
          color="#7c5cff"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>

      {/* Skill Labels */}
      {SKILLS.map((skill, i) => (
        <group key={skill.name} position={positions[i]}>
          <Html center distanceFactor={10}>
            <div
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="select-none px-3 py-1.5 rounded-full text-[5px] md:text-[8px] font-medium whitespace-nowrap transition-all cursor-pointer backdrop-blur-md"
              style={{
                background:
                  hover === i ? skill.color : "rgba(255,255,255,0.06)",

                color: hover === i ? "#0b0b14" : "#ffffff",

                border: `1px solid ${
                  hover === i ? skill.color : "rgba(255,255,255,0.15)"
                }`,

                boxShadow: hover === i ? `0 0 30px ${skill.color}` : "none",

                transform: hover === i ? "scale(1.15)" : "scale(1)",
              }}
            >
              {skill.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

/* -------------------- MAIN EXPORTED COMPONENT -------------------- */

export default function TechSphere() {
  return (
    <>
      <section id="skills" className=" px-6 flex items-center py-10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Responsive two column grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE — TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl text-center md:text-start"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Stack
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                A toolbelt sharpened in production.
              </h2>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground">
                From the database layer to the edge — I work end-to-end across
                the modern JavaScript ecosystem and ship to real infrastructure.
              </p>
            </motion.div>

            {/* RIGHT SIDE — 3D CANVAS */}
            <div className="w-full h-105 sm:h-130 md:h-155 lg:h-150 ">
              <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.8]}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.7} />

                  <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
                    <Sphere />
                  </Float>

                  <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
