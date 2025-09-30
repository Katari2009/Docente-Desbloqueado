// FIX: Created skeleton component to resolve compilation error.
import React from 'react';

const AgendaAndReminders: React.FC = () => {
  return (
    <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 p-4">
      <h3 className="font-bold text-lg text-white mb-2">Agenda y Recordatorios</h3>
      <div className="text-center text-gray-300 py-4">
        <p>Próximamente: Integra tu calendario y establece recordatorios de estudio.</p>
      </div>
    </div>
  );
};

export default AgendaAndReminders;
