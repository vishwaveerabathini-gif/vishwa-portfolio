import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'vishwaveerabathini-gif',
      icon: GithubIcon,
      url: profileData.github,
      accent: 'hover:border-indigo-400 hover:text-white',
      badgeColor: 'bg-white/5',
      iconColor: 'text-zinc-200',
    },
    {
      name: 'LeetCode',
      label: 'Vishu_teja_18',
      icon: LeetcodeIcon,
      url: profileData.leetcode,
      accent: 'hover:border-amber-400 hover:text-amber-300',
      badgeColor: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
    },
    {
      name: 'LinkedIn',
      label: 'Veerabathini Vishwa Teja',
      icon: LinkedinIcon,
      url: profileData.linkedin,
      accent: 'hover:border-sky-400 hover:text-sky-300',
      badgeColor: 'bg-sky-500/10',
      iconColor: 'text-sky-400',
    },
    {
      name: 'Email',
      label: 'vishwateja.dev@gmail.com',
      icon: Mail,
      url: `mailto:${profileData.email}`,
      accent: 'hover:border-emerald-400 hover:text-emerald-300',
      badgeColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <footer className="py-14 border-t border-white/10 bg-[#06070a] relative z-10">
      <div className="container flex flex-col gap-10">
        
        {/* Top: Large Prominent Social Logos in a Row */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
            CONNECT DIRECTLY ACROSS PROFILES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl bg-white/[0.03] border border-white/10 ${item.accent} transition-all duration-200 flex items-center justify-between group hover:-translate-y-1 hover:shadow-xl`}
                  data-cursor="link"
                  data-cursor-text={item.name.toUpperCase()}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Big Logo Icon */}
                    <div className={`w-12 h-12 rounded-xl ${item.badgeColor} border border-white/10 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>

                    {/* Name & Details */}
                    <div className="flex flex-col text-left">
                      <span className="font-display font-bold text-base text-white group-hover:text-inherit transition-colors">
                        {item.name}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-400 truncate max-w-[130px]">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-display font-bold text-sm text-white">
              {profileData.name}
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="font-mono text-xs text-zinc-400">
              {profileData.college} (Class of 2028)
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
            data-cursor-text="TOP"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
