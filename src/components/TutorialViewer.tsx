import React, { useEffect } from 'react';
import type { Tutorial, UserProfile } from '../types';

interface TutorialViewerProps {
  tutorial: Tutorial;
  userProfile: UserProfile;
  onClose: () => void;
  onToggleFavorite: (tutorialId: string) => void;
  onUpdateProgress: (tutorialId: string, status: 'started' | 'completed') => void;
}

const TutorialViewer: React.FC<TutorialViewerProps> = ({
  tutorial,
  userProfile,
  onClose,
  onToggleFavorite,
  onUpdateProgress
}) => {
  const isFavorite = userProfile.favoritedTutorials.includes(tutorial.id);
  const viewStatus = userProfile.viewedTutorials[tutorial.id];

  useEffect(() => {
    // Mark tutorial as started when component mounts, if not already completed
    if (viewStatus !== 'completed') {
      onUpdateProgress(tutorial.id, 'started');
    }
  }, [tutorial.id, viewStatus, onUpdateProgress]);

  const renderMedia = () => {
    switch (tutorial.type) {
      case 'video':
      case 'interactive':
        return (
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden border border-white/10">
            <iframe
              src={tutorial.url}
              title={tutorial.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        );
      case 'audio':
        return (
          <div className="w-full bg-black/20 p-4 rounded-lg">
            <audio controls className="w-full">
              <source src={tutorial.url} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        );
      default:
        return <p className="text-red-400">Tipo de medio no soportado.</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in" role="dialog">
      <div className="w-full max-w-3xl bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 text-white transform animate-scale-in flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">{tutorial.title}</h2>
            <p className="text-gray-400 mt-1">{tutorial.description}</p>
          </div>
          <button onClick={onClose} className="text-gray-300 hover:text-white text-3xl flex-shrink-0 ml-4">&times;</button>
        </div>
        
        <div className="mb-4 flex-grow overflow-y-auto">
          {renderMedia()}
        </div>

        <div className="flex-shrink-0 flex items-center justify-between bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-4">
            <button
                onClick={() => onToggleFavorite(tutorial.id)}
                className={`flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold transition ${
                    isFavorite ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                {isFavorite ? 'Favorito' : 'Añadir a favoritos'}
            </button>
            <span className="text-sm text-gray-400">Duración: {tutorial.duration}</span>
          </div>
           <button
            onClick={() => onUpdateProgress(tutorial.id, 'completed')}
            disabled={viewStatus === 'completed'}
            className="py-2 px-4 rounded-lg font-semibold text-sm transition disabled:opacity-50
            bg-green-500/30 text-green-300 hover:bg-green-500/40 disabled:bg-green-500/40 disabled:cursor-not-allowed"
            >
             {viewStatus === 'completed' ? 'Completado' : 'Marcar como completado'}
            </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default TutorialViewer;