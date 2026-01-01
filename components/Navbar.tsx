import React from 'react';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl">
      <div className="bg-white/70 dark:bg-ultra/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-full px-4 py-3 flex items-center justify-between shadow-2xl transition-colors duration-500">
        <div className="flex items-center gap-4 pl-2">
          {/* Logo Icon as requested */}
          <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center text-black font-extrabold text-xl shadow-[0_0_20px_rgba(217,255,80,0.4)] shrink-0">
            IR
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-gray-900 dark:text-white leading-none">Ibadur Rehman</span>
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-500 dark:text-lime-400 mt-0.5">FRONTEND.DEV</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-lime-400 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          
          <a 
            href="mailto:ibadurrehman@yahoo.com"
            className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-gray-900 dark:bg-lime-400 text-white dark:text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-lime-400/10"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;