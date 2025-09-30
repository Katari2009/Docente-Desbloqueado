// FIX: Implemented component to fetch and display AI-generated rubric feedback.
import React, { useState, useEffect } from 'react';
import type { Module, RubricFeedbackData } from '../types';
import { generateRubricFeedback } from '../services/geminiService';
import Spinner from './common/Spinner';

interface RubricFeedbackProps {
    module: Module;
    score: number;
    totalQuestions: number;
    onFinish: () => void;
}

const RubricFeedback: React.FC<RubricFeedbackProps> = ({ module, score, totalQuestions, onFinish }) => {
    const [feedback, setFeedback] = useState<RubricFeedbackData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await generateRubricFeedback(module, score, totalQuestions);
                setFeedback(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'No se pudo generar la rúbrica.');
            } finally {
                setLoading(false);
            }
        };
        fetchFeedback();
    }, [module, score, totalQuestions]);

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Destacado': return 'text-green-400';
            case 'Logrado': return 'text-cyan-400';
            case 'En Desarrollo': return 'text-yellow-400';
            case 'Inicial': return 'text-orange-400';
            default: return 'text-gray-300';
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
                <Spinner />
                <p className="mt-4 text-xl">Generando tu rúbrica personalizada...</p>
            </div>
        );
    }
    
    if (error) {
        return (
          <div className="flex flex-col items-center justify-center min-h-screen text-white text-center p-4 bg-gray-900">
            <p className="text-2xl text-red-400 mb-4">¡Ups! Algo salió mal</p>
            <p className="mb-6">{error}</p>
            <button onClick={onFinish} className="bg-cyan-500 py-2 px-6 rounded-lg">Volver al Dashboard</button>
          </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?blur=10)' }}>
            <div className="w-full max-w-3xl bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 text-white animate-fade-in">
                <h2 className="text-3xl font-bold text-center mb-2">Rúbrica Formativa</h2>
                <p className="text-center text-gray-300 mb-6">Feedback para el módulo: <span className="font-semibold">{module.title}</span></p>

                {feedback && (
                    <div className="space-y-6">
                        {/* Criteria */}
                        <div className="space-y-4">
                            {Object.entries({
                                'Comprensión Conceptual': feedback.conceptualUnderstanding,
                                'Aplicación Práctica': feedback.practicalApplication,
                                'Preparación para Implementación': feedback.implementationReadiness
                            }).map(([title, data]) => (
                                <div key={title} className="bg-white/10 p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-lg">{title}</h3>
                                        <span className={`font-bold ${getLevelColor(data.level)}`}>{data.level}</span>
                                    </div>
                                    <p className="text-gray-300 mt-2">{data.feedback}</p>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="bg-black/20 p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-3 text-cyan-300">Resumen y Próximos Pasos</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-green-400">Puntos Fuertes</h4>
                                    <p className="text-gray-300 text-sm">{feedback.summary.strengths}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-400">Áreas de Mejora</h4>
                                    <p className="text-gray-300 text-sm">{feedback.summary.areasForImprovement}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cyan-400">Próximos Pasos</h4>
                                    <p className="text-gray-300 text-sm">{feedback.summary.nextSteps}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={onFinish}
                    className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 shadow-lg"
                >
                    Volver al Dashboard
                </button>
            </div>
             <style>{`
                @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default RubricFeedback;
