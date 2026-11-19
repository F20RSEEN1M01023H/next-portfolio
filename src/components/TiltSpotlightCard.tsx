'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltSpotlightCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 24 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    setSpot({ x: localX, y: localY });

    // Normalized -0.5 to 0.5 coordinates for 3D tilt
    mouseX.set(localX / rect.width - 0.5);
    mouseY.set(localY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`relative overflow-hidden rounded-2xl bg-slate-900/75 border border-slate-800 hover:border-white/25 transition-colors h-full ${className}`}
      >
        {/* Frosted White Glass Sheen */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, rgba(255, 255, 255, 0.09), transparent 70%)`,
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
}
