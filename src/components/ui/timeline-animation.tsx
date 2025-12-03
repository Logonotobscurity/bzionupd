"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ElementType, useRef, useEffect } from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants: any;
  id?: string;
}

export function TimelineContent({
  children,
  as: Tag = "div",
  className,
  animationNum,
  timelineRef,
  customVariants,
  id,
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
      as={Tag}
      ref={ref}
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
