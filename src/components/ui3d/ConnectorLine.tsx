import React from "react";
import { motion } from "motion/react";

interface ConnectorLineProps {
  className?: string;
  vertical?: boolean;
  length?: string;
  glowing?: boolean;
}

export default function ConnectorLine({ 
  className = "", 
  vertical = false,
  length = "40px",
  glowing = true
}: ConnectorLineProps) {
  
  const glowStyles = glowing 
    ? "shadow-[0_0_8px_rgba(37,99,235,0.4)]" 
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`bg-blue-300/40 ${glowStyles} ${className}`}
      style={{
        width: vertical ? "2px" : length,
        height: vertical ? length : "2px",
        borderRadius: "2px"
      }}
    />
  );
}
