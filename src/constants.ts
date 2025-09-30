
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
    title: 'Gamificación y Educaplay: La Combinación Ganadora',
    description: 'Descubre qué es la gamificación y cómo Educaplay la convierte en una poderosa herramienta para el aula.',
    content: `Este taller introduce la gamificación como una estrategia para transformar la enseñanza con actividades interactivas que motivan y enganchan a los estudiantes. El objetivo es conocer la plataforma Educaplay, aprender a crear actividades y a implementar estas estrategias en el aula. Educaplay es una plataforma web gratuita que revoluciona la educación mediante la gamificación, permitiendo crear actividades interactivas sin conocimientos técnicos. Sus características principales son: más de 15 tipos de actividades, interfaz intuitiva, compatibilidad multiplataforma y un sistema de puntuación integrado.`
  },
  {
    id: 'module2',
    title: 'Un Universo de Actividades a tu Alcance',
    description: 'Conoce la variedad de juegos educativos que puedes crear, desde sopas de letras hasta mapas interactivos.',
    content: `Educaplay ofrece una amplia gama de actividades para dinamizar el aprendizaje. Entre los ejemplos se encuentran el Crucigrama Científico para reforzar conceptos, la Sopa de Letras Geográfica para mejorar el conocimiento y la concentración, y el Mapa Interactivo Mundial para desarrollar el aprendizaje visual y espacial. Las actividades se clasifican en tres grandes grupos: Actividades de Texto (Crucigrama, Sopa de letras, Completar texto), Actividades Interactivas (Test, Relacionar columnas, Ordenar elementos) y Actividades Multimedia (Videoquiz interactivo, Mapas interactivos, Presentaciones dinámicas).`
  },
  {
    id: 'module3',
    title: 'Taller Práctico: Creando tu Primera Actividad',
    description: 'Aprende paso a paso a crear, configurar y personalizar tu primera actividad interactiva en Educaplay.',
    content: `La creación de una actividad en Educaplay es un proceso sencillo que se puede resumir en cuatro pasos clave. Primero, el Acceso a la Plataforma, donde se explora la interfaz principal. Segundo, la Creación Paso a Paso, donde se desarrolla una actividad desde cero, como un crucigrama o una sopa de letras sobre "Animales". Tercero, la Personalización Visual, donde se ajustan colores, fuentes y diseño. Finalmente, la Vista Previa y Prueba, para verificar el funcionamiento y realizar los ajustes necesarios antes de publicarla. Se puede establecer un tiempo límite para completar la actividad.`
  },
  {
    id: 'module4',
    title: 'Comparte, Mide y Potencia el Aprendizaje',
    description: 'Domina las opciones para compartir tus juegos y aprende a utilizar las herramientas de seguimiento de resultados.',
    content: `Una vez creada una actividad, Educaplay facilita compartirla y hacer un seguimiento del progreso. Las Opciones de Compartir incluyen: Enlace directo para acceso inmediato, Código QR para dispositivos móviles, Integración web mediante iframe y Exportación SCORM para sistemas LMS. Además, la plataforma permite la Gestión de Grupos para asignar actividades específicas. El Seguimiento de Resultados es fundamental y ofrece estadísticas detalladas de participación, análisis de rendimiento por pregunta, exportación de datos a Excel e informes de progreso individual.`
  },
  {
    id: 'module5',
    title: 'Estrategias para Gamificar tus Clases',
    description: 'Obtén ideas prácticas y un plan de acción para integrar la gamificación en el inicio, desarrollo y cierre de tus clases.',
    content: `Integrar Educaplay en la rutina de clase potencia la participación. Se pueden aplicar estrategias en diferentes momentos: al Inicio de Clase, con un quiz rápido de repaso para activar conocimientos previos; Durante la Clase, usando crucigramas o competencias por equipos como pausas activas; y al Cierre de Clase, con un test gamificado para consolidar el aprendizaje. Un consejo práctico es usar códigos QR para el acceso rápido desde dispositivos móviles. Los próximos pasos incluyen crear una cuenta gratuita, explorar actividades existentes y planificar la primera actividad para unirse a la comunidad de docentes que gamifican.`
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
