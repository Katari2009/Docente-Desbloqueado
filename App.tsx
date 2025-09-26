import React, { useState } from 'react';
import ProfileSetup from './components/ProfileSetup';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import { useUserProfile } from './hooks/useUserProfile';
import type { UserProfile, Module } from './types';
import { MODULES } from './constants';

type AppView = 'profileSetup' | 'dashboard' | 'quiz';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useUserProfile();
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  const handleProfileCreate = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const handleStartQuiz = (module: Module) => {
    setActiveModule(module);
    setCurrentView('quiz');
  };

  const handleQuizComplete = () => {
    if (userProfile && activeModule) {
      const newProgress = { ...userProfile.progress, [activeModule.id]: 'completed' as const };
      
      const currentModuleIndex = MODULES.findIndex(m => m.id === activeModule.id);
      const nextModule = MODULES[currentModuleIndex + 1];

      if (nextModule && newProgress[nextModule.id] === 'locked') {
        newProgress[nextModule.id] = 'available';
      }

      setUserProfile({ ...userProfile, progress: newProgress });
    }
    setActiveModule(null);
    setCurrentView('dashboard');
  };

  if (!userProfile) {
    return <ProfileSetup onProfileCreate={handleProfileCreate} />;
  }

  if (currentView === 'quiz' && activeModule) {
    return <QuizView module={activeModule} onComplete={handleQuizComplete} />;
  }
  
  return <Dashboard userProfile={userProfile} onStartQuiz={handleStartQuiz} />;
};

export default App;