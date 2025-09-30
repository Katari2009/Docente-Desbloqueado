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
    title: 'Introducción a la IA en Educación',
    description: 'Comprende los conceptos fundamentales de la IA y su impacto en el aula.',
    content: 'Este módulo explora qué es la Inteligencia Artificial, diferenciando entre IA generativa y otros tipos. Analiza cómo estas tecnologías pueden personalizar el aprendizaje, automatizar tareas administrativas y ofrecer nuevas herramientas pedagógicas para transformar la experiencia educativa y preparar a los estudiantes para el futuro.'
  },
  {
    id: 'module2',
    title: 'Herramientas de IA para Docentes',
    description: 'Descubre un abanico de herramientas prácticas de IA para enriquecer tus clases.',
    content: 'Desde chatbots educativos como ChatGPT o Gemini hasta generadores de imágenes como DALL-E, este módulo presenta un catálogo de herramientas de IA. Se enfoca en aplicaciones prácticas para crear contenido, diseñar evaluaciones, generar material visual y fomentar la creatividad, proporcionando criterios para seleccionar la tecnología adecuada para cada necesidad pedagógica.'
  },
  {
    id: 'module3',
    title: 'Integración Pedagógica de la IA',
    description: 'Aprende a diseñar estrategias didácticas que incorporen la IA de manera efectiva.',
    content: 'La tecnología es solo una parte; la pedagogía es clave. Este módulo aborda cómo integrar la IA en metodologías activas como el aprendizaje basado en proyectos o el aula invertida. Se exploran estrategias para usar la IA como un asistente que fomenta el pensamiento crítico, la colaboración y la personalización del aprendizaje a gran escala.'
  },
  {
    id: 'module4',
    title: 'Taller Práctico: Creando con IA',
    description: 'Pon en práctica tus conocimientos generando recursos educativos con IA.',
    content: '¡Manos a la obra! Este taller práctico te guía paso a paso en la creación de una planificación de clase completa asistida por IA. Aprenderás a formular prompts efectivos para generar objetivos, actividades, rúbricas de evaluación y materiales didácticos, optimizando tu tiempo y potenciando la calidad de tus recursos pedagógicos.'
  },
  {
    id: 'module5',
    title: 'Implementación y Futuro de la IA Educativa',
    description: 'Explora los desafíos éticos, las estrategias de implementación y las tendencias futuras.',
    content: 'Implementar la IA requiere una visión estratégica. Este módulo final aborda las consideraciones éticas, como el sesgo algorítmico y la privacidad de datos. Además, ofrece un plan para la adopción gradual de estas herramientas y una mirada a las tendencias futuras, como la realidad virtual y los tutores de IA personalizados, preparando a los docentes para el aula del mañana.'
  }
];

export const SUPPORT_EMAIL = 'asesor.pace@uda.cl';
export const EMAIL_SUBJECT = 'Consulta sobre la app Docente Desbloqueado';

export const moduleAnimations = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes bounceIn {
    0% { opacity: 0; transform: scale(0.3) translateY(-50px); }
    50% { opacity: 1; transform: scale(1.05) translateY(0); }
    70% { transform: scale(0.98); }
    100% { opacity: 1; transform: scale(1); }
  }
  .animate-fade-in { animation: fadeIn 0.6s ease-out; }
  .animate-slide-up { animation: slideUp 0.5s ease-out; }
  .animate-scale-in { animation: scaleIn 0.4s ease-out; }
  .animate-bounce-in { animation: bounceIn 0.8s ease-out; }
`;

export const injectModuleAnimations = () => {
  if (typeof document !== 'undefined') {
    const existingStyle = document.getElementById('module-animations');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = 'module-animations';
      style.textContent = moduleAnimations;
      document.head.appendChild(style);
    }
  }
};
