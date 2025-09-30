// FIX: Created a basic implementation for the NarrativeScreen component.
import React from 'react';

interface NarrativeScreenProps {
  onFinish: () => void;
}

const NarrativeScreen: React.FC<NarrativeScreenProps> = ({ onFinish }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center p-4 z-50 text-white text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">La Aventura Comienza</h1>
        <p className="max-w-2xl mx-auto mb-8">
          En un mundo donde la tecnología avanza a pasos agigantados, un grupo de docentes valientes se embarca en una misión: dominar el poder de la Inteligencia Artificial para transformar la educación. Tu eres uno de ellos. ¡Prepárate para desbloquear tu potencial!
        </p>
        <button onClick={onFinish} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
          ¡Estoy Listo!
        </button>
      </div>
    </div>
  );
};
export default NarrativeScreen;
