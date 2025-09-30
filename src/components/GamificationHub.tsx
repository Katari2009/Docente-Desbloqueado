// FIX: Created a basic implementation for the GamificationHub component.
import React from 'react';
import type { UserProfile } from '../types';
import { BADGES } from '../config/gamification';

interface GamificationHubProps {
  userProfile: UserProfile;
  onClose: () => void;
}

const GamificationHub: React.FC<GamificationHubProps> = ({ userProfile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-3xl bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 text-white max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-cyan-300">Mi Perfil de Jugador</h2>
            <button onClick={onClose} className="text-gray-300 hover:text-white text-3xl">&times;</button>
        </div>
        <div className="flex-grow overflow-y-auto">
            {/* Badges section */}
            <h3 className="text-xl font-semibold mb-3">Insignias Obtenidas</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 bg-black/20 p-4 rounded-lg">
                {Object.values(BADGES).map(badge => {
                    const isEarned = userProfile.earnedBadges?.includes(badge.id);
                    return (
                        <div key={badge.id} className={`text-center transition-opacity ${isEarned ? 'opacity-100' : 'opacity-30'}`}>
                            <badge.Icon className={`w-16 h-16 mx-auto ${isEarned ? 'text-yellow-400' : 'text-gray-500'}`} />
                            <p className="font-semibold text-sm mt-2">{badge.name}</p>
                            <p className="text-xs text-gray-400">{badge.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};
export default GamificationHub;
