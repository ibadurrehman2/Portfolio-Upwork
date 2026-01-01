import React from 'react';
import { ProjectStatus } from '../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    'Live': 'bg-lime-400/10 text-lime-400 border-lime-400/30',
    'In Progress': 'bg-amber-400/10 text-amber-400 border-amber-400/30',
    'Case Study': 'bg-sky-400/10 text-sky-400 border-sky-400/30',
  };

  return (
    <div className={`px-4 py-1.5 rounded-full backdrop-blur-md border text-[9px] font-black uppercase tracking-[0.25em] flex items-center gap-2 ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse bg-current`}></span>
      {status}
    </div>
  );
};

export default StatusBadge;