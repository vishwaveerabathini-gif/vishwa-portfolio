import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Cpu, Wrench, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skills';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  Wrench: Wrench,
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section relative border-t border-white/5 bg-[#0a0c13]/30">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="section-tag" data-cursor-text="SKILLS">
            <span className="section-tag-dot" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient-accent interactive-word" data-cursor-text="SPECIALIZATION">Specializations</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the modern technologies, frameworks, and architectural tools I leverage daily.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-2 border-b border-white/10">
          {skillsData.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                data-cursor-text={cat.category.split(' ')[0].toUpperCase()}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40'
                    : 'bg-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon size={15} className={isActive ? 'text-white' : 'text-zinc-400'} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          {skillsData[activeTab] && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {skillsData[activeTab].category}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {skillsData[activeTab].description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300 self-start sm:self-auto">
                  <Sparkles size={12} className="text-indigo-400" />
                  <span>{skillsData[activeTab].skills.length} Technologies</span>
                </div>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skillsData[activeTab].skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.02, x: 3 }}
                    transition={{ duration: 0.16 }}
                    data-cursor-text={skill.name.toUpperCase()}
                    className={`p-3.5 rounded-xl flex items-center justify-between border transition-all ${
                      skill.highlight
                        ? 'bg-indigo-950/20 border-indigo-500/30 hover:border-indigo-400/60 shadow-sm'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'bg-zinc-500'}`} />
                      <span className="font-medium text-xs sm:text-sm text-zinc-200">
                        {skill.name}
                      </span>
                    </div>

                    {skill.tag && (
                      <span className="font-mono text-[9px] uppercase font-semibold px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                        {skill.tag}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
