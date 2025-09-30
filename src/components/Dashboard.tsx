import React from 'react';
import { AVATARS, MODULES } from '../constants';
import type { UserProfile, Module } from '../types';
import AppLogo from './common/AppLogo';

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


interface DashboardProps {
  userProfile: UserProfile;
  onStartModule: (module: Module) => void;
  onResetProfile: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userProfile, onStartModule, onResetProfile }) => {
  const completedModules = Object.values(userProfile.progress).filter(p => p === 'completed').length;
  const totalModules = MODULES.length;
  const progressPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  return (
    <div className="min-h-screen w-full p-4 sm:p-8 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?blur=10)' }}>
      <header className="w-full max-w-5xl mx-auto bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={AVATARS[userProfile.avatarId]} alt="User Avatar" className="w-16 h-16 rounded-full border-2 border-cyan-400" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">¡Hola, {userProfile.name}!</h1>
            <p className="text-gray-300">¡Es hora de desbloquear tu potencial!</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-white hidden sm:block">Docente Desbloqueado</span>
                <AppLogo className="h-10 w-10" />
            </div>
            <div className="w-full min-w-40">
                <div className="text-white text-sm mb-1 text-right">{completedModules} / {totalModules} Módulos</div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>
        </div>
      </header>
      
      <main className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODULES.map((module, index) => {
          const status = userProfile.progress[module.id];
          const isLocked = status === 'locked';

          return (
            <div
              key={module.id}
              className={`
                bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between transition-all duration-300
                ${isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-400 hover:shadow-cyan-500/20 transform hover:-translate-y-1 cursor-pointer'}
              `}
              onClick={() => !isLocked && onStartModule(module)}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-semibold bg-white/10 text-cyan-300 py-1 px-3 rounded-full">Módulo {index + 1}</span>
                    {status === 'completed' && <CheckCircleIcon />}
                    {isLocked && <LockIcon />}
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{module.title}</h2>
                <p className="text-gray-300 text-sm">{module.description}</p>
              </div>
              <button
                disabled={isLocked}
                className={`
                  w-full mt-6 py-2 px-4 rounded-lg font-semibold transition duration-300
                  ${isLocked ? 'bg-gray-500/20 text-gray-400' : 'hover:bg-cyan-500 text-white'}
                `}
              >
                {status === 'completed' ? 'Repasar' : 'Comenzar'}
              </button>
            </div>
          );
        })}
      </main>
       <footer className="text-center text-xs text-gray-300 mt-8 pb-4">
            <p>Creado por: Christian Núñez V., Asesor Pedagógico, Programa PACE-UDA, 2025.</p>
            <div className="mt-4 flex justify-center items-center gap-4">
              <button
                onClick={onResetProfile}
                className="bg-red-500/50 text-white py-1 px-3 rounded-md text-xs hover:bg-red-500/70 transition"
              >
                Debug: Reset Profile
              </button>
              <a href="https://github.com/christianyv/docente-desbloqueado" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub" className="text-gray-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
        </footer>
    </div>
  );
};

export default Dashboard;