import React, { useState } from 'react';
import { AVATARS, MODULES } from '../constants';
import type { UserProfile } from '../types';
import AppLogo from './common/AppLogo';

interface ProfileSetupProps {
  onProfileCreate: (profile: UserProfile) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileCreate }) => {
  const [name, setName] = useState('');
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, ingresa tu nombre.');
      return;
    }
    if (selectedAvatarId === null) {
      setError('Por favor, selecciona un avatar.');
      return;
    }

    const initialProgress = MODULES.reduce((acc, module, index) => {
      acc[module.id] = index === 0 ? 'available' : 'locked';
      return acc;
    }, {} as Record<string, 'locked' | 'available' | 'completed'>);

    const newProfile: UserProfile = {
      name,
      avatarId: selectedAvatarId,
      progress: initialProgress,
    };
    onProfileCreate(newProfile);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?blur=10)' }}>
      <div className="w-full max-w-2xl bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 text-white">
        <div className="flex flex-col items-center justify-center mb-6">
          <AppLogo className="h-20 w-20" />
          <h1 className="text-3xl font-bold text-center mt-2 tracking-wide">Docente Desbloqueado</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">¡Bienvenido/a!</h2>
        <p className="text-center text-gray-200 mb-8">Crea tu perfil para empezar a jugar y aprender.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Tu Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              placeholder="Ej: Profe Chris"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium mb-4">Elige tu Avatar</label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {AVATARS.map((avatar, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedAvatarId(index)}
                  className={`p-2 rounded-full aspect-square transition duration-300 ${selectedAvatarId === index ? 'bg-cyan-500/50 ring-2 ring-cyan-400' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  <img src={avatar} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover rounded-full" />
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-red-400 text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Comenzar Aventura
          </button>
        </form>
         <p className="text-center text-xs text-gray-400 mt-8">
          Creado por: Christian Núñez V., Asesor Pedagógico, Programa PACE-UDA, 2025.
        </p>
      </div>
    </div>
  );
};

export default ProfileSetup;