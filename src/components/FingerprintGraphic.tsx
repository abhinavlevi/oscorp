import React from 'react';

export const FingerprintGraphic: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-20',
  color = '#10b981'
}) => {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
    >
      {/* Biometric whorl contours */}
      <path d="M 50 65 A 10 12 0 0 1 50 45 A 10 12 0 0 1 50 65" />
      <path d="M 50 75 A 18 20 0 0 1 35 48 A 18 20 0 0 1 65 48" />
      <path d="M 50 85 A 26 30 0 0 1 26 50 A 26 30 0 0 1 74 50 A 26 30 0 0 1 52 85" />
      <path d="M 50 95 A 34 40 0 0 1 18 52 A 34 40 0 0 1 82 52 A 34 40 0 0 1 50 95" />
      <path d="M 45 105 A 42 50 0 0 1 10 55 A 42 50 0 0 1 90 55 A 42 50 0 0 1 55 105" />
      <path d="M 38 114 A 50 60 0 0 1 4 58 A 50 60 0 0 1 96 58 A 50 60 0 0 1 62 114" />
      {/* Scanning crosshairs & alignment ticks */}
      <line x1="50" y1="5" x2="50" y2="15" stroke={color} strokeWidth="2" opacity="0.8" />
      <line x1="50" y1="105" x2="50" y2="115" stroke={color} strokeWidth="2" opacity="0.8" />
      <line x1="5" y1="60" x2="15" y2="60" stroke={color} strokeWidth="2" opacity="0.8" />
      <line x1="85" y1="60" x2="95" y2="60" stroke={color} strokeWidth="2" opacity="0.8" />
    </svg>
  );
};
