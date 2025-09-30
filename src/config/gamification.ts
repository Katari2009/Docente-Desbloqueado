import type { Badge } from '../types';
import React from 'react';

// FIX: Define Icon components for badges
// @FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const FirstStepIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { viewBox: "0 0 64 64", className: className },
        React.createElement('path', { fill: "currentColor", d: "M52 52H12V28h8v16h24V28h8v24zM32 4L16 20h12v12h8V20h12L32 4z" })
    )
);
// @FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const PerfectScoreIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { viewBox: "0 0 64 64", className: className },
        React.createElement('path', { fill: "currentColor", d: "M32 4a28 28 0 100 56 28 28 0 000-56zm-4 42l-10-10 2.82-2.82L28 38.36l15.18-15.18L46 26 28 46z" })
    )
);
// @FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const ExplorerIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { viewBox: "0 0 64 64", className: className },
        React.createElement('path', { fill: "currentColor", d: "M32 4a28 28 0 1028 28A28 28 0 0032 4zm0 52a24 24 0 1124-24 24 24 0 01-24 24z" }),
        React.createElement('path', { fill: "currentColor", d: "M32 14l-6 6h4v12h4V20h4l-6-6zM32 50l6-6h-4V32h-4v12h-4l6 6z" })
    )
);


export const BADGES: Record<string, Badge> = {
  first_module_completed: {
    id: 'first_module_completed',
    name: 'Primer Módulo',
    description: 'Completaste tu primer desafío.',
    Icon: FirstStepIcon,
  },
  perfect_score: {
    id: 'perfect_score',
    name: 'Puntaje Perfecto',
    description: 'Obtuviste 100% en un quiz.',
    Icon: PerfectScoreIcon,
  },
  halfway_there: {
    id: 'halfway_there',
    name: 'Explorador',
    description: 'Completaste la mitad de los módulos.',
    Icon: ExplorerIcon
  }
};