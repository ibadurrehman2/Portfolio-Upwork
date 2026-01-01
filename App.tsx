import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import { PROJECTS } from './data/projects';
import { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalRendered, setIsModalRendered] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleOpenZoom = (url: string) => {
    setZoomedImage(url);
    setIsModalRendered(true);
    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const handleCloseZoom = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalRendered(false);
      setZoomedImage(null);
    }, 500);
  };

  const toggleTheme = () => setIsDark(prev => !prev);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen relative selection:bg-lime-400/30 transition-colors duration-500">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="relative z-10">
        <About />

        <section id="portfolio" className="max-w-[1400px] mx-auto px-6 py-20 sm:py-32">
          <header className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <h2 className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-lime-600 dark:text-lime-400 mb-6 sm:mb-8">
              Selected Case Studies
            </h2>
            <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </header>

          <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 xl:columns-4">
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx} 
                onZoom={handleOpenZoom} 
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 sm:py-40">
              <div className="text-5xl sm:text-6xl mb-6 animate-pulse">✨</div>
              <p className="text-gray-400 dark:text-lime-400 font-display text-base sm:text-xl italic">
                The "{activeCategory}" archives are currently being digitized.
              </p>
            </div>
          )}
        </section>
      </main>

      {isModalRendered && (
        <div 
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12 bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-zoom ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleCloseZoom}
        >
          <button 
            onClick={handleCloseZoom}
            aria-label="Close Preview"
            className={`absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-all duration-300 z-[101] ${isModalVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img 
              src={zoomedImage || ''} 
              alt="Project Full Preview" 
              className={`max-w-full max-h-full rounded-2xl sm:rounded-3xl object-contain shadow-2xl transition-all duration-700 ease-zoom ${isModalVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-12'}`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-50 dark:bg-ultra py-20 sm:py-32 px-6 transition-colors duration-500 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Let's build something <br />
            <span className="text-lime-600 dark:text-lime-400">great together.</span>
          </h2>
          
          <p className="text-gray-500 dark:text-gray-100 text-sm md:text-base max-w-2xl mx-auto mb-16 sm:mb-24 leading-relaxed font-light">
            Open to freelance opportunities and full-time roles. If you have a project in mind or just want to say hi, feel free to reach out.
          </p>

          <div className="pt-8 sm:pt-12 border-t border-gray-200 dark:border-white/10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[9px] sm:text-[11px] font-mono text-gray-400 dark:text-lime-400 uppercase tracking-widest text-center md:text-left">
              &copy; {new Date().getFullYear()} Ibadur Rehman. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 dark:text-gray-200 hover:text-lime-600 dark:hover:text-lime-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-200 hover:text-lime-600 dark:hover:text-lime-400 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="mailto:ibadurrehman@yahoo.com" className="text-gray-400 dark:text-gray-200 hover:text-lime-600 dark:hover:text-lime-400 transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;