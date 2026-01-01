import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, setActiveCategory }) => {
  const categories: Category[] = ['All', 'Web', 'Mobile', 'Design', 'AI'];

  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200/50 dark:border-white/10 overflow-x-auto scrollbar-hide max-w-full">
      <div className="flex items-center gap-2 px-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all whitespace-nowrap ${
              activeCategory === category
                ? 'bg-white dark:bg-lime-400 text-lime-600 dark:text-black shadow-lg shadow-lime-400/20'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-lime-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;