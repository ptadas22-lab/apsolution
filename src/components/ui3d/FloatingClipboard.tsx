import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface FloatingClipboardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export default function FloatingClipboard({ 
  children, 
  className = "", 
  ...props 
}: FloatingClipboardProps) {
  return (
    <motion.div
      className={`relative bg-[#F8FAFC] rounded-[2rem] p-6 sm:p-8 shadow-[0_30px_60px_rgba(11,31,58,0.12),_inset_0_2px_4px_rgba(255,255,255,1)] border border-slate-200 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(2deg)`,
        ...props.style
      }}
      {...props}
    >
      {/* Clipboard Metal Clip */}
      <div 
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg shadow-md border-b-2 border-slate-500 flex items-center justify-center z-10"
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="w-16 h-2 bg-slate-500/20 rounded-full"></div>
      </div>

      {/* Paper Area */}
      <div 
        className="bg-white w-full h-full rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-slate-100 p-2 relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
