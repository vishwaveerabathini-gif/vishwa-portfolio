import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, BookOpen, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectDetailsModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-all"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0f17] border border-white/15 rounded-2xl shadow-2xl z-10 flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-[#0d0f17]/90 backdrop-blur-md p-6 border-b border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold">
                {project.category}
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white">
                {project.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 flex flex-col gap-8">
            
            {/* Image Preview Banner */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Actions & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <p className="font-mono text-xs sm:text-sm text-zinc-300">
                {project.tagline}
              </p>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    data-cursor="github"
                  >
                    <GithubIcon size={15} />
                    <span>Source Code</span>
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={15} />
                    <span>Live Application</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#141724]/60 border border-white/10 flex flex-col gap-2">
                <span className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle size={14} />
                  <span>The Problem</span>
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#141724]/60 border border-white/10 flex flex-col gap-2">
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>The Architectural Solution</span>
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="flex flex-col gap-3">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-indigo-400" />
                  <span>Key Features & Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span className="text-sm text-zinc-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Applied */}
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <Layers size={16} className="text-sky-400" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 font-mono text-xs font-medium text-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Deep Insights: Contributions, Challenges, Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="font-mono text-xs text-indigo-400 font-bold uppercase">
                  My Contribution
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.myContribution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="font-mono text-xs text-amber-400 font-bold uppercase">
                  Technical Challenge
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="font-mono text-xs text-sky-400 font-bold uppercase">
                  What I Learned
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.whatILearned}
                </p>
              </div>

            </div>

          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-[#0d0f17]/90 backdrop-blur-md p-4 px-6 border-t border-white/10 flex items-center justify-end z-20">
            <button
              onClick={onClose}
              className="btn btn-secondary btn-sm"
            >
              <span>Close Case Study</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
