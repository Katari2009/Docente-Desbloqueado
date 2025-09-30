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
    title: '¿Qué es Educaplay y para qué sirve?',
    description: 'Conoce los fundamentos de Educaplay, sus objetivos y características principales para gamificar el aula.',
    content: 'Educaplay es una plataforma web gratuita que revoluciona la educación mediante la gamificación. Permite crear actividades educativas interactivas sin necesidad de conocimientos técnicos. Los objetivos del taller son conocer la plataforma, aprender a crear actividades y a implementar estrategias de gamificación. Sus características principales son: más de 15 tipos de actividades, interfaz intuitiva, compatibilidad multiplataforma, opciones de personalización visual y sistema de puntuación integrado.'
  },
  {
    id: 'module2',
    title: 'Tipos de Actividades en Educaplay',
    description: 'Explora la variedad de juegos educativos que puedes crear, desde crucigramas hasta mapas interactivos.',
    content: 'Educaplay ofrece una amplia gama de actividades. Ejemplos reales incluyen el Crucigrama Científico para reforzar conceptos, la Sopa de Letras Geográfica para mejorar el conocimiento y la concentración, y el Mapa Interactivo Mundial para el aprendizaje visual y espacial. Las actividades se clasifican en tres grandes grupos: Actividades de Texto (Crucigrama, Sopa de letras, Completar texto, Dictado interactivo), Actividades Interactivas (Test y cuestionarios, Relacionar columnas, Ordenar elementos, Diálogos dinámicos) y Actividades Multimedia (Videoquiz interactivo, Presentaciones dinámicas, Mapas interactivos, Colecciones temáticas).'
  },
  {
    id: 'module3',
    title: 'Creando tu Primera Actividad Paso a Paso',
    description: 'Aprende el proceso práctico para diseñar y configurar tu propia actividad gamificada en Educaplay.',
    content: 'El proceso de creación en Educaplay es práctico y guiado. Los pasos fundamentales demostrados en el taller son: 1. Acceso a la Plataforma, explorando la interfaz y opciones. 2. Creación Paso a Paso, desarrollando una actividad desde cero con configuración detallada. 3. Personalización Visual, ajustando colores, fuentes y diseño. 4. Vista Previa y Prueba, para verificar el funcionamiento y hacer ajustes. Una actividad práctica guiada consiste en formar equipos, acceder a Educaplay, crear una Sopa de Letras temática y configurarla con un límite de tiempo.'
  },
  {
    id: 'module4',
    title: 'Trabajo Colaborativo y Seguimiento',
    description: 'Descubre cómo compartir tus creaciones y monitorear el progreso de tus estudiantes.',
    content: 'Educaplay facilita compartir y monitorear el trabajo de los estudiantes. Las opciones para compartir son variadas: Enlace directo, Código QR para móviles, Integración web mediante iframe y Exportar en formato SCORM para sistemas LMS. Además, permite la Gestión de Grupos para crear colecciones temáticas y asignar actividades a diferentes grupos. El Seguimiento de Resultados es clave, ofreciendo estadísticas detalladas de participación, análisis de rendimiento por pregunta, exportación de datos a Excel e informes de progreso individual.'
  },
  {
    id: 'module5',
    title: 'Ideas para Gamificar y Próximos Pasos',
    description: 'Inspírate con estrategias para aplicar la gamificación y encuentra recursos para seguir aprendiendo.',
    content: 'Se pueden aplicar estrategias de gamificación en diferentes momentos de la clase. Para el Inicio de Clase, un quiz rápido de 3-5 preguntas activa conocimientos previos. Durante la Clase, pausas activas con crucigramas o competencias por equipos mantienen la atención. Para el Cierre de Clase, un test de comprensión o sopas de letras consolidan el aprendizaje. Un tip práctico es usar códigos QR para acceso rápido. Los próximos pasos incluyen crear una cuenta gratuita, explorar actividades existentes, planificar la primera actividad y unirse a la comunidad a través de recursos como la web oficial, el canal de YouTube y el blog.'
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
