import React from 'react';

const AppLogo: React.FC<{ className?: string }> = ({ className = 'h-16 w-16' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Docente Desbloqueado Logo"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2L4 5v6.09c0 4.95 3.58 9.38 8 10.91c4.42-1.53 8-5.96 8-10.91V5l-8-3z"
      fill="url(#logoGradient)"
    />
    <path
      d="M12 14.25l-2.53 1.47l.68-2.95l-2.22-2.03l2.96-.26L12 8l1.11 2.48l2.96.26l-2.22 2.03l.68 2.95L12 14.25z"
      className="fill-white"
    />
  </svg>
);

export default AppLogo;
