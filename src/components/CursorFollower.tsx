'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the outer bubble
  const springConfig = { damping: 24, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Slower, larger ambient glow trailing behind
  const glowX = useSpring(mouseX, { damping: 35, stiffness: 120, mass: 1 });
  const glowY = useSpring(mouseY, { damping: 35, stiffness: 120, mass: 1 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop/laptop mice)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, textarea, [role="button"]');
      setIsHoveringClickable(Boolean(clickable));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Large soft radial ambient aura */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/15 via-violet-500/10 to-cyan-400/15 blur-3xl"
      />

      {/* Interactive trailing glass bubble */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringClickable ? 1.8 : 1,
          backgroundColor: isHoveringClickable
            ? 'rgba(99, 102, 241, 0.16)'
            : 'rgba(99, 102, 241, 0.06)',
          borderColor: isHoveringClickable
            ? 'rgba(129, 140, 248, 0.7)'
            : 'rgba(129, 140, 248, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-9 h-9 rounded-full border backdrop-blur-[1px]"
      />
    </div>
  );
}
