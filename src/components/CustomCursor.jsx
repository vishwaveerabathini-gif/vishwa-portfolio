import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const springConfig = { damping: 22, stiffness: 400, mass: 0.3 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  // Outer ring follows with softer spring
  const ringConfig = { damping: 28, stiffness: 180, mass: 0.5 };
  const ringX = useSpring(-100, ringConfig);
  const ringY = useSpring(-100, ringConfig);

  // Scale animation for hover
  const ringScale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor-text], [data-cursor], a, button, .interactive-word');

      if (cursorTarget) {
        setIsHovering(true);
        ringScale.set(1.8);

        const explicitText = cursorTarget.getAttribute('data-cursor-text');
        if (explicitText) {
          setCursorText(explicitText);
          return;
        }

        if (cursorTarget.classList.contains('interactive-word')) {
          const word = cursorTarget.textContent.trim().split(/\s+/)[0];
          setCursorText(word ? word.toUpperCase() : '');
          return;
        }

        setCursorText('');
      } else {
        setIsHovering(false);
        ringScale.set(1);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY, ringX, ringY, ringScale]);

  if (isTouch || !isVisible) return null;

  const hasText = cursorText.length > 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Inner glowing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="rounded-full transition-all duration-200"
          style={{
            width: isHovering ? 6 : 8,
            height: isHovering ? 6 : 8,
            background: isHovering
              ? 'linear-gradient(135deg, #818cf8, #c084fc)'
              : 'linear-gradient(135deg, #38bdf8, #818cf8)',
            boxShadow: isHovering
              ? '0 0 16px rgba(129,140,248,0.8), 0 0 32px rgba(192,132,252,0.4)'
              : '0 0 12px rgba(56,189,248,0.7), 0 0 24px rgba(129,140,248,0.3)',
          }}
        />
      </motion.div>

      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: ringScale,
        }}
      >
        <div
          className="rounded-full transition-all duration-300"
          style={{
            width: 36,
            height: 36,
            border: isHovering
              ? '1.5px solid rgba(129,140,248,0.6)'
              : '1.5px solid rgba(255,255,255,0.15)',
            background: isHovering
              ? 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)'
              : 'transparent',
            boxShadow: isHovering
              ? '0 0 20px rgba(129,140,248,0.2)'
              : 'none',
          }}
        />
      </motion.div>

      {/* Floating text label */}
      {hasText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            x: ringX,
            y: ringY,
          }}
          initial={false}
        >
          <div
            className="ml-6 -mt-1 px-2.5 py-1 rounded-md font-mono text-[10px] font-bold tracking-wider whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, rgba(10,13,24,0.95), rgba(15,18,30,0.95))',
              border: '1px solid rgba(129,140,248,0.5)',
              color: '#a5b4fc',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6), 0 0 12px rgba(99,102,241,0.15)',
            }}
          >
            {cursorText}
          </div>
        </motion.div>
      )}
    </div>
  );
};
