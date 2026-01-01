import React, { useState } from 'react';
import { Project } from '../types';
import StatusBadge from './StatusBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
  onZoom: (url: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onZoom }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="masonry-item group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Main Card Container */}
      <div className={`relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-white dark:bg-white/[0.03] border-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
        ${isHovered 
          ? 'border-lime-500 dark:border-lime-400 shadow-[0_40px_80px_-20px_rgba(217,255,80,0.2)] lg:-translate-y-4' 
          : 'border-gray-100 dark:border-white/10 shadow-sm'}`}
      >
        
        {/* Floating Status Badge */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 pointer-events-none transform transition-all duration-500 group-hover:translate-x-2">
          <StatusBadge status={project.status} />
        </div>

        {/* Action Buttons Floating Overlay */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex flex-col gap-3">
          <button 
            onClick={() => onZoom(project.imageUrl)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-500 transform border border-white/20
              ${isHovered ? 'bg-lime-500 dark:bg-lime-400 text-white dark:text-black lg:translate-x-0 opacity-100 hover:scale-110 active:scale-90 shadow-lg shadow-lime-400/30' : 'bg-white/10 text-white lg:translate-x-12 lg:opacity-0'}`}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
          </button>
        </div>

        {/* Image Stage */}
        <div className={`relative w-full ${project.heightClass} overflow-hidden bg-gray-50 dark:bg-ultra cursor-pointer`} onClick={() => onZoom(project.imageUrl)}>
          <img 
            src={project.imageUrl} 
            alt={project.title}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
              ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-700"></div>
          
          <div className={`absolute bottom-0 left-0 right-0 p-5 sm:p-8 transform transition-all duration-700 ease-zoom
            ${isHovered ? 'translate-y-0 opacity-100' : 'lg:translate-y-12 lg:opacity-0'}`}>
            <p className="text-white dark:text-gray-100 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 sm:line-clamp-3 italic">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-6 sm:p-8 sm:pb-10 bg-white dark:bg-white/[0.03]">
          <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 sm:px-3 py-1 rounded-md bg-gray-50 dark:bg-lime-400/10 border border-gray-200 dark:border-lime-400/40 text-[8px] sm:text-[9px] font-bold text-gray-500 dark:text-lime-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between group/title cursor-default">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white transition-all duration-500 group-hover/title:text-lime-600 dark:group-hover/title:text-lime-400 lg:group-hover/title:translate-x-1">
              {project.title}
            </h3>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center transform -rotate-45 lg:group-hover/title:rotate-0 group-hover/title:bg-lime-400 group-hover/title:border-lime-400 group-hover/title:text-black transition-all duration-700 shadow-sm group-hover/title:shadow-lime-500/30 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;