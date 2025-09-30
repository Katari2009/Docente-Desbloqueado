import React, { useRef, useEffect } from 'react';
import type { UserProfile } from '../types';
import { AVATARS, MODULES } from '../constants';
import { BADGES } from '../config/gamification';
import AppLogo from './common/AppLogo';

// @FIX: Add type declarations for global libraries to resolve TypeScript errors.
declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}

interface ReportGeneratorProps {
  userProfile: UserProfile;
  onComplete: () => void;
}

const ReportGenerator: React.FC<ReportGeneratorProps> = ({ userProfile, onComplete }) => {
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatePdf = async () => {
      const { jsPDF } = window.jspdf;
      const html2canvas = window.html2canvas;

      const element = reportRef.current;
      if (!element) {
        onComplete();
        return;
      }

      try {
        const canvas = await html2canvas(element, {
            scale: 2, // Higher scale for better quality
            backgroundColor: null, // Use transparent background
            useCORS: true // Important for external images like avatars
        });

        const imgData = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`Reporte-Docente-Desbloqueado-${userProfile.name}.pdf`);
      } catch (error) {
        console.error("Error generating PDF:", error);
      } finally {
        onComplete();
      }
    };

    // Timeout to allow images and styles to render before capturing
    const timer = setTimeout(generatePdf, 500);

    return () => clearTimeout(timer);
  }, [userProfile, onComplete]);

  const completedModules = MODULES.filter(m => userProfile.progress[m.id] === 'completed');
  const totalModules = MODULES.length;

  return (
    // This component renders off-screen to be captured by html2canvas
    <div style={{ position: 'absolute', left: '-9999px', width: '800px', fontFamily: 'sans-serif' }}>
        <div ref={reportRef} className="p-10 bg-gray-50 text-gray-800">
            <header className="flex justify-between items-center pb-6 border-b-2 border-cyan-500">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">Reporte de Progreso</h1>
                    <p className="text-gray-600">Docente Desbloqueado</p>
                </div>
                <AppLogo className="w-20 h-20" />
            </header>

            <section className="my-8 flex items-center gap-6 p-6 bg-cyan-50 rounded-lg">
                <img src={AVATARS[userProfile.avatarId]} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-cyan-500" />
                <div>
                    <h2 className="text-3xl font-semibold">{userProfile.name}</h2>
                    <p className="text-gray-600">Fecha de generación: {new Date().toLocaleDateString('es-ES')}</p>
                </div>
            </section>
            
            <section className="my-8">
                <h3 className="text-2xl font-semibold mb-4 border-l-4 border-cyan-500 pl-3">Resumen General</h3>
                <div className="flex justify-around text-center">
                    <div>
                        <p className="text-4xl font-bold text-cyan-600">{completedModules.length}/{totalModules}</p>
                        <p className="text-gray-600">Módulos Completados</p>
                    </div>
                     <div>
                        <p className="text-4xl font-bold text-cyan-600">{userProfile.earnedBadges?.length || 0}</p>
                        <p className="text-gray-600">Insignias Obtenidas</p>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h3 className="text-2xl font-semibold mb-4 border-l-4 border-cyan-500 pl-3">Desempeño en Módulos</h3>
                <div className="space-y-4">
                    {completedModules.length > 0 ? completedModules.map(module => (
                        <div key={module.id} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-center">
                            <p className="font-semibold">{module.title}</p>
                            <p className="font-bold text-lg text-cyan-600">
                                {userProfile.quizScores?.[module.id] ?? 'N/A'} / 3 Correctas
                            </p>
                        </div>
                    )) : <p className="text-gray-500 italic">Aún no has completado ningún módulo.</p>}
                </div>
            </section>

            <section className="my-8">
                <h3 className="text-2xl font-semibold mb-4 border-l-4 border-cyan-500 pl-3">Insignias Ganadas</h3>
                <div className="flex gap-6 flex-wrap">
                    {userProfile.earnedBadges && userProfile.earnedBadges.length > 0 ? userProfile.earnedBadges.map(badgeId => {
                        const badge = BADGES[badgeId];
                        if (!badge) return null;
                        return (
                            <div key={badgeId} className="flex flex-col items-center text-center w-28">
                                <badge.Icon className="w-20 h-20" />
                                <p className="font-semibold mt-2 text-sm">{badge.name}</p>
                                <p className="text-xs text-gray-500">{badge.description}</p>
                            </div>
                        )
                    }) : <p className="text-gray-500 italic">Completa desafíos para ganar insignias.</p>}
                </div>
            </section>

            <footer className="text-center text-xs text-gray-500 mt-10 pt-4 border-t">
                <p>Generado desde la aplicación Docente Desbloqueado.</p>
                <p>Christian Núñez V., Asesor Pedagógico, Programa PACE-UDA, 2025.</p>
            </footer>
        </div>
    </div>
  );
};

export default ReportGenerator;