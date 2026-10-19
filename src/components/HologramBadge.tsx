import React from 'react';

interface HologramBadgeProps {
  className?: string;
  size?: number; // size in px
}

export const HologramBadge: React.FC<HologramBadgeProps> = ({
  className = '',
  size = 64
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-sm flex items-center justify-center select-none bg-[#0a0d12] border border-slate-700/60 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`
      }}
    >
      {/* Iridescent spectrum ring */}
      <div
        className="absolute inset-[10%] rounded-full opacity-90"
        style={{
          background: 'conic-gradient(from 45deg, #ef4444, #f97316, #eab308, #10b981, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #ef4444)',
          filter: 'blur(1.5px)'
        }}
      />

      {/* Inner dark core */}
      <div className="absolute inset-[24%] rounded-full bg-[#0d1117] flex items-center justify-center p-1.5 border border-white/10 shadow-inner">
        <img
          src="/oscorp-logo-white.png"
          alt="Oscorp"
          className="w-10 h-auto object-contain select-none pointer-events-none"
        />
      </div>

      {/* Glossy sheen reflection */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 60%)'
        }}
      />
    </div>
  );
};
