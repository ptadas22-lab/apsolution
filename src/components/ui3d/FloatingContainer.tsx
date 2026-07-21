import React from "react";
import { motion } from "motion/react";

interface FloatingContainerProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function FloatingContainer({ 
  children, 
  delay = 0, 
  duration = 10, 
  yOffset = 20, 
  className = "" 
}: FloatingContainerProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
