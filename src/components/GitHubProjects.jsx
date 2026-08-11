import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { profileData } from '../data/profile';
import { GithubIcon } from './Icons';

export const GitHubProjects = () => {
  return (
    <section id="projects" className="section relative border-t border-white/5 bg-[#090a10]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="flex flex-col items-start">
            <h2 className="section-title">
              <span className="interactive-word" data-cursor-text="GITHUB">GitHub Profile</span> & <span className="text-gradient-accent interactive-word" data-cursor-text="PROJECTS">Live Projects</span>
            </h2>
            <p className="section-subtitle mb-0">
              Visit my GitHub profile or click any project thumbnail below to directly open the live deployed application.
            </p>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm flex items-center gap-2 self-start md:self-auto"
            data-cursor="github"
            data-cursor-text="GITHUB"
          >
            <GithubIcon size={16} />
            <span>GitHub: @{profileData.githubUsername}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 1. FIRST: GITHUB PROFILE LINK CARD */}
        <motion.a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#121624] via-[#0e111c] to-[#090b12] border border-indigo-500/30 hover:border-indigo-400 mb-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group block focus:outline-none"
          data-cursor="github"
          data-cursor-text="MY GITHUB"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <GithubIcon size={32} />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-xl text-white group-hover:text-indigo-300 transition-colors">
                  {profileData.name} on GitHub
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
                  ACTIVE
                </span>
              </div>
              <p className="font-mono text-xs text-indigo-400 mt-0.5">
                https://github.com/{profileData.githubUsername}
              </p>
              <p className="text-xs text-zinc-400 mt-1 max-w-lg leading-relaxed">
                Explore all open source repositories, latest code commits, and collaborative full-stack projects.
              </p>
            </div>
          </div>

          <div className="btn btn-primary btn-md flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-center group-hover:shadow-indigo-500/30">
            <GithubIcon size={16} />
            <span>Open My GitHub Profile</span>
            <ArrowUpRight size={14} />
          </div>
        </motion.a>

        {/* Section Label: PROJECTS UNDER GITHUB */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
            MY LIVE PROJECTS:
          </span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* 2. PROJECTS GRID (2 CLEAN PROJECTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <div key={project.id || idx} className="relative">
              {/* Project Number Indicator */}
              <div className="absolute -top-2.5 -left-2.5 z-20 w-6 h-6 rounded-full bg-indigo-600 border border-indigo-400 text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-md">
                {idx + 1}
              </div>

              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
