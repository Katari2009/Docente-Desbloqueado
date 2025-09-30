import React from 'react';

interface HelpButtonProps {
    onClick: () => void;
}

const HelpButton: React.FC<HelpButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-40"
      aria-label="Abrir ayuda y comunidad"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
  );
};

export default HelpButton;