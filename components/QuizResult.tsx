
import React from 'react';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onFinish: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, onFinish }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const resultMessage = percentage >= 80 ? '¡Excelente trabajo!' : percentage >= 50 ? '¡Buen esfuerzo!' : '¡Sigue practicando!';

  return (
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-4">{resultMessage}</h2>
      <p className="text-2xl mb-2">
        Tu puntuación: <span className="font-bold text-cyan-400">{score}</span> de <span className="font-bold text-cyan-400">{totalQuestions}</span>
      </p>
      <div className="w-full bg-white/20 rounded-full h-4 my-6 max-w-md mx-auto">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <button
        onClick={onFinish}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
      >
        Volver al Dashboard
      </button>
    </div>
  );
};

export default QuizResult;
