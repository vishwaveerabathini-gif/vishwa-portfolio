import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instant 0ms tracking for inner precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Detect interactive targets under cursor
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        const cursorTarget = target.closest('[data-cursor-text], [data-cursor], a, button, .interactive-word');
        if (cursorTarget) {
          setIsHovering(true);
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
          if (cursorTarget.tagName === 'A' || cursorTarget.tagName === 'BUTTON') {
            const text = cursorTarget.getAttribute('data-cursor') || cursorTarget.textContent.trim().split(/\s+/)[0];
            setCursorText(text && text.length <= 12 ? text.toUpperCase() : 'VIEW');
            return;
          }
        } else {
          setIsHovering(false);
          setCursorText('');
        }
      }
    };

    const render = () => {
      // Smooth 60fps magnetic lerp for outer cyber ring
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999999,
        overflow: 'hidden',
      }}
    >
      {/* 1. Precise Inner Glowing Dot - 0ms exact mouse tip tracking */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          borderRadius: '50%',
          background: isHovering
            ? 'linear-gradient(135deg, #a855f7, #38bdf8)'
            : 'linear-gradient(135deg, #38bdf8, #818cf8)',
          boxShadow: isHovering
            ? '0 0 14px rgba(168,85,247,0.9), 0 0 28px rgba(56,189,248,0.7)'
            : '0 0 10px rgba(56,189,248,0.8), 0 0 20px rgba(129,140,248,0.5)',
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, background 0.2s, opacity 0.2s',
          willChange: 'transform',
        }}
      />

      {/* 2. Outer Cyber Orbital Ring with Ticks & Directly Attached Tooltip */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: isHovering ? 46 : 38,
            height: isHovering ? 46 : 38,
            borderRadius: '50%',
            border: isHovering
              ? '1.5px solid rgba(168,85,247,0.9)'
              : '1.4px solid rgba(129,140,248,0.65)',
            background: isHovering
              ? 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(56,189,248,0.08) 60%, transparent 80%)'
              : 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(56,189,248,0.04) 60%, transparent 80%)',
            boxShadow: isHovering
              ? '0 0 24px rgba(168,85,247,0.5), inset 0 0 8px rgba(168,85,247,0.2)'
              : '0 0 14px rgba(99,102,241,0.3), inset 0 0 6px rgba(99,102,241,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'width 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.2s, background 0.2s',
          }}
        >
          {/* Permanent Cyber Corner Precision Ticks */}
          <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', width: 6, height: 2, backgroundColor: '#38bdf8', boxShadow: '0 0 6px #38bdf8' }} />
          <div style={{ position: 'absolute', bottom: -1, left: '50%', transform: 'translateX(-50%)', width: 6, height: 2, backgroundColor: '#38bdf8', boxShadow: '0 0 6px #38bdf8' }} />
          <div style={{ position: 'absolute', left: -1, top: '50%', transform: 'translateY(-50%)', width: 2, height: 6, backgroundColor: '#818cf8', boxShadow: '0 0 6px #818cf8' }} />
          <div style={{ position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)', width: 2, height: 6, backgroundColor: '#818cf8', boxShadow: '0 0 6px #818cf8' }} />
        </div>

        {/* Floating Tooltip Label (Physically attached to cursor ring) */}
        {cursorText && (
          <div
            style={{
              position: 'absolute',
              left: '100%',
              top: '50%',
              transform: 'translateY(-50%)',
              marginLeft: 10,
              padding: '2.5px 8px',
              borderRadius: 6,
              fontFamily: 'monospace',
              fontSize: 10,
              fontWeight: 'bold',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              background: 'linear-gradient(135deg, rgba(10,13,24,0.96), rgba(18,22,38,0.96))',
              border: '1px solid rgba(129,140,248,0.55)',
              color: '#c7d2fe',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7), 0 0 16px rgba(99,102,241,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
            <span>{cursorText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
