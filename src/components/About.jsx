import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Zap } from 'lucide-react';
import { profileData } from '../data/profile';

export const About = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Full-Stack Architecture",
      desc: "Building robust distributed backends and reactive client frontends designed for high concurrency, clean contracts, and effortless maintainability."
    },
    {
      icon: Sparkles,
      title: "Frontier AI Orchestration",
      desc: "Architecting autonomous agents, hybrid RAG retrieval pipelines, and fine-tuned prompt harnesses that integrate seamlessly into production workflows."
    },
    {
      icon: Zap,
      title: "Performance & Micro-Interactions",
      desc: "Engineering sub-second render lifecycles, fluid 60fps animations, optimized bundle sizes, and accessible web standards."
    }
  ];

  return (
    <section id="about" className="section relative border-t border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="section-tag" data-cursor-text="ABOUT">
            <span className="section-tag-dot" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="section-title">
            Engineering with <span className="text-gradient-accent interactive-word" data-cursor-text="INTENTION">Intention & Scale</span>
          </h2>
          <p className="section-subtitle">
            Bridging complex distributed backend systems with polished frontend experiences and applied artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {profileData.bio && profileData.bio.map((paragraph, index) => (
              <p key={index} className="text-zinc-300 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-5 mt-3 border-t border-white/10">
              {profileData.highlights && profileData.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col"
                  data-cursor-text={item.label.toUpperCase()}
                >
                  <span className="font-display font-black text-xl sm:text-2xl text-white text-gradient-accent">
                    {item.value}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 mt-1 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Pillars Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  className="glass-card p-5 flex flex-col gap-2.5 group"
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  data-cursor-text={pillar.title.split(' ')[0].toUpperCase()}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                      <Icon size={17} />
                    </div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-indigo-200 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
