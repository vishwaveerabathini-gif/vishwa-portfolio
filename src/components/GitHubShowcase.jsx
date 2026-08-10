import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ArrowUpRight, BookMarked, Code2, Terminal, Flame } from 'lucide-react';
import { GithubIcon, LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';

const featuredRepos = [
  {
    name: 'hackathon',
    desc: 'Collaborative full-stack hackathon project built for rapid prototyping and interactive team workflows.',
    stars: 1,
    forks: 0,
    language: 'JavaScript',
    langColor: '#f7df1e',
    link: 'https://github.com/vishwaveerabathini-gif/hackathon',
  },
  {
    name: 'to-do-List',
    desc: 'Dynamic interactive task and productivity management application with local persistence and responsive layout.',
    stars: 1,
    forks: 0,
    language: 'JavaScript',
    langColor: '#f7df1e',
    link: 'https://github.com/vishwaveerabathini-gif/to-do-List',
  },
  {
    name: 'leetcode-dsa-solutions',
    desc: 'Data structures & algorithms problem solutions with optimal time and space complexity implementations.',
    stars: 5,
    forks: 1,
    language: 'C++ / Java / Python',
    langColor: '#3572A5',
    link: profileData.leetcode,
    isLeetcode: true,
  },
  {
    name: 'ai-web-experiments',
    desc: 'Frontier AI agent workflows and modern reactive web UI components built for high-performance applications.',
    stars: 4,
    forks: 1,
    language: 'React & FastAPI',
    langColor: '#61dafb',
    link: profileData.github,
  },
];

export const GitHubShowcase = () => {
  return (
    <section className="section relative border-t border-white/5 bg-[#090b11]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col items-start">
            <div className="section-tag" data-cursor-text="OPEN SOURCE">
              <span className="section-tag-dot" />
              <span>06 // OPEN SOURCE & CODING PROFILES</span>
            </div>
            <h2 className="section-title">
              GitHub & <span className="text-gradient-accent interactive-word" data-cursor-text="LEETCODE">LeetCode Activity</span>
            </h2>
            <p className="section-subtitle mb-0">
              Explore my public repositories on GitHub and algorithmic problem-solving journey on LeetCode.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
            <a
              href={profileData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm flex items-center gap-2 border-amber-500/30 hover:border-amber-400 text-amber-300"
              data-cursor="link"
              data-cursor-text="LEETCODE"
            >
              <LeetcodeIcon size={15} className="text-amber-400" />
              <span>LeetCode: @{profileData.leetcodeUsername}</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm flex items-center gap-2"
              data-cursor="github"
              data-cursor-text="GITHUB"
            >
              <GithubIcon size={15} />
              <span>GitHub: @{profileData.githubUsername}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredRepos.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-indigo-500/40"
              data-cursor="link"
              data-cursor-text={repo.isLeetcode ? "LEETCODE" : "GITHUB REPO"}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {repo.isLeetcode ? (
                      <LeetcodeIcon size={16} className="text-amber-400" />
                    ) : (
                      <BookMarked size={16} className="text-indigo-400" />
                    )}
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 hover:text-zinc-200">
                    <Star size={12} className="text-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-zinc-200">
                    <GitFork size={12} className="text-zinc-400" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
