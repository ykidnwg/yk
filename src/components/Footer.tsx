"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/animations";

const socialLinks = [
  { icon: Github, href: "https://github.com/ykidnwg", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ykidnwg/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:muhamadwldn22@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center gap-10"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="gradient-text-purple font-bold text-xl tracking-tight">
                ykidnwg<span className="text-white">.me</span>
              </span>
            </div>
            <p className="text-subtext text-sm max-w-xs">
              Teuing Tenyaho kur tes — Sukabumi, Indonesia.
            </p>
          </motion.div>

          <motion.nav
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-subtext hover:text-white transition-colors duration-200 nav-link"
              >
                {link.label}
              </button>
            ))}
          </motion.nav>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="social-icon"
              >
                <s.icon size={17} />
              </motion.a>
            ))}
          </motion.div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-center"
          >
            <p className="text-subtext text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">Muhamad Wildan Mubarok</span>. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-subtext text-sm">
              Made with{" "}
              <Heart size={13} className="text-red-400 fill-red-400 animate-pulse" />{" "}
              using{" "}
              <span className="gradient-text-purple font-medium">Next.js</span>
              {" & "}
              <span className="gradient-text font-medium">Framer Motion</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

    </footer>
  );
}
