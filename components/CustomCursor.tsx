"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for lagging follower
  const springX = useSpring(mouseX, { damping: 25, stiffness: 220 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 220 });

  useEffect(() => {
    // Check if device supports fine hover
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveHandler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor-text");
        setCursorText(customText || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny solid center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing smooth magnetic ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-sky-400/80 pointer-events-none z-[9998] flex items-center justify-center font-mono text-[9px] font-bold text-sky-200 tracking-wider shadow-[0_0_15px_rgba(56,189,248,0.3)] backdrop-blur-[1px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 64 : 44) : 26,
          height: isHovered ? (cursorText ? 64 : 44) : 26,
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.12)" : "rgba(6, 182, 212, 0.02)",
          borderColor: isHovered ? "rgba(45, 212, 191, 0.9)" : "rgba(56, 189, 248, 0.4)",
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="uppercase text-[9px] text-emerald-300"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
