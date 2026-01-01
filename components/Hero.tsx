import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-64 pb-32 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/30 blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 blur-[180px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm mb-12 transform hover:scale-105 transition-transform duration-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-600 dark:text-gray-400">
            Senior Frontend Professional
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-extrabold text-gray-900 dark:text-white mb-10 tracking-tight leading-[0.9] max-w-5xl mx-auto">
          Building Digital <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-400 animate-gradient-x bg-[length:200%_200%] uppercase">
            Experiences
          </span> <br />
          That Matter
        </h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-16 font-normal leading-relaxed">
          Hi, I’m <span className="text-gray-900 dark:text-white font-semibold">Ibadur Rehman</span>—a front-end professional who combines creative UI design with strong engineering skills to build <span className="italic">scalable, high-quality products</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#portfolio" className="group relative w-full sm:w-auto px-12 py-5 bg-indigo-600 text-white font-bold rounded-2xl transition-all hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.5)] active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
              View Work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
          <a href="#about" className="w-full sm:w-auto px-12 py-5 bg-white dark:bg-white/5 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all uppercase tracking-widest text-xs active:scale-95">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;