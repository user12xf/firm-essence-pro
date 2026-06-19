import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof TAGS;
}) {
  const MotionTag = TAGS[As];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}