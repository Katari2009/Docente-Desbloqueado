import React from 'react';
import type { UserProfile } from '../../types';
import { MODULES } from '../../constants';

interface ProgressBarProps {
  userProfile: UserProfile;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ userProfile }) => {
  const completedModules = Object.values(userProfile.progress).filter(
    (p) => p === 'completed'
  ).length;
  const totalModules = MODULES.length;
  const progressPercentage =
    totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-cyan-300">Progreso</span>
        <span className="text-sm font-medium text-cyan-300">{completedModules} / {totalModules} Módulos</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;