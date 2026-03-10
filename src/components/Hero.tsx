"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { fadeUp, staggerContainer } from "@/animations/animations";

const titles = [
  "Tukang Pecut Ey Ay",
  "Web Developer",
  "Frontend Enthusiast",
  "Open Source Explorer",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/ykidnwg", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ykidnwg/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:muhamadwldn22@gmail.com", label: "Email" },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const delta = isDeleting ? 50 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-main section-padding flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag">✨ Available for freelance work</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Muhamad Wildan</span>
            <br />
            <span className="gradient-text-purple">Mubarok</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold text-subtext mb-6 flex items-center gap-1 h-9"
          >
            <span className="text-primary">&lt;</span>
            <span className="text-white min-w-[260px] text-left">{displayText}</span>
            <span className="typed-cursor" />
            <span className="text-primary">/&gt;</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-subtext text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Teuing Tenyaho kur tes. Berbasis di{" "}
            <span className="text-white font-medium">Sukabumi, Indonesia</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary flex items-center gap-2 text-base"
            >
              View My Work
              <ArrowDown size={16} className="animate-bounce" />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary flex items-center justify-center gap-2 text-base"
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="social-icon"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-subtext tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
