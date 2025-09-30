// FIX: Created a functional LevelUpModal component.
import React from 'react';

interface LevelUpModalProps {
  newLevel: number;
  onClose: () => void;
}

const LevelUpModal: React.FC<LevelUpModalProps> = ({ newLevel, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="w-full max-w-md bg-black/40 backdrop-blur-xl rounded-2xl border border-yellow-400/50 shadow-2xl p-8 text-white transform animate-bounce-in text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-2">¡SUBISTE DE NIVEL!</h2>
        <p className="text-7xl font-bold mb-4">{newLevel}</p>
        <p className="text-lg text-gray-200 mb-6">¡Tu conocimiento se expande! Sigue así para desbloquear nuevas recompensas.</p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
        >
          Continuar
        </button>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default LevelUpModal;
