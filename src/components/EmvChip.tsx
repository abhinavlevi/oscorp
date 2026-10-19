import React from 'react';

export const EmvChip: React.FC<{ className?: string }> = ({ className = 'w-12 h-10' }) => {
  return (
    <div
      className={`relative rounded-md overflow-hidden shadow-inner border border-amber-500/80 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)',
        aspectRatio: '1.25 / 1'
      }}
    >
      {/* Contact Grid Circuitry Lines */}
      <svg viewBox="0 0 50 40" className="absolute inset-0 w-full h-full" fill="none" stroke="#78350f" strokeWidth="1.2">
        {/* Outer and inner contact pads */}
        <rect x="15" y="10" width="20" height="20" rx="3" stroke="#92400e" strokeWidth="1" />
        <line x1="0" y1="20" x2="15" y2="20" />
        <line x1="35" y1="20" x2="50" y2="20" />
        <line x1="25" y1="0" x2="25" y2="10" />
        <line x1="25" y1="30" x2="25" y2="40" />
        <line x1="0" y1="11" x2="15" y2="15" />
        <line x1="0" y1="29" x2="15" y2="25" />
        <line x1="35" y1="15" x2="50" y2="11" />
        <line x1="35" y1="25" x2="50" y2="29" />
      </svg>
      {/* Subtle metallic sheen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 45%, rgba(0,0,0,0.15) 100%)'
        }}
      />
    </div>
  );
};
