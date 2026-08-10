import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { LeetCodeSection } from './components/LeetCodeSection';
import { GitHubProjects } from './components/GitHubProjects';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="min-h-screen bg-[#06070a] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden font-sans">
      {/* Interactive Custom Trailing Lens Cursor */}
      <CustomCursor />

      {/* Dynamic Background Particle Mesh */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <LeetCodeSection />
        <GitHubProjects />
        <Journey />
      </main>

      {/* Bottom Footer with Big Logos in a Row */}
      <Footer />
    </div>
  );
};

export default App;
