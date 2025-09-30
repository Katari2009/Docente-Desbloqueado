import React, { useState, useEffect } from 'react';
import type { RewardResource } from '../types';
import { generatePedagogicalResource } from '../services/geminiService';
import Spinner from './common/Spinner';

interface ResourceViewerProps {
  resource: RewardResource;
  onClose: () => void;
}

const ResourceViewer: React.FC<ResourceViewerProps> = ({ resource, onClose }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const generatedContent = await generatePedagogicalResource(resource.title);
        setContent(generatedContent);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'No se pudo cargar el contenido.');
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [resource.title]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in" role="dialog" aria-modal="true">
      <div className="w-full max-w-xl bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 text-white transform animate-scale-in flex flex-col">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4">{resource.title}</h2>
        
        <div className="bg-black/20 p-4 rounded-lg flex-grow min-h-[300px] max-h-[60vh] overflow-y-auto">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full">
              <Spinner />
              <p className="mt-2 text-gray-300">Generando recurso exclusivo...</p>
            </div>
          )}
          {error && <p className="text-red-400 text-center">{error}</p>}
          {content && (
            <div className="prose prose-invert text-gray-200 whitespace-pre-wrap">{content}</div>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Cerrar
        </button>
      </div>
      <style>{`
        .prose { max-width: 100%; }
        .prose h1, .prose h2, .prose h3 { color: #67e8f9; }
        .prose p { margin-bottom: 1em; }
        .prose-invert { color: #d1d5db; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ResourceViewer;