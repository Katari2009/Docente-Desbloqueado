import type { Module } from './types';

export const AVATARS = [
  'https://api.dicebear.com/8.x/bottts/svg?seed=Casper',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Max',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Misty',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Leo',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Sophie',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Bandit',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Gizmo',
  'https://api.dicebear.com/8.x/bottts/svg?seed=Coco',
];

export const MODULES: Module[] = [
  {
    id: 'module1',
    title: 'El Reto de la Atención',
    description: 'Comprende los desafíos de la atención en el aula moderna.',
    content: `El Reto de la Atención. Clases expositivas vs. Mentes dispersas. El desafío es lograr que los alumnos participen y se involucren, reforzando el conocimiento de forma efectiva. Hoy competimos con dispositivos que capturan su atención. Por eso, necesitamos transformar la forma de enseñar.`,
  },
  {
    id: 'module2',
    title: 'La Gamificación: Aprender Jugando',
    description: 'Descubre cómo las mecánicas de juego transforman el aprendizaje.',
    content: `La Gamificación: Aprender Jugando. Se trata de usar mecánicas de juego para transformar el aprendizaje. Los tres pilares son: MOTIVACIÓN, con desafíos que enganchan y mantienen el interés; RETENCIÓN, ya que el conocimiento se fija mejor asociado a experiencias lúdicas; y PARTICIPACIÓN, porque todos quieren ser parte del juego y contribuir.`,
  },
  {
    id: 'module3',
    title: 'Herramienta Clave: Educaplay',
    description: 'Conoce Educaplay, una plataforma simple y poderosa.',
    content: `Nuestra Herramienta de Hoy: Educaplay. Es una plataforma simple y poderosa que permite crear actividades interactivas en minutos, sin conocimientos técnicos. Es gratuita y fácil de usar, con más de 15 tipos de actividades. Es compatible con todos los dispositivos e integrable con plataformas educativas.`,
  },
  {
    id: 'module4',
    title: 'Taller Práctico: Tu Primera Actividad',
    description: 'Aprende los pasos para crear tu primer juego en 20 minutos.',
    content: `Taller Práctico: Tu Primera Actividad en 20 Minutos. Pasos: 1. Regístrate en educaplay.com. 2. Elige la actividad: Sopa de Letras. 3. Añade 5-7 conceptos clave de tu materia. 4. Completa el "termómetro" de calidad. 5. ¡Publica tu actividad! Puedes elegir temas como conceptos clave, vocabulario técnico, personajes históricos, etc.`,
  },
  {
    id: 'module5',
    title: 'Integración y Próximos Pasos',
    description: 'Lleva tus creaciones a tu aula virtual: Classroom, Teams y Moodle.',
    content: `Integración con plataformas educativas. Las actividades de Educaplay se integran fácilmente. En Google Classroom, se usa el botón "Compartir" o el código de incrustación. En Microsoft Teams, es compatible con la pestaña "Asignaciones" y enlaces. En Moodle, se integra mediante código HTML o como recurso externo.`,
  },
];