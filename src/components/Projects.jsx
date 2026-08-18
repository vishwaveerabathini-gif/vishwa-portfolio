import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, RefreshCw, Globe, Play } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { profileData } from '../data/profile';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);

  // Auto-fetch latest projects from user's GitHub
  const syncGitHubProjects = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch(`https://api.github.com/users/${profileData.githubUsername}/repos?sort=updated`);
      if (res.ok) {
        const repos = await res.json();
        if (Array.isArray(repos) && repos.length > 0) {
          const imagePool = [
            '/assets/projects/project-1.jpg',
            '/assets/projects/project-2.jpg',
            '/assets/projects/project-3.jpg',
            '/assets/projects/project-4.jpg'
          ];

          const formatted = repos.map((repo, idx) => {
            const image = imagePool[idx % imagePool.length];

            const formattedName = repo.name
              .replace(/[-_]/g, ' ')
              .replace(/\b\w/g, (c) => c.toUpperCase());

            const technologies = [];
            if (repo.language) technologies.push(repo.language);
            if (repo.topics && Array.isArray(repo.topics)) {
              technologies.push(...repo.topics.slice(0, 3));
            }
            if (technologies.length === 0) {
              technologies.push('JavaScript', 'Web Development');
            }

            // Direct live app URL
const liveAppUrl = idx === 1
  ? 'https://to-do-list-3m62.onrender.com/'
  : (
      repo.homepage && repo.homepage.startsWith('http')
        ? repo.homepage
        : `https://${profileData.githubUsername}.github.io/${repo.name}/`
    );

            return {
              id: repo.name,
              name: formattedName,
              tagline: `Live Project • ${repo.language || 'Web App'}`,
              description: repo.description || `Interactive web application built by ${profileData.name}. Click to launch the live project directly.`,
              category: repo.language || 'Full Stack',
              image: image,
              technologies: Array.from(new Set(technologies)),
              github: repo.html_url,
              liveDemo: liveAppUrl,
              stars: repo.stargazers_count,
              updatedAt: repo.pushed_at,
            };
          });

          setProjects(formatted);
          setLastSynced(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
      }
    } catch (err) {
      console.log('Using pre-cached repository projects:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    syncGitHubProjects();
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section relative border-t border-white/5 bg-[#0a0c13]/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              {/* GitHub Auto-Sync Button */}
              <button
                onClick={syncGitHubProjects}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 hover:bg-emerald-500/20 transition-all"
                title="Click to refresh projects from GitHub"
                data-cursor-text="SYNC"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${isSyncing ? 'animate-ping' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : lastSynced ? `Auto-Synced ${lastSynced}` : 'Live GitHub Sync'}</span>
                <RefreshCw size={10} className={`ml-0.5 ${isSyncing ? 'animate-spin' : ''}`} />
              </button>
            </div>

            <h2 className="section-title">
              My <span className="text-gradient-accent interactive-word" data-cursor-text="PROJECTS">Live Projects</span>
            </h2>
            <p className="section-subtitle mb-0">
              Click any project thumbnail below to directly launch and interact with the live deployed application.
            </p>
          </div>

          {/* Filter Pills & GitHub Button */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {categories.length > 2 && (
              <div className="flex items-center gap-1 bg-[#121520] p-1 rounded-xl border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    data-cursor-text={cat.split(' ')[0].toUpperCase()}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm flex items-center gap-1.5"
              data-cursor="github"
              data-cursor-text="ALL REPOS"
            >
              <GithubIcon size={14} />
              <span>GitHub Repos</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id || project.name}
                project={project}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
