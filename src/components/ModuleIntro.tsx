import React, { useState, useEffect } from 'react';
import { moduleVisuals, moduleInfographics, infographicAnimations } from '../config/moduleVisuals';
import { MODULES } from '../constants';
import { TUTORIALS } from '../config/tutorials';
import type { Tutorial } from '../types';
import HelpButton from './common/HelpButton';

interface ModuleIntroProps {
  moduleId: string;
  onContinue: () => void;
  onViewTutorial: (tutorial: Tutorial) => void;
  onOpenHelp: () => void;
}

const ModuleIntro: React.FC<ModuleIntroProps> = ({ moduleId, onContinue, onViewTutorial, onOpenHelp }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showObjectives, setShowObjectives] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const moduleData = MODULES.find(m => m.id === moduleId);
  const visualConfig = moduleVisuals[moduleId as keyof typeof moduleVisuals];
  const infographicData = moduleInfographics[moduleId as keyof typeof moduleInfographics];

  const relatedTutorials = TUTORIALS.filter(t => t.relatedModuleIds.includes(moduleId));

  useEffect(() => {
    setAnimationClass(infographicAnimations.fadeIn);
    const interval = setInterval(() => {
      if (!showObjectives && currentSection < infographicData.sections.length - 1) {
        setCurrentSection(prev => prev + 1);
        setAnimationClass(infographicAnimations.slideUp);
      } else if (!showObjectives) {
        setShowObjectives(true);
        setAnimationClass(infographicAnimations.bounceIn);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSection, showObjectives, infographicData.sections.length]);

  const currentSectionData = infographicData.sections[currentSection];

  if (!moduleData || !visualConfig || !infographicData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        Módulo no encontrado.
      </div>
    );
  }

  const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm14.553 1.106a.5.5 0 00-.822-.37L14 7.622V6.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-1.122l1.731.865a.5.5 0 00.822-.37v-4.73z" />
    </svg>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${visualConfig.gradient} p-4 sm:p-8 flex items-center justify-center transition-colors duration-500`}>
      <div className="w-full max-w-4xl bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8 text-white">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-white/20 rounded-full mb-4">
            <visualConfig.Icon />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{infographicData.title}</h1>
          <p className="text-lg sm:text-xl text-white/90">{infographicData.subtitle}</p>
        </div>

        {showObjectives ? (
          <div className={`${animationClass} transition-opacity duration-500`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-cyan-300">Objetivos de Aprendizaje</h3>
              <p className="text-gray-300">Al finalizar este módulo, podrás:</p>
            </div>
            <div className="space-y-4 mb-6">
              {infographicData.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg border-l-4 border-cyan-400">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <p className="text-gray-200">{objective}</p>
                </div>
              ))}
            </div>
            {relatedTutorials.length > 0 && (
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-200 mb-3 text-center">Recursos Recomendados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {relatedTutorials.map(tut => (
                      <div key={tut.id} onClick={() => onViewTutorial(tut)} className="flex items-center p-2 bg-black/30 rounded-md cursor-pointer hover:bg-black/50 transition-colors">
                          <VideoIcon />
                          <span className="text-sm font-medium text-gray-300">{tut.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
            )}
            <button onClick={onContinue} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
              🚀 Comenzar Desafío
            </button>
          </div>
        ) : (
          <div className={`${animationClass} transition-all duration-500`}>
            <div className="text-center mb-6 min-h-[150px] flex flex-col justify-center">
              <div className="text-5xl mb-4">{currentSectionData.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{currentSectionData.title}</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">{currentSectionData.content}</p>
            </div>
            <div className="flex justify-center space-x-2 mb-6">
              {infographicData.sections.map((_, index) => (
                <div key={index} className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSection ? 'bg-cyan-400' : 'bg-white/30'}`} />
              ))}
            </div>
            <div className="flex justify-between items-center">
              <button onClick={() => { if (currentSection > 0) setCurrentSection(p => p - 1) }} disabled={currentSection === 0} className="px-5 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50">Anterior</button>
              <button onClick={() => { if (currentSection < infographicData.sections.length - 1) setCurrentSection(p => p + 1); else setShowObjectives(true); }} className="px-5 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                {currentSection === infographicData.sections.length - 1 ? 'Ver Objetivos' : 'Siguiente'}
              </button>
            </div>
          </div>
        )}
      </div>
      <HelpButton onClick={onOpenHelp} />
    </div>
  );
};

export default ModuleIntro;