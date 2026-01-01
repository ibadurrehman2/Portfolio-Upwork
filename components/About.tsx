import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 sm:pt-44 pb-20 sm:pb-32 px-6 bg-gray-50 dark:bg-ultra text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Background Layer: Glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-lime-400/5 dark:bg-lime-400/15 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-lime-500/5 dark:bg-lime-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Portrait Section */}
        <div className="relative group order-2 lg:order-1">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 shadow-2xl transition-colors duration-500">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
              alt="Ibadur Rehman" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Glass Status Badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:right-6 right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-ultra/95 backdrop-blur-xl border border-gray-200 dark:border-lime-400/30 flex items-center gap-2 sm:gap-3 transition-colors duration-500">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-lime-400 truncate">
                Open to collaborations
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Content Section */}
        <div className="space-y-8 sm:space-y-10 order-1 lg:order-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-lime-600 dark:text-lime-400 font-bold tracking-widest text-[10px] sm:text-xs uppercase">ABOUT ME</span>
              <div className="h-px w-8 sm:w-12 bg-gray-300 dark:bg-lime-400/30"></div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Architecting the <br/>
              <span className="text-gray-400 dark:text-lime-400">Modern Web.</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 max-w-xl">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-100 leading-relaxed font-light transition-colors duration-500">
                I am a senior front-end engineer with over <span className="text-gray-900 dark:text-lime-400 font-bold">9+ years of experience</span> crafting high-performance web applications.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-100 leading-relaxed font-light transition-colors duration-500">
                I build scalable systems that bridge the gap between complex engineering and elegant user experiences.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 space-y-3 sm:space-y-4 shadow-sm transition-all duration-500 hover:border-lime-400/50 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-lime-600/10 dark:bg-lime-400/20 flex items-center justify-center text-lime-600 dark:text-lime-400 transition-colors group-hover:bg-lime-400 group-hover:text-black">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-display font-black text-gray-900 dark:text-white">9+</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-lime-400/90">Experience</p>
              </div>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 space-y-3 sm:space-y-4 shadow-sm transition-all duration-500 hover:border-lime-400/50 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-lime-600/10 dark:bg-lime-400/20 flex items-center justify-center text-lime-600 dark:text-lime-400 transition-colors group-hover:bg-lime-400 group-hover:text-black">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-display font-black text-gray-900 dark:text-white">50+</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-lime-400/90">Projects</p>
              </div>
            </div>
          </div>

          {/* Tech Footer */}
          <div className="flex items-center gap-4 sm:gap-6 pt-2 text-gray-400 dark:text-white/60">
            <span className="text-[10px] sm:text-xs font-mono shrink-0">&lt;/&gt;</span>
            <div className="flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-2 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">
              <span className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-default">TypeScript</span>
              <span className="text-gray-200 dark:text-white/20">•</span>
              <span className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-default">React</span>
              <span className="text-gray-200 dark:text-white/20">•</span>
              <span className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-default">Angular</span>
              <span className="text-gray-200 dark:text-white/20">•</span>
              <span className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-default">Next.js</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;