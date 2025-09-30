// FIX: Created skeleton component to resolve compilation error.
import React, { useEffect, useState } from 'react';

interface NotificationToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseClasses = "fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white transition-all duration-300 z-50";
  const typeClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };
  const visibilityClass = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${visibilityClass}`}>
      {message}
    </div>
  );
};

export default NotificationToast;
