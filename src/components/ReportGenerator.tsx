import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';
import Spinner from './common/Spinner';

interface ReportData {
  userName: string;
  userAvatar: string;
  completedModules: number;
  totalModules: number;
  badges: string[];
  points: number;
  level: number;
  achievements: string[];
  studyTimeHours: number;
  averageScore: number;
  currentStreak: number;
  totalSessions: number;
}

interface ReportGeneratorProps {
  reportData: ReportData;
  onComplete: () => void;
}

// @FIX: Implemented the missing createReportElement function.
const createReportElement = (reportData: ReportData): HTMLElement => {
  const container = document.createElement('div');
  container.style.width = '800px';
  container.style.padding = '40px';
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.backgroundColor = 'white';
  container.style.color = 'black';
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '0';

  const progressPercentage = reportData.totalModules > 0 ? (reportData.completedModules / reportData.totalModules) * 100 : 0;

  container.innerHTML = `
    <div style="border: 2px solid #06B6D4; padding: 20px; border-radius: 10px; background-color: #F0F9FF;">
      <h1 style="text-align: center; color: #0891B2; font-size: 28px;">Reporte de Progreso: Docente Desbloqueado</h1>
      <div style="display: flex; align-items: center; margin-top: 20px; padding-bottom: 20px; border-bottom: 1px solid #E0E0E0;">
        <img src="${reportData.userAvatar}" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #06B6D4;"/>
        <div style="margin-left: 20px;">
          <h2 style="margin: 0; font-size: 24px; color: #0E7490;">${reportData.userName}</h2>
          <p style="margin: 5px 0 0; font-size: 16px; color: #666;">Nivel ${reportData.level}</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
        <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h3 style="margin: 0 0 10px; font-size: 18px; color: #0E7490;">Progreso General</h3>
          <p><strong>Módulos Completados:</strong> ${reportData.completedModules} / ${reportData.totalModules}</p>
          <div style="width: 100%; background-color: #E0E7FF; border-radius: 5px; height: 10px; margin-top: 5px;">
            <div style="width: ${progressPercentage}%; background-color: #4F46E5; border-radius: 5px; height: 10px;"></div>
          </div>
          <p style="margin-top: 10px;"><strong>Tiempo de estudio:</strong> ${reportData.studyTimeHours} horas</p>
        </div>
        <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h3 style="margin: 0 0 10px; font-size: 18px; color: #0E7490;">Estadísticas Clave</h3>
          <p><strong>Puntos de Habilidad:</strong> ${reportData.points}</p>
          <p><strong>Puntuación Promedio:</strong> ${reportData.averageScore.toFixed(1)}%</p>
          <p><strong>Insignias Obtenidas:</strong> ${reportData.badges.length}</p>
          <p><strong>Racha Actual:</strong> ${reportData.currentStreak} días</p>
        </div>
      </div>
      <div style="margin-top: 20px; background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h3 style="margin: 0 0 10px; font-size: 18px; color: #0E7490;">Logros Destacados</h3>
        <ul style="list-style: none; padding: 0; margin: 0; columns: 2; -webkit-columns: 2;">
          ${reportData.achievements.map(ach => `<li style="margin-bottom: 5px;">&#11088; ${ach}</li>`).join('')}
        </ul>
      </div>
      <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #999;">Generado el ${new Date().toLocaleDateString('es-ES')}</p>
    </div>
  `;
  return container;
};

// @FIX: The component now returns a valid React node, resolving the assignment error.
const ReportGenerator: React.FC<ReportGeneratorProps> = ({ reportData, onComplete }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const captureReportAsImage = async (element: HTMLElement, onProgress: () => void) => {
      if (!element) {
        onProgress();
        return;
      }
      
      try {
        const html2canvas = (window as any).html2canvas;
        const { jsPDF } = (window as any).jspdf;
  
        if (!html2canvas || !jsPDF) {
            throw new Error('jsPDF or html2canvas not found. Please ensure they are loaded.');
        }
        
        const canvas = await html2canvas(element, {
            scale: 2, 
            backgroundColor: null, 
            useCORS: true 
        });
        
        onProgress();
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`reporte-docente-desbloqueado-${reportData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`);
        
      } catch (error) {
        console.error('Error capturing report:', error);
        throw error;
      }
    };
    
    const generateReport = async () => {
      setIsGenerating(true);
      setProgress(0);
      setError(null);
      setSuccess(false);
  
      try {
        // Create the report element to capture
        const reportElement = createReportElement(reportData);
        document.body.appendChild(reportElement);
  
        // Progress simulation
        await new Promise(resolve => setTimeout(resolve, 300));
        setProgress(25);
        await new Promise(resolve => setTimeout(resolve, 500));
  
        setProgress(50);
        await new Promise(resolve => setTimeout(resolve, 500));
  
        // Capture the report as image
        await captureReportAsImage(reportElement, () => {
          setProgress(75);
        });
  
        setProgress(100);
        await new Promise(resolve => setTimeout(resolve, 300));
  
        // Clean up
        document.body.removeChild(reportElement);
        setSuccess(true);
        
        setTimeout(() => {
          onComplete();
        }, 1500);
        
      } catch (err) {
        setError('Error al generar el reporte. Por favor, intenta de nuevo.');
        console.error('Report generation error:', err);
      } finally {
        setIsGenerating(false);
      }
    };

    generateReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 text-white text-center">
        {error ? (
          <>
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-400 mb-2">Error</h2>
            <p className="text-gray-300 mb-6">{error}</p>
            <button onClick={onComplete} className="bg-red-500/50 hover:bg-red-500/70 text-white font-bold py-2 px-6 rounded-lg transition">
              Cerrar
            </button>
          </>
        ) : success ? (
          <>
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-400 mb-2">¡Reporte Generado!</h2>
            <p className="text-gray-300">Tu reporte en PDF ha sido descargado.</p>
          </>
        ) : (
          <>
            <FileText className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Generando Reporte</h2>
            <p className="text-gray-300 mb-6">Estamos compilando tu progreso. ¡Espera un momento!</p>
            {isGenerating ? (
              <>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-400">{progress}% completado</p>
              </>
            ) : <Spinner />}
          </>
        )}
      </div>
    </div>
  );
};

export default ReportGenerator;
