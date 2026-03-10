"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, Coffee, Star } from "lucide-react";
import { slideLeft, slideRight, fadeUp, staggerContainer } from "@/animations/animations";

const stats = [
  { icon: Briefcase, value: "0", label: "Years Experience" },
  { icon: Code2, value: "0", label: "Projects Built" },
  { icon: Star, value: "0", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="section-tag">About Me</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold mt-3">
            Who I{" "}
            <span className="gradient-text">Am</span>
          </motion.h2>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px] shadow-glow-lg">
                  <div className="w-full h-full rounded-2xl bg-card-bg overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-[#1a0630] to-[#0b0b0b] flex flex-col items-center justify-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shadow-glow">
                        W
                      </div>
                      <span className="text-subtext text-sm">Profile Photo</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 glass-card px-4 py-3 shadow-glow"
                >
                  <p className="text-xs text-subtext">Experience</p>
                  <p className="text-lg font-bold text-white">0 Years</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -left-4 glass-card px-4 py-3 shadow-glow"
                >
                  <p className="text-xs text-subtext">Projects</p>
                  <p className="text-lg font-bold gradient-text">0</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Berbasis di{" "}
                <span className="gradient-text-purple">Sukabumi, Indonesia</span>
              </h3>
              <p className="text-subtext leading-relaxed mb-4">
                Halo! Nama saya <span className="text-white font-medium">Muhamad Wildan Mubarok</span>,
                alias <span className="text-white font-medium">ykidnwg</span>. Teuing Tenyaho kur tes.
              </p>
              <p className="text-subtext leading-relaxed">
                Seorang <span className="text-white font-medium">Tukang Pecut Ey Ay</span> yang
                sedang berjalan di dunia web development. Masih belajar, masih grownin&apos;.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL",
                "Docker", "AWS", "UI/UX Design",
              ].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="stat-card flex flex-col items-center gap-2"
            >
              <stat.icon size={22} className="text-primary" />
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-subtext text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
