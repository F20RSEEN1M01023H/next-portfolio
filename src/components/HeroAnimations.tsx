'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

export function StaggeredHeading({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-1">
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: delay + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });

  // Extract numeric part and suffix (e.g., "18+" -> 18 and "+")
  const match = value.match(/^([\d.]+)(.*)$/);
  const targetNumber = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isDecimal = value.includes('.');

  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (inView) {
      motionVal.set(targetNumber);
    }
  }, [inView, motionVal, targetNumber]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = isDecimal
          ? `${latest.toFixed(1)}${suffix}`
          : `${Math.round(latest)}${suffix}`;
      }
    });
  }, [springVal, isDecimal, suffix]);

  return (
    <div>
      <p ref={ref} className="text-2xl font-extrabold text-white tabular-nums">
        0{suffix}
      </p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}
