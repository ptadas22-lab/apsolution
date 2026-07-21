import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface FloatingMonitorProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}

export default function FloatingMonitor({ 
  children, 
  className = "", 
  depth = 0,
  ...props
}: FloatingMonitorProps) {
  
  return (
    <motion.div
      className={`relative bg-slate-100 rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(11,31,58,0.15),_inset_0_2px_4px_rgba(255,255,255,1)] border border-slate-200 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1200px) rotateX(5deg) translateZ(${depth}px)`,
        ...props.style
      }}
      {...props}
    >
      {/* Inner Screen */}
      <div 
        className="w-full h-full bg-slate-50/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/50 shadow-[inset_0_5px_15px_rgba(0,0,0,0.02)] relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
      
      {/* Monitor Base Stand (Optional visual) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-xl shadow-lg -z-10 opacity-70"></div>
    </motion.div>
  );
}
