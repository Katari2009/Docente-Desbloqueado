import React from 'react';
import type { UserProfile } from '../types';
import { MISSIONS } from '../config/missions';

interface DailyMissionCardProps {
  userProfile: UserProfile;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const DailyMissionCard: React.FC<DailyMissionCardProps> = ({ userProfile }) => {
    const missionInfo = userProfile.dailyMission ? MISSIONS.find(m => m.id === userProfile.dailyMission!.id) : null;

    if (!missionInfo) {
        return (
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 p-4 text-center text-gray-300">
                No hay misiones disponibles.
            </div>
        );
    }
    
    const isCompleted = userProfile.dailyMission?.completed ?? false;

    return (
        <div className={`bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 p-4 transition-all duration-300 ${isCompleted ? 'border-green-500/50' : 'border-cyan-500/50'}`}>
            <h3 className="font-bold text-lg text-white mb-2">Misión Diaria</h3>
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-semibold text-cyan-300">{missionInfo.title}</p>
                    <p className="text-sm text-gray-300">{missionInfo.description}</p>
                </div>
                <div className="flex flex-col items-center ml-4">
                    {isCompleted ? (
                        <>
                           <CheckIcon />
                           <span className="text-xs text-green-400 font-bold">¡Hecho!</span>
                        </>
                    ) : (
                        <>
                            <span className="font-bold text-yellow-400 text-2xl">+{missionInfo.reward}</span>
                            <span className="text-xs text-yellow-500">PS</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DailyMissionCard;