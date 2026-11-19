'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics so the glass bubble glides gently behind the cursor
  const bubbleSpring = { damping: 26, stiffness: 190, mass: 0.55 };
  const bubbleX = useSpring(mouseX, bubbleSpring);
  const bubbleY = useSpring(mouseY, bubbleSpring);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      // Positioned further below and slightly behind the cursor arrow
      mouseX.set(e.clientX + 14);
      mouseY.set(e.clientY + 66);

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
      {/* Pure Frosted Glass Bubble */}
      <motion.div
        style={{
          x: bubbleX,
          y: bubbleY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringClickable ? 1.55 : 1,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 280, damping: 24 },
        }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full bg-white/[0.06] border border-white/25 backdrop-blur-md shadow-[inset_0_2px_6px_rgba(255,255,255,0.28),0_8px_20px_rgba(0,0,0,0.45)] flex items-start justify-start p-1.5"
      >
        {/* Subtle Glass Specular Reflection */}
        <span className="w-2 h-1 rounded-full bg-white/50 -rotate-45 blur-[0.5px]" />
      </motion.div>
    </div>
  );
}
