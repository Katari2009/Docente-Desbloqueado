// FIX: Created a placeholder implementation for the CustomAvatar component.
import React from 'react';

interface CustomAvatarProps {
  onClose: () => void;
}
const CustomAvatar: React.FC<CustomAvatarProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 text-white">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-cyan-300">Personalizar Avatar</h2>
            <button onClick={onClose} className="text-gray-300 hover:text-white text-3xl">&times;</button>
        </div>
        <p className="text-center text-gray-300">La personalización de avatares estará disponible próximamente.</p>
      </div>
    </div>
  );
};
export default CustomAvatar;
