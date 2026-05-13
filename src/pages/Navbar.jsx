import { motion } from "framer-motion";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-999 w-[min(96%,920px)] font-poppins"
    >
      <div className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-elegant">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-primary shadow-glow" />
          <span className="font-semibold tracking-tight">Ritik.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Resume/Ritik_Kumar_Gupta.pdf"
          download="Ritik_Kumar_Gupta_Resume.pdf"
          className="text-sm px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
        >
          View Resume
        </a>
      </div>
    </motion.header>
  );
}