"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect, ElementType } from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  className?: string;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  customVariants: Variants;
  id?: string;
  as?: ElementType;
}

export function TimelineContent({
  children,
  className,
  animationNum,
  timelineRef,
  customVariants,
  id,
  as,
}: TimelineContentProps) {
  const ref = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      as={as}
      id={id}
      className={className}
      variants={customVariants}
      initial="hidden"
      animate={controls}
      custom={animationNum}
    >
      {children}
    </motion.div>
  );
}
