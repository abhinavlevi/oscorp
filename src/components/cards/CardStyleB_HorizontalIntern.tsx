import React from 'react';
import { BadgeData } from '../../types';
import { OscorpLogo, OscorpSymbol } from '../OscorpLogo';
import { HologramBadge } from '../HologramBadge';

interface Props {
  badge: BadgeData;
  isBackView?: boolean;
}

export const CardStyleB_HorizontalIntern: React.FC<Props> = ({ badge, isBackView = false }) => {
  // Front View: Screen-accurate replica of Image 3 (Rodrigo Guevara Intern Pass)
  if (!isBackView) {
    return (
      <div
        className="relative bg-white text-black select-none rounded-[20px] shadow-2xl flex flex-col justify-between overflow-hidden"
        style={{
          width: '500px',
          height: '315px',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        {/* Top Header Row */}
        <div className="pt-6 px-8 flex items-start justify-between">
          {/* Top-Left: OSCORP INDUSTRIES */}
          <div className="flex flex-col items-start">
            <OscorpLogo variant="dark" size="sm" className="items-start" />
          </div>

          {/* Top-Right: Iridescent Hologram Badge (Image 3) */}
          <div className="shrink-0">
            <HologramBadge size={72} />
          </div>
        </div>

        {/* Middle Section: Big Red "INTERN" & Bold Operative Name */}
        <div className="px-8 pb-5 flex flex-col justify-center">
          {/* Large coral-red tracked INTERN (Image 3) */}
          <div
            className="text-[#eb4236] font-normal text-[52px] tracking-[0.08em] leading-none uppercase"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              letterSpacing: '0.08em'
            }}
          >
            {badge.role || 'INTERN'}
          </div>

          {/* Bold Black Operative Name (Image 3: "Rodrigo Guevara") */}
          <div
            className="text-black font-extrabold text-[32px] tracking-tight leading-tight mt-1"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontWeight: 900
            }}
          >
            {badge.fullName}
          </div>
        </div>

        {/* Bottom Full-Width Solid Black Bar with Coral-Red "RESTRICTED ACCESS" */}
        <div className="w-full bg-black py-3 px-6 flex items-center justify-center">
          <span
            className="text-[#eb4236] font-bold text-[13px] tracking-[0.22em] uppercase text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.22em'
            }}
          >
            RESTRICTED ACCESS
          </span>
        </div>
      </div>
    );
  }

  // Reverse Side: Screen-accurate to Image 4 (Back of Intern Card)
  return (
    <div
      className="relative bg-white text-black select-none rounded-[20px] shadow-2xl flex flex-col items-center justify-center overflow-hidden p-8"
      style={{
        width: '500px',
        height: '315px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Real Oscorp Aperture Symbol (Image 4) */}
      <OscorpSymbol className="w-24 h-24" />

      {/* Real OSCORP INDUSTRIES below symbol */}
      <OscorpLogo variant="dark" size="md" className="mt-4" />
    </div>
  );
};
