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
  module3: { Icon: WorkshopIcon, gradient: 'from-purple-500 to-pink-600' },
  module4: { Icon: PedagogyIcon, gradient: 'from-yellow-500 to-orange-600' },
  module5: { Icon: IntegrationIcon, gradient: 'from-cyan-500 to-blue-600' },
};

export const moduleInfographics = {
  module1: {
    title: "Gamificación y Educaplay",
    subtitle: "La Combinación Ganadora",
    sections: [
      { icon: "🎮", title: "¿Qué es la Gamificación?", content: "Es una estrategia de aprendizaje que usa mecánicas de juego para motivar y enganchar a los estudiantes." },
      { icon: "🚀", title: "Presentando Educaplay", content: "Una plataforma web gratuita y fácil de usar para crear actividades interactivas sin necesidad de programar." },
      { icon: "✨", title: "Características Clave", content: "Más de 15 tipos de actividades, interfaz intuitiva, compatible con todos los dispositivos y sistema de puntuación integrado." },
    ],
    objectives: [
      "Entender el concepto de gamificación en la educación.",
      "Conocer las características principales de la plataforma Educaplay.",
      "Identificar los beneficios de usar Educaplay para gamificar el aula."
    ]
  },
  module2: {
    title: "Un Universo de Actividades",
    subtitle: "Tipos de Juegos Educativos",
    sections: [
      { icon: "✍️", title: "Actividades de Texto", content: "Crea crucigramas, sopas de letras o actividades para completar textos y reforzar vocabulario." },
      { icon: "↔️", title: "Actividades Interactivas", content: "Diseña tests, cuestionarios, actividades de relacionar columnas y ordenar elementos para evaluar conocimientos." },
      { icon: "🎬", title: "Actividades Multimedia", content: "Utiliza videoquizzes, mapas interactivos y presentaciones dinámicas para un aprendizaje más visual." },
    ],
    objectives: [
      "Distinguir los diferentes tipos de actividades disponibles en Educaplay.",
      "Identificar ejemplos de juegos para distintas necesidades pedagógicas.",
      "Comprender la clasificación de actividades: Texto, Interactivas y Multimedia."
    ]
  },
  module3: {
    title: "Creando tu Primera Actividad",
    subtitle: "Taller Práctico Paso a Paso",
    sections: [
      { icon: "1️⃣", title: "Acceso y Exploración", content: "Navega por la interfaz principal de Educaplay y explora las opciones disponibles para empezar a crear." },
      { icon: "2️⃣", title: "Creación Guiada", content: "Desarrolla una actividad completa desde cero, configurando cada elemento de manera detallada." },
      { icon: "3️⃣", title: "Personalización y Prueba", content: "Ajusta colores y diseño para una experiencia visual atractiva y prueba la actividad antes de publicarla." },
    ],
    objectives: [
      "Conocer los pasos clave para crear una actividad en la plataforma.",
      "Aprender a personalizar el aspecto visual de un juego educativo.",
      "Entender la importancia de la vista previa para realizar ajustes finales."
    ]
  },
  module4: {
    title: "Comparte y Mide Resultados",
    subtitle: "Potenciando el Aprendizaje",
    sections: [
      { icon: "🔗", title: "Opciones para Compartir", content: "Usa enlaces directos, códigos QR, iframes para tu web o exporta en formato SCORM para tu LMS." },
      { icon: "👥", title: "Gestión de Grupos", content: "Crea colecciones temáticas y asigna actividades específicas a diferentes grupos de estudiantes." },
      { icon: "📈", title: "Seguimiento de Resultados", content: "Analiza estadísticas de participación, rendimiento por pregunta y exporta datos a Excel." },
    ],
    objectives: [
      "Dominar las diferentes formas de compartir una actividad de Educaplay.",
      "Comprender cómo gestionar grupos de estudiantes en la plataforma.",
      "Utilizar las herramientas de seguimiento para analizar el rendimiento."
    ]
  },
  module5: {
    title: "Estrategias para Gamificar",
    subtitle: "Integra Educaplay en tus Clases",
    sections: [
      { icon: "🌅", title: "Inicio de Clase", content: "Activa conocimientos previos y genera expectación con un quiz rápido de repaso." },
      { icon: "☀️", title: "Durante la Clase", content: "Mantén la atención con pausas activas, usando crucigramas temáticos o competencias por equipos." },
      { icon: "🌙", title: "Cierre de Clase", content: "Consolida el aprendizaje con un test gamificado o una sopa de letras sobre los conceptos clave." },
    ],
    objectives: [
      "Aplicar estrategias de gamificación en los tres momentos de la clase.",
      "Reconocer consejos prácticos como el uso de códigos QR para acceso rápido.",
      "Definir los próximos pasos para empezar a gamificar con Educaplay."
    ]
  }
};

export const infographicAnimations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleIn: 'animate-scale-in',
  bounceIn: 'animate-bounce-in'
};