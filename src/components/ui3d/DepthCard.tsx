import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface DepthCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  depth?: number; 
}

export default function DepthCard({ 
  children, 
  className = "", 
  depth = 20,
  ...props
}: DepthCardProps) {
  
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-[0_10px_30px_rgba(11,31,58,0.08),_inset_0_-2px_4px_rgba(0,0,0,0.02)] border border-slate-100 ${className}`}
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
