import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface GlassCard3DProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  depth?: number; 
  angleX?: number;
  angleY?: number;
  glow?: boolean;
}

export default function GlassCard3D({ 
  children, 
  className = "", 
  depth = 0,
  angleX = 0,
  angleY = 0,
  glow = false,
  ...props
}: GlassCard3DProps) {
  
  const baseShadow = glow 
    ? "shadow-[0_0_40px_rgba(37,99,235,0.15),_0_20px_40px_rgba(11,31,58,0.08),_inset_0_1px_1px_rgba(255,255,255,1)]" 
    : "shadow-[0_20px_40px_rgba(11,31,58,0.05),_inset_0_1px_1px_rgba(255,255,255,0.8)]";

  return (
    <motion.div
      className={`relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl ${baseShadow} ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1200px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(${depth}px)`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
