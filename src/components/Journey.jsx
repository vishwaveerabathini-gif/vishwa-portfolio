import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import { journeyData } from '../data/journey';

const categoryIcon = {
  Experience: Briefcase,
  Education: GraduationCap,
  Achievements: Award,
  Projects: Rocket,
  'Learning & Projects': Sparkles,
};

export const Journey = () => {
  return (
    <section id="journey" className="section relative border-t border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10">
          <h2 className="section-title">
            The Developer <span className="text-gradient-accent interactive-word" data-cursor-text="JOURNEY">Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of engineering roles, academic foundations, and key technical milestones.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/15 ml-2 sm:ml-4 flex flex-col gap-12">
          {journeyData.map((item, idx) => {
            const Icon = categoryIcon[item.category] || Briefcase;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0e1017] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                {/* Timeline Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-indigo-400">
                          {item.period}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="font-mono text-xs text-zinc-400">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-zinc-300">
                        {item.organization}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 self-start sm:self-auto">
                      <Icon size={18} />
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <div className="flex flex-col gap-2 pt-2">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                          <CheckCircle2 size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
