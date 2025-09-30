import type { Tutorial } from '../types';

export const TUTORIALS: Tutorial[] = [
  {
    id: 'tut001',
    title: 'Creando Rúbricas con IA (ChatGPT)',
    description: 'Aprende a usar ChatGPT para generar rúbricas de evaluación detalladas y personalizadas en minutos.',
    type: 'video',
    category: 'Principiante',
    duration: '9:20',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
    relatedModuleIds: ['module1', 'module4'],
  },
  {
    id: 'tut002',
    title: 'Pedagogía y IA (Audio)',
    description: 'Escucha cómo la IA puede potenciar metodologías activas y el aprendizaje personalizado en el aula.',
    type: 'audio',
    category: 'Principiante',
    duration: '6:45',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder URL
    relatedModuleIds: ['module3'],
  },
  {
    id: 'tut003',
    title: 'Generando Imágenes para Clases con DALL-E',
    description: 'Descubre cómo crear recursos visuales impactantes para tus clases, desde personajes históricos hasta diagramas científicos.',
    type: 'video',
    category: 'Intermedio',
    duration: '7:30',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
    relatedModuleIds: ['module2'],
  },
  {
    id: 'tut004',
    title: 'Integrando IA en Google Classroom',
    description: 'Un tutorial práctico para conectar herramientas de IA con tu flujo de trabajo en Google Classroom.',
    type: 'video',
    category: 'Intermedio',
    duration: '5:15',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
    relatedModuleIds: ['module5'],
  },
  {
    id: 'tut005',
    title: 'Ética y Sesgos en la IA Educativa (Audio)',
    description: 'Una discusión importante sobre las consideraciones éticas al usar IA, incluyendo la privacidad y los sesgos algorítmicos.',
    type: 'audio',
    category: 'Avanzado',
    duration: '10:05',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Placeholder URL
    relatedModuleIds: ['module5'],
  },
  {
    id: 'tut006',
    title: 'Demo Interactiva: Prompt Engineering',
    description: 'Experimenta con una simulación interactiva para aprender a construir prompts efectivos y obtener los mejores resultados de la IA.',
    type: 'interactive',
    category: 'Avanzado',
    duration: '15:00',
    url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_es.html', // Placeholder URL
    relatedModuleIds: ['module4'],
  },
];