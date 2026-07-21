import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface BusinessNodeProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glow?: boolean;
}

export default function BusinessNode({ 
  children, 
  className = "", 
  depth = 30,
  glow = true,
  ...props
}: BusinessNodeProps) {
  
  const shadow = glow 
    ? "shadow-[0_0_20px_rgba(37,99,235,0.2),_inset_0_1px_1px_rgba(255,255,255,0.8)]"
    : "shadow-[0_10px_20px_rgba(11,31,58,0.05),_inset_0_1px_1px_rgba(255,255,255,1)]";

  return (
    <motion.div
      className={`bg-white/80 backdrop-blur-md rounded-2xl border border-white p-4 flex items-center justify-center ${shadow} ${className}`}
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
