import React from 'react';
import { ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const targetUrl = project.liveDemo || project.github;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-400/80 transition-all duration-300 flex flex-col h-full bg-[#0e111a] hover:bg-[#131726] cursor-pointer group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 block no-underline focus:outline-none hover:-translate-y-1.5"
      data-cursor="project"
      data-cursor-text="OPEN PROJECT"
    >
      {/* 1. IMAGE THUMBNAIL (DIRECTLY CLICKABLE) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090a10]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center filter contrast-[1.04] group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Live Status Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 border border-white/15 font-mono text-[10px] font-bold text-emerald-400 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE APP</span>
          </span>
        </div>
      </div>

      {/* 2. ABOUT THE PROJECT */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
              {project.name}
            </h3>
            <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-indigo-600 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all shrink-0">
              <ExternalLink size={15} />
            </div>
          </div>

          <p className="text-xs font-mono text-indigo-400 mb-2 font-semibold">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] sm:text-[11px] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Link Footer Bar */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
            <span className="text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1.5 transition-colors font-mono text-xs">
              <ExternalLink size={13} />
              <span>Launch Live Website</span>
            </span>

            <span className="font-mono text-xs text-indigo-300 group-hover:text-white transition-colors font-bold">
              Direct Link ↗
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
