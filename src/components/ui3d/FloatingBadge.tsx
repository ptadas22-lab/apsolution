import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface FloatingBadgeProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  depth?: number; 
}

export default function FloatingBadge({ 
  children, 
  className = "", 
  depth = 40,
  ...props
}: FloatingBadgeProps) {
  
  return (
    <motion.div
      className={`absolute px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-[0_10px_25px_rgba(37,99,235,0.15)] border border-white flex items-center justify-center ${className}`}
      style={{
        transform: `translateZ(${depth}px)`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
