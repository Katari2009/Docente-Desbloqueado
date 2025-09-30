import type { Tutorial } from '../types';

export const TUTORIALS: Tutorial[] = [
  {
    id: 'tut001',
    title: 'Explorando la Interfaz de Educaplay',
    description: 'Un recorrido en video por el panel principal, la creación de actividades y las opciones de tu perfil.',
    type: 'video',
    category: 'Principiante',
    duration: '5:10',
    url: 'https://www.youtube.com/embed/videoseries?list=PL_m-8-4-j2F9g8_xZ4y_xZ4y_xZ4y_xZ4', // Placeholder URL
    relatedModuleIds: ['module1', 'module3'],
  },
  {
    id: 'tut002',
    title: 'Audio-guía: ¿Qué Actividad Elegir?',
    description: 'Escucha una breve guía para decidir qué tipo de actividad se adapta mejor a tu objetivo pedagógico.',
    type: 'audio',
    category: 'Principiante',
    duration: '4:30',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder URL
    relatedModuleIds: ['module2'],
  },
  {
    id: 'tut003',
    title: 'Creando tu Primer Crucigrama Paso a Paso',
    description: 'Sigue este video-tutorial y crea tu primer crucigrama interactivo en menos de 10 minutos.',
    type: 'video',
    category: 'Intermedio',
    duration: '8:45',
    url: 'https://www.youtube.com/embed/videoseries?list=PL_m-8-4-j2F9g8_xZ4y_xZ4y_xZ4y_xZ4', // Placeholder URL
    relatedModuleIds: ['module3', 'module2'],
  },
  {
    id: 'tut004',
    title: 'Integrando tu Juego en Google Classroom',
    description: 'Un tutorial práctico para compartir tus actividades de Educaplay directamente en tus clases de Google Classroom.',
    type: 'video',
    category: 'Intermedio',
    duration: '3:55',
    url: 'https://www.youtube.com/embed/videoseries?list=PL_m-8-4-j2F9g8_xZ4y_xZ4y_xZ4y_xZ4', // Placeholder URL
    relatedModuleIds: ['module4', 'module5'],
  },
  {
    id: 'tut005',
    title: 'Audio-guía: Analizando Informes de Resultados',
    description: 'Aprende a interpretar las estadísticas y los informes de resultados para medir el progreso de tus estudiantes.',
    type: 'audio',
    category: 'Avanzado',
    duration: '6:15',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Placeholder URL
    relatedModuleIds: ['module4'],
  },
  {
    id: 'tut006',
    title: 'Demo: Usando Códigos QR en el Aula',
    description: 'Explora una demo interactiva sobre cómo usar los códigos QR de Educaplay para un acceso rápido y dinámico.',
    type: 'interactive',
    category: 'Avanzado',
    duration: '7:00',
    url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_es.html', // Placeholder URL
    relatedModuleIds: ['module4', 'module5'],
  },
];
