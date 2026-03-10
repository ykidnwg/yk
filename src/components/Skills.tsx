"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/projects";
import { fadeUp, staggerFast, scaleIn } from "@/animations/animations";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-400",
  Language: "text-yellow-400",
  Framework: "text-purple-400",
  Backend: "text-green-400",
  Database: "text-orange-400",
  DevOps: "text-cyan-400",
  Tools: "text-pink-400",
  Styling: "text-teal-400",
  API: "text-red-400",
  ORM: "text-indigo-400",
  Design: "text-violet-400",
  Cloud: "text-sky-400",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden bg-[#0d0d0d]">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(124,58,237,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <span className="section-tag">My Toolkit</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold mt-3">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-subtext mt-4 max-w-lg mx-auto">
            Teknologi yang saya pelajari dan gunakan.
          </motion.p>
          <div className="divider" />
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              custom={i}
              whileHover={{
                scale: 1.06,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="skill-card p-5 flex flex-col items-center gap-3 cursor-default select-none group"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              <p className="text-white font-semibold text-sm text-center">{skill.name}</p>
              <span
                className={`text-xs font-medium ${
                  categoryColors[skill.category] || "text-subtext"
                } opacity-70 group-hover:opacity-100 transition-opacity`}
              >
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="text-center text-subtext text-sm mt-12"
        >
          Still learning, still growing.
        </motion.p>
      </div>
    </section>
  );
}
