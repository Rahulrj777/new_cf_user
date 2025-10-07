"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  size = 150, // mask size
  className,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={cn("relative h-screen w-full overflow-hidden", className)}>
      {/* Masked layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-position:0_0] [mask-size:150px] z-50"
        style={{
          maskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          maskSize: `${size}px`,
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        animate={{
          maskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
        }}
        transition={{ duration: 0.05 }}
      >
        <div className="absolute inset-0">{children}</div>
      </motion.div>
    </div>
  );
};
