// FIX: Implemented component with AI-powered Q&A and support contact.
import React, { useState } from 'react';
import { SUPPORT_EMAIL, EMAIL_SUBJECT, MODULES } from '../constants';
import { generateForumResponse } from '../services/geminiService';
import Spinner from './common/Spinner';

interface HelpAndCommunityProps {
  onClose: () => void;
}

const HelpAndCommunity: React.FC<HelpAndCommunityProps> = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [selectedModule, setSelectedModule] = useState(MODULES[0].id);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setError('Por favor, escribe una pregunta.');
      return;
    }
    setLoading(true);
    setError('');
    setResponse('');
    try {
      const moduleContent = MODULES.find(m => m.id === selectedModule)?.title || '';
      const aiResponse = await generateForumResponse(question, moduleContent);
      setResponse(aiResponse);
    } catch (err) {
      setError('Hubo un error al obtener la respuesta. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in" role="dialog">
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 text-white transform animate-scale-in flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-300">Ayuda y Comunidad</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white text-3xl">&times;</button>
        </div>
        
        <div className="flex-grow overflow-y-auto pr-2">
          <div className="bg-white/10 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-2">Pregúntale a la IA Pedagógica</h3>
            <p className="text-sm text-gray-300 mb-4">¿Tienes una duda sobre algún módulo? Nuestro asistente de IA te puede ayudar.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="moduleSelect" className="block text-sm font-medium text-gray-200 mb-1">Contexto del Módulo</label>
                <select id="moduleSelect" value={selectedModule} onChange={e => setSelectedModule(e.target.value)} className="w-full bg-black/30 border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  {MODULES.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="question" className="block text-sm font-medium text-gray-200 mb-1">Tu Pregunta</label>
                <textarea id="question" value={question} onChange={e => setQuestion(e.target.value)} rows={3} className="w-full bg-black/30 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Ej: ¿Cómo puedo aplicar el concepto de aula invertida con IA?"></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition flex items-center justify-center">
                {loading ? <Spinner /> : 'Obtener Respuesta'}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
            {response && (
              <div className="mt-4 p-3 bg-black/20 rounded-lg border-l-4 border-cyan-400">
                <p className="text-gray-200">{response}</p>
              </div>
            )}
          </div>
          
          <div className="text-center bg-white/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Contacto de Soporte</h3>
            <p className="text-sm text-gray-300">Si necesitas ayuda adicional o tienes sugerencias, contáctanos.</p>
            <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`} className="mt-3 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-lg transition">
              Enviar Email
            </a>
          </div>
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

export default HelpAndCommunity;
