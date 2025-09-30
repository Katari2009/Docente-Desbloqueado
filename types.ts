
export type ModuleStatus = 'locked' | 'available' | 'completed';

export interface UserProfile {
  name: string;
  avatarId: number;
  progress: Record<string, ModuleStatus>;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
}
