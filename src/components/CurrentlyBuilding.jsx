import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BookOpen, Compass, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { currentlyBuildingData } from '../data/building';

export const CurrentlyBuilding = () => {
  return (
    <section className="py-16 relative border-t border-white/5 bg-[#0e111a]/60">
      <div className="container">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300">
            CURRENTLY BUILDING & ACTIVE FOCUS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Active Project Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[11px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity size={13} className="animate-spin text-indigo-400" style={{ animationDuration: '6s' }} />
                  <span>Active Project</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono text-[10px] font-semibold">
                  {currentlyBuildingData.project.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {currentlyBuildingData.project.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {currentlyBuildingData.project.tagline}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {currentlyBuildingData.project.techStack.map((tech, idx) => (
                  <span key={idx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Focus Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={13} />
                  <span>Mastering Next</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 font-mono text-[10px] font-semibold">
                  {currentlyBuildingData.learning.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2">
                {currentlyBuildingData.learning.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {currentlyBuildingData.learning.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[11px] text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Continuous Learning & Systems Craft
              </span>
            </div>
          </div>

          {/* AI Exploration Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass size={13} />
                  <span>Research & Horizon</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-mono text-[10px] font-semibold">
                  {currentlyBuildingData.exploring.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2">
                {currentlyBuildingData.exploring.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {currentlyBuildingData.exploring.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[11px] text-zinc-500 flex items-center gap-1.5">
                <Sparkles size={11} className="text-purple-400" />
                Applied Machine Learning Frontier
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
