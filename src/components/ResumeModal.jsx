import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile';
import { skillsData } from '../data/skills';
import { journeyData } from '../data/journey';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-all"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0f17] border border-white/15 rounded-2xl shadow-2xl z-10 flex flex-col my-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#0d0f17]/95 backdrop-blur-md p-6 border-b border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <FileText size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Curriculum Vitae / Resume
                </h3>
                <p className="font-mono text-xs text-zinc-400">
                  {profileData.name} — {profileData.role}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Resume Preview Body */}
          <div className="p-6 sm:p-8 flex flex-col gap-8">
            
            {/* Quick Action Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30">
              <div>
                <p className="font-display font-bold text-sm text-white">
                  Download or open raw PDF document
                </p>
                <p className="text-xs text-zinc-400">
                  Verified up to date for 2026
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={profileData.resumeUrl || '/assets/resume.pdf'}
                  download="Developer-Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>

                <a
                  href={profileData.resumeUrl || '/assets/resume.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <ExternalLink size={15} />
                  <span>Open PDF</span>
                </a>
              </div>
            </div>

            {/* Structured Resume Content */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-6">
              
              {/* Summary */}
              <div>
                <h4 className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                  Executive Summary
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {profileData.shortBio}
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <h4 className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Work Experience
                </h4>
                {journeyData.filter(j => j.category === 'Experience').map((exp, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <span className="font-bold text-white">{exp.role} — {exp.organization}</span>
                      <span className="font-mono text-zinc-400 text-[11px]">{exp.period}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core Skill Summary */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <h4 className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Key Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillsData.flatMap(s => s.skills).filter(sk => sk.highlight).map((skill, idx) => (
                    <span key={idx} className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-[#0d0f17]/95 backdrop-blur-md p-4 px-6 border-t border-white/10 flex items-center justify-between z-20">
            <span className="font-mono text-xs text-zinc-400">
              {profileData.email}
            </span>
            <button
              onClick={onClose}
              className="btn btn-secondary btn-sm"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
