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
  const [errors, setErrors] = useState<{ name?: string; avatar?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; avatar?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Por favor, ingresa tu nombre.';
    }
    if (selectedAvatarId === null) {
      newErrors.avatar = 'Por favor, selecciona un avatar.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const initialProgress = MODULES.reduce((acc, module, index) => {
      acc[module.id] = index === 0 ? 'available' : 'locked';
      return acc;
    }, {} as Record<string, 'locked' | 'available' | 'completed'>);

    const newProfile: UserProfile = {
      name: name.trim(),
      avatarId: selectedAvatarId!, // Safe to use ! here due to validation
      progress: initialProgress,
      level: 1,
      experience: 0,
      skillPoints: 0,
      earnedBadges: [],
      quizScores: {},
      favoritedTutorials: [],
      viewedTutorials: {},
      unlockedResources: [],
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

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Tu Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300 ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-white/20 focus:ring-cyan-400'}`}
              placeholder="Ej: Profe Chris"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-red-400 text-sm mt-2">{errors.name}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium mb-4">Elige tu Avatar</label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4" role="radiogroup">
              {AVATARS.map((avatar, index) => (
                <button
                  key={index}
                  type="button"
                  role="radio"
                  aria-checked={selectedAvatarId === index}
                  onClick={() => setSelectedAvatarId(index)}
                  className={`p-2 rounded-full aspect-square transition duration-300 ${selectedAvatarId === index ? 'bg-cyan-500/50 ring-2 ring-cyan-400' : 'bg-white/10 hover:bg-white/20'}`}
                  aria-label={`Avatar ${index + 1}`}
                >
                  <img src={avatar} alt="" className="w-full h-full object-cover rounded-full pointer-events-none" />
                </button>
              ))}
            </div>
             {errors.avatar && <p className="text-red-400 text-sm mt-4 text-center">{errors.avatar}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Comenzar Aventura
          </button>
        </form>
         <div className="text-center text-xs text-gray-400 mt-8">
           <p>
            Creado por: Christian Núñez V., Asesor Pedagógico, Programa PACE-UDA, 2025.
           </p>
           <a href="https://github.com/christianyv/docente-desbloqueado" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub" className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Ver en GitHub
           </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;