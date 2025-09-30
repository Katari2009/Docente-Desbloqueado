import type { Mission, RewardResource } from '../types';

export const MISSIONS: Mission[] = [
    {
        id: 'daily_login',
        title: 'Inicio de Sesión Diario',
        description: 'Inicia sesión para reclamar tu recompensa.',
        reward: 10,
    },
    {
        id: 'first_module',
        title: 'Primeros Pasos',
        description: 'Completa tu primer módulo de aprendizaje.',
        reward: 50,
    },
    {
        id: 'perfect_quiz',
        title: 'Maestría Inicial',
        description: 'Consigue una puntuación perfecta en cualquier quiz.',
        reward: 75,
    },
];

export const REWARD_RESOURCES: RewardResource[] = [
    {
        id: 'resource1',
        title: 'Guía Avanzada de Prompts para Educación',
        description: 'Desbloquea una guía para crear prompts más efectivos.',
        cost: 100,
    },
    {
        id: 'resource2',
        title: 'Plantillas de Actividades con IA',
        description: 'Accede a plantillas de actividades listas para usar en clase.',
        cost: 150,
    },
    {
        id: 'resource3',
        title: 'Reporte de Progreso Personalizado',
        description: 'Genera un reporte en PDF con tus logros y áreas de mejora.',
        cost: 300,
    },
];