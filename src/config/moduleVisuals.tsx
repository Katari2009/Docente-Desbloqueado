import React from 'react';

const AIIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-blue-500">
    <path fill="currentColor" d="M32,4A28,28,0,1,0,60,32,28,28,0,0,0,32,4Zm0,52A24,24,0,1,1,56,32,24,24,0,0,1,32,56Z" />
    <path fill="currentColor" d="M32 18c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    <circle fill="currentColor" cx="26" cy="30" r="3" />
    <circle fill="currentColor" cx="38" cy="30" r="3" />
  </svg>
);

const TechIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-green-500">
    <rect x="8" y="16" width="48" height="32" rx="4" fill="currentColor" opacity="0.8"/>
    <rect x="12" y="20" width="40" height="24" rx="2" fill="white"/>
    <path d="M20 28h24v2H20zM20 34h16v2H20z" fill="currentColor" />
  </svg>
);

const PedagogyIcon = () => (
    <svg viewBox="0 0 64 64" className="w-12 h-12 text-yellow-500">
        <path fill="currentColor" d="M32 4a20 20 0 00-20 20c0 11 9 24 20 24s20-13 20-24A20 20 0 0032 4zm0 6a14 14 0 11-14 14 14 14 0 0114-14z"/>
        <path fill="currentColor" d="M32 12a12 12 0 1012 12A12 12 0 0032 12zm0 18a6 6 0 116-6 6 6 0 01-6 6z"/>
    </svg>
);

const WorkshopIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-purple-500">
    <path fill="currentColor" d="M54 18l-8-8h-8L22 2l-8 8H4v40h56V18h-6zM24 6l4-4 4 4h-8zm24 12H16v-4h32v4zM8 54V22h48v32H8z" />
    <rect x="16" y="30" width="8" height="8" fill="currentColor" opacity="0.6"/>
    <rect x="28" y="30" width="8" height="8" fill="currentColor" opacity="0.6"/>
    <rect x="40" y="30" width="8" height="8" fill="currentColor" opacity="0.6"/>
  </svg>
);

const IntegrationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-cyan-500">
    <circle cx="32" cy="32" r="6" fill="currentColor" />
    <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="48" cy="16" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="16" cy="48" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="48" cy="48" r="4" fill="currentColor" opacity="0.7" />
    <path d="M20 20L26 26M38 26L44 20M26 38L20 44M38 38L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const moduleVisuals = {
  module1: { Icon: AIIcon, gradient: 'from-blue-500 to-indigo-600' },
  module2: { Icon: TechIcon, gradient: 'from-green-500 to-emerald-600' },
  module3: { Icon: PedagogyIcon, gradient: 'from-yellow-500 to-orange-600' },
  module4: { Icon: WorkshopIcon, gradient: 'from-purple-500 to-pink-600' },
  module5: { Icon: IntegrationIcon, gradient: 'from-cyan-500 to-blue-600' },
};

export const moduleInfographics = {
  module1: {
    title: "Introducción a la IA en Educación",
    subtitle: "Fundamentos y conceptos clave",
    sections: [
      { icon: "🧠", title: "¿Qué es la IA?", content: "Sistemas que simulan la inteligencia humana para resolver problemas y aprender." },
      { icon: "📚", title: "IA en el Aula", content: "Personalización del aprendizaje, evaluación automática y asistencia pedagógica." },
      { icon: "🎯", title: "Beneficios Clave", content: "Mejora la eficiencia, personaliza la experiencia y proporciona insights valiosos." },
    ],
    objectives: [
      "Comprender los conceptos fundamentales de la IA.",
      "Identificar aplicaciones educativas de la IA.",
      "Reconocer beneficios y desafíos de la implementación."
    ]
  },
  module2: {
    title: "Herramientas de IA para Docentes",
    subtitle: "Tecnologías prácticas para el aula",
    sections: [
      { icon: "💬", title: "Chatbots Educativos", content: "Asistentes como ChatGPT o Gemini para crear contenido y responder preguntas." },
      { icon: "🎨", title: "Generación de Contenido", content: "Herramientas como DALL-E para la creación de imágenes y materiales visuales." },
      { icon: "📊", title: "Análisis de Datos", content: "Plataformas que analizan el rendimiento estudiantil y sugieren mejoras." },
    ],
    objectives: [
      "Explorar herramientas específicas de IA para educación.",
      "Aprender criterios de selección de tecnologías.",
      "Desarrollar habilidades prácticas de uso."
    ]
  },
  module3: {
    title: "Integración Pedagógica de la IA",
    subtitle: "Metodologías y estrategias didácticas",
    sections: [
      { icon: "🎯", title: "Aprendizaje Personalizado", content: "Adaptar el ritmo y estilo de aprendizaje a cada estudiante usando IA." },
      { icon: "🔄", title: "Evaluación Continua", content: "Retroalimentación inmediata y seguimiento del progreso en tiempo real." },
      { icon: "👥", title: "Colaboración Aumentada", content: "IA como facilitador de trabajo en equipo y proyectos colaborativos." },
    ],
    objectives: [
      "Diseñar estrategias pedagógicas con IA.",
      "Implementar evaluación formativa automatizada.",
      "Crear experiencias de aprendizaje personalizadas."
    ]
  },
  module4: {
    title: "Taller Práctico: Creando con IA",
    subtitle: "Desarrollo de recursos educativos",
    sections: [
      { icon: "📝", title: "Planificación de Clases", content: "Generar objetivos, actividades y rúbricas con asistencia de IA." },
      { icon: "🎮", title: "Actividades Interactivas", content: "Crear quizzes, juegos y simulaciones usando herramientas de IA." },
      { icon: "📖", title: "Materiales Didácticos", content: "Producir textos, infografías y recursos multimedia personalizados." },
    ],
    objectives: [
      "Crear una planificación de clase completa usando IA.",
      "Desarrollar actividades interactivas y rúbricas.",
      "Dominar la formulación de prompts efectivos."
    ]
  },
  module5: {
    title: "Implementación y Futuro de la IA",
    subtitle: "Estrategias de adopción y tendencias",
    sections: [
      { icon: "🚀", title: "Plan de Implementación", content: "Estrategias paso a paso para adoptar IA en el centro educativo." },
      { icon: "⚖️", title: "Ética y Responsabilidad", content: "Consideraciones éticas, sesgos algorítmicos y uso responsable." },
      { icon: "🔮", title: "Tendencias Futuras", content: "Realidad virtual, metaverso educativo y tutores de IA personalizados." },
    ],
    objectives: [
      "Desarrollar un plan de implementación institucional.",
      "Prepararse para futuras innovaciones en IA educativa.",
      "Establecer marcos éticos para el uso de IA."
    ]
  }
};

export const infographicAnimations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleIn: 'animate-scale-in',
  bounceIn: 'animate-bounce-in'
};