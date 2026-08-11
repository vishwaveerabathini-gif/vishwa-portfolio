import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Terminal, Code2, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero = () => {
  const cardRef = useRef(null);

  // 3D Card Tilt on Mouse Move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 200 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);
  const shineOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0.08, 0.35]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[260px] h-[260px] bg-sky-500/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Information */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Name Headline - Direct & Bold */}
            <h1 className="font-display font-black text-3xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.1] mb-5 text-white">
              Hi, I'm{' '}
              <span
                className="text-gradient-accent interactive-word"
                data-cursor-text="VISHWATEJA"
              >
                {profileData.name}
              </span>
            </h1>

            {/* Subtitle Introduction */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl mb-8">
              {profileData.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3.5">
              <button
                onClick={handleScrollToProjects}
                className="btn btn-primary btn-md group shadow-lg shadow-indigo-600/20"
                data-cursor="project"
                data-cursor-text="PROJECTS"
              >
                <span>Explore My Projects</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: User Portrait Showcase */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end items-center py-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[360px] cursor-pointer flex flex-col gap-2.5"
              style={{ perspective: 1000 }}
              data-cursor="zoom"
              data-cursor-text="PORTRAIT"
            >
              {/* Clean Badges Perfectly Settled Above the Image */}
              <div className="w-full flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d101b]/95 border border-white/15 backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-zinc-100">
                    IARE CSE '28
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d101b]/95 border border-indigo-500/30 backdrop-blur-md shadow-lg text-indigo-300">
                  <Terminal size={12} className="text-indigo-400" />
                  <span className="font-mono text-[11px] font-semibold">LeetCode DSA</span>
                </div>
              </div>

              {/* 3D Photo Card - 100% Unobstructed & Visible */}
              <motion.div
                className="relative w-full aspect-[4/5] rounded-2xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/15 shadow-2xl backdrop-blur-md overflow-hidden group"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#10131d]">
                  <img
                    src={profileData.photo || '/assets/profile.jpg'}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-all duration-500 ease-out"
                  />

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Glare effect on mouse tilt */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                  style={{ opacity: shineOpacity }}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
