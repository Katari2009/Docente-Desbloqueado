import React, { useState, useEffect } from 'react';
import ProfileSetup from './components/ProfileSetup';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import { useUserProfile } from './hooks/useUserProfile';
import type { UserProfile, Module } from './types';
import { MODULES } from './constants';
import ModuleIntro from './components/ModuleIntro';
import RubricFeedback from './components/RubricFeedback';
import FinalSummary from './components/FinalSummary';

type AppView = 'profileSetup' | 'dashboard' | 'moduleIntro' | 'quiz' | 'rubric' | 'finalSummary';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useUserProfile();
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [lastQuizResult, setLastQuizResult] = useState<{ score: number; total: number } | null>(null);

   useEffect(() => {
    if (!userProfile) {
      setCurrentView('profileSetup');
    } else {
      setCurrentView('dashboard');
    }
  }, [userProfile]);


  const handleProfileCreate = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentView('dashboard');
  };
  
  const handleStartModule = (module: Module) => {
    setActiveModule(module);
    setCurrentView('moduleIntro');
  };

  const handleContinueToQuiz = () => {
    setCurrentView('quiz');
  };
  
  const handleResetProfile = () => {
    console.log('User profile has been reset.');
    setUserProfile(null);
  };

  const handleQuizComplete = (score: number) => {
    if (userProfile && activeModule) {
      const newProgress = { ...userProfile.progress, [activeModule.id]: 'completed' as const };
      
      const currentModuleIndex = MODULES.findIndex(m => m.id === activeModule.id);
      const nextModule = MODULES[currentModuleIndex + 1];

      if (nextModule && newProgress[nextModule.id] === 'locked') {
        newProgress[nextModule.id] = 'available';
      }
      
      const newScores = { ...(userProfile.quizScores || {}), [activeModule.id]: score };
      setUserProfile({ ...userProfile, progress: newProgress, quizScores: newScores });

      const allModulesCompleted = MODULES.every(m => newProgress[m.id] === 'completed');
      if (allModulesCompleted) {
          setCurrentView('finalSummary');
      }
    }
  };
  
  const handleShowRubric = (score: number, total: number) => {
      setLastQuizResult({ score, total });
      setCurrentView('rubric');
  }
  
  const handleFinishModule = () => {
      setActiveModule(null);
      setLastQuizResult(null);
      setCurrentView('dashboard');
  }

  // Lógica de renderizado original
  if (!userProfile) {
    return <ProfileSetup onProfileCreate={handleProfileCreate} />;
  }

  switch(currentView) {
      case 'dashboard':
          return <Dashboard userProfile={userProfile} onStartModule={handleStartModule} onResetProfile={handleResetProfile} />;
      case 'moduleIntro':
          // A non-null assertion is safe here because this view is only set when a module is active.
          return <ModuleIntro moduleId={activeModule!.id} onContinue={handleContinueToQuiz} onViewTutorial={() => {}} onOpenHelp={() => {}} />;
      case 'quiz':
          return <QuizView module={activeModule!} onComplete={handleQuizComplete} onShowRubric={handleShowRubric} />;
      case 'rubric':
          return <RubricFeedback module={activeModule!} score={lastQuizResult!.score} totalQuestions={lastQuizResult!.total} onFinish={handleFinishModule} />;
      case 'finalSummary':
          return <FinalSummary />;
      case 'profileSetup':
          return <ProfileSetup onProfileCreate={handleProfileCreate} />;
      default:
        return <Dashboard userProfile={userProfile} onStartModule={handleStartModule} onResetProfile={handleResetProfile} />;
  }
};

export default App;