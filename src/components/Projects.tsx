"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, scaleIn, staggerContainer } from "@/animations/animations";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const tagColors = [
    "bg-purple-900/30 text-purple-300 border-purple-700/40",
    "bg-blue-900/30 text-blue-300 border-blue-700/40",
    "bg-green-900/30 text-green-300 border-green-700/40",
    "bg-pink-900/30 text-pink-300 border-pink-700/40",
    "bg-orange-900/30 text-orange-300 border-orange-700/40",
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <span className="section-tag">Portfolio</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold mt-3">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-subtext mt-4 max-w-lg mx-auto">
            Beberapa proyek yang pernah saya kerjakan.
          </motion.p>
          <div className="divider" />

          <motion.div variants={fadeUp} className="flex justify-center gap-3 mt-8">
            {(["all", "featured"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === f
                    ? "bg-primary text-white border-primary shadow-glow"
                    : "bg-transparent text-subtext border-white/10 hover:border-primary/40 hover:text-white"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <div className="text-7xl">😭</div>
            <p className="text-2xl font-bold text-white text-center">
              BELUM BISA BUAT PROJECT
            </p>
            <p className="text-primary font-bold text-2xl">WKWKWK</p>
            <p className="text-subtext text-sm mt-1">Coming soon... maybe.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -6 }}
                className="project-card flex flex-col h-full group"
              >
                <div className="project-image h-48 bg-gradient-to-br from-[#1a0630] to-[#0f0f18] relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-full h-full opacity-40"
                      style={{
                        background: `radial-gradient(ellipse at center, ${
                          ["#7c3aed", "#22c55e", "#ec4899", "#f59e0b", "#3b82f6", "#06b6d4"][i % 6]
                        }55 0%, transparent 70%)`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl opacity-30">
                        {["🚀", "🛒", "💬", "📊", "🎨", "🤖"][i % 6]}
                      </span>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white font-medium">
                      <Star size={10} />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
                      <Github size={18} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="social-icon" aria-label="Live Demo" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-subtext text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.slice(0, 4).map((tag, ti) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-md border font-medium ${tagColors[ti % tagColors.length]}`}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs text-subtext px-2">+{project.tags.length - 4}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06] mt-1">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-subtext hover:text-white transition-colors text-sm">
                      <Github size={14} />
                      Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors text-sm font-medium">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ykidnwg"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
