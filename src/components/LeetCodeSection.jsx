import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame, Trophy, Code2, Zap, Target } from 'lucide-react';
import { LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';

export const LeetCodeSection = () => {
  const dsaCategories = [
    { name: 'Arrays & Two Pointers', level: 'Core', desc: 'Linear traversal, in-place manipulation & sliding windows' },
    { name: 'Strings & Hash Maps', level: 'Frequent', desc: 'Pattern matching, frequency hashing & anagram checks' },
    { name: 'Trees & Graph Traversal', level: 'Advanced', desc: 'BFS/DFS recursion, binary search trees & topological ordering' },
    { name: 'Dynamic Programming', level: 'Optimized', desc: 'Memoization, tabulation & optimal substructure problems' },
  ];

  return (
    <section id="leetcode" className="section relative border-t border-white/5 bg-[#08090d]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="flex flex-col items-start">
            <h2 className="section-title">
              <span className="interactive-word" data-cursor-text="LEETCODE">LeetCode</span> & <span className="text-gradient-accent interactive-word" data-cursor-text="ALGORITHMS">Problem Solving</span>
            </h2>
            <p className="section-subtitle mb-0">
              Continuously sharpening data structures and algorithmic efficiency on LeetCode.
            </p>
          </div>

          <a
            href={profileData.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm flex items-center gap-2 border-amber-500/30 hover:border-amber-400 text-amber-300 self-start md:self-auto"
            data-cursor="link"
            data-cursor-text="LEETCODE"
          >
            <LeetcodeIcon size={16} className="text-amber-400" />
            <span>Visit @{profileData.leetcodeUsername}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* LeetCode Profile Card & DSA Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main LeetCode Highlight Card */}
          <motion.a
            href={profileData.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 p-7 rounded-2xl bg-gradient-to-br from-amber-500/10 via-[#10131d] to-[#0d0f17] border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
            data-cursor="link"
            data-cursor-text="LEETCODE"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <LeetcodeIcon size={26} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-white group-hover:text-amber-300 transition-colors">
                      LeetCode Profile
                    </h3>
                    <p className="font-mono text-xs text-amber-400 font-semibold">
                      @{profileData.leetcodeUsername}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Active problem solver practicing Data Structures, Algorithms, and optimization strategies on LeetCode.
              </p>

              {/* Badges / Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex flex-col">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase">Focus Area</span>
                  <span className="font-display font-bold text-sm text-white mt-0.5">DSA Mastery</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex flex-col">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase">Status</span>
                  <span className="font-display font-bold text-sm text-emerald-400 mt-0.5">Daily Practice</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-amber-300">
              <span>Open Profile on LeetCode</span>
              <span>↗</span>
            </div>
          </motion.a>

          {/* DSA Practice Domains Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {dsaCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between gap-2"
                data-cursor-text={cat.name.split(' ')[0].toUpperCase()}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-display font-bold text-sm text-white">
                      {cat.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-amber-400">
                      {cat.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
