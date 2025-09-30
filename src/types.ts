import type { FC } from 'react';

export type ModuleStatus = 'locked' | 'available' | 'completed';

export interface UserProfile {
  name: string;
  avatarId: number;
  progress: Record<string, ModuleStatus>;
  level: number;
  experience: number;
  skillPoints: number;
  earnedBadges: string[];
  quizScores: Record<string, number>;
  dailyMission?: {
    id: string;
    completed: boolean;
  };
  favoritedTutorials: string[];
  viewedTutorials: Record<string, 'started' | 'completed'>;
  unlockedResources: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  feedback?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  Icon: FC<{ className?: string }>;
}

export interface RubricFeedbackData {
  conceptualUnderstanding: { level: string; feedback: string };
  practicalApplication: { level: string; feedback: string };
  implementationReadiness: { level: string; feedback: string };
  summary: {
    strengths: string;
    areasForImprovement: string;
    nextSteps: string;
  };
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'audio' | 'interactive';
  category: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
  url: string;
  relatedModuleIds: string[];
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number; // skill points
}

export interface RewardResource {
  id: string;
  title: string;
  description: string;
  cost: number; // skill points
}
