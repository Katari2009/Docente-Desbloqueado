import React, { useState, useEffect, useCallback } from 'react';
import { generateQuizQuestions, generatePersonalizedFeedback } from '../services/geminiService';
import type { Module, QuizQuestion } from '../types';
import Spinner from './common/Spinner';
import QuizResult from './QuizResult';

interface QuizViewProps {
  module: Module;
  onComplete: (score: number) => void;
  onShowRubric: (score: number, total: number) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ module, onComplete, onShowRubric }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  const fetchQuestions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedQuestions = await generateQuizQuestions(module.content);
      setQuestions(fetchedQuestions.map(q => ({...q, feedback: ''})));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Un error desconocido ocurrió.');
    } finally {
      setLoading(false);
    }
  }, [module.content]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleAnswerSelect = async (option: string) => {
    if (selectedAnswer !== null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const correct = option === currentQuestion.correctAnswer;
    
    setSelectedAnswer(option);
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }

    setFeedbackLoading(true);
    try {
      const feedback = await generatePersonalizedFeedback(
        module.content,
        currentQuestion.question,
        option,
        currentQuestion.correctAnswer
      );
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].feedback = feedback;
      setQuestions(updatedQuestions);
    } catch (e) {
      console.error("Failed to generate feedback", e);
      const updatedQuestions = [...questions];
      // Fallback feedback
      updatedQuestions[currentQuestionIndex].feedback = correct ? "¡Excelente! Esa es la respuesta correcta." : currentQuestion.explanation;
      setQuestions(updatedQuestions);
    } finally {
      setFeedbackLoading(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete(score);
      setShowResult(true);
    }
  };
  
  const handleFinish = () => {
      onShowRubric(score, questions.length);
  }

  const getButtonClass = (option: string) => {
    if (selectedAnswer === null) {
      return 'bg-white/10 border-white/20 hover:bg-white/20';
    }
    const isSelected = selectedAnswer === option;
    const isCorrectAnswer = option === questions[currentQuestionIndex].correctAnswer;

    if (isCorrectAnswer) {
      return 'bg-green-500/50 border-green-400 ring-2 ring-green-400';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-500/50 border-red-400';
    }
    return 'bg-white/10 border-white/20 opacity-50 cursor-not-allowed';
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <Spinner />
        <p className="mt-4 text-xl">Generando tu desafío...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white text-center p-4">
        <p className="text-2xl text-red-400 mb-4">¡Oh no!</p>
        <p className="mb-6">{error}</p>
        <button onClick={() => onComplete(0)} className="bg-cyan-500 py-2 px-6 rounded-lg">Volver</button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?blur=10)' }}>
        <div className="w-full max-w-2xl bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
            <QuizResult score={score} totalQuestions={questions.length} onFinish={handleFinish} />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
     <div className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?blur=10)' }}>
      <div className="w-full max-w-3xl bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 text-white">
        {currentQuestion && (
          <div>
            <div className="mb-6 text-center">
              <p className="text-gray-300 text-lg">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">{currentQuestion.question}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-lg border text-left transition duration-300 ${getButtonClass(option)}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedAnswer && (
              <div className="text-center p-4 rounded-lg bg-black/30 mb-6 min-h-[100px] flex items-center justify-center">
                {feedbackLoading ? <Spinner /> : (
                  <div>
                    <p className={`text-xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                    </p>
                    <p className="mt-2 text-gray-200">{currentQuestion.feedback || currentQuestion.explanation}</p>
                  </div>
                )}
              </div>
            )}

            {selectedAnswer && (
               <button
                onClick={handleNextQuestion}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 shadow-lg"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizView;
