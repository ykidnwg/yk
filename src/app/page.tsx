"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import { MotionConfig } from "framer-motion";

/**
 * Main page - composes all portfolio sections
 */
export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <ScrollEffects />
        <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
        <Footer />
      </main>
    </MotionConfig>
  );
}
