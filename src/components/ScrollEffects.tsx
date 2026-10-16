"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollEffects() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });
  const prefersReducedMotion = useReducedMotion();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 520);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="scroll-progress"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {showTop && (
          <motion.button
            key="scroll-to-top"
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-[#15121d]/90 text-primary shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-primary/20 hover:text-white"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
