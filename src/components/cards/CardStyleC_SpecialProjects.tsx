import React from 'react';
import { BadgeData } from '../../types';
import { OscorpLogo, OscorpSymbol } from '../OscorpLogo';

interface Props {
  badge: BadgeData;
  isBackView?: boolean;
}

export const CardStyleC_SpecialProjects: React.FC<Props> = ({ badge, isBackView = false }) => {
  const { zoom, panX, panY } = badge.photoTransform;

  // Front View: Screen-accurate replica of Image 4 (Peter Parker Intern Photo Badge)
  if (!isBackView) {
    return (
      <div
        className="relative bg-white text-black select-none rounded-[20px] shadow-2xl flex flex-col justify-between overflow-hidden border-[1.5px] border-black"
        style={{
          width: '500px',
          height: '315px',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        {/* Top-Left: Authentic OSCORP Logo (Image 4) */}
        <div className="pt-6 px-7 flex items-start justify-between">
          <OscorpLogo variant="dark" size="sm" className="items-start" />
        </div>

        {/* Middle Section: (Left: Red INTERN & Name) | (Right: Framed Portrait Photo) */}
        <div className="px-7 flex items-end justify-between my-auto">
          {/* Left Text Block */}
          <div className="pb-1">
            {/* Bold Red "INTERN" */}
            <div
              className="text-[#dc2626] font-extrabold text-[36px] tracking-wide leading-none uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
            >
              {badge.role || 'INTERN'}
            </div>

            {/* Operative Full Name */}
            <div
              className="font-bold text-[22px] text-black tracking-tight mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {badge.fullName}
            </div>
          </div>

          {/* Right: Portrait Photo in crisp black frame (Image 4) */}
          <div className="relative w-[115px] h-[142px] border-[1.5px] border-black bg-slate-200 overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={badge.photoUrl}
              alt={badge.fullName}
              className="w-full h-full object-cover pointer-events-none"
              style={{
                transform: `scale(${zoom}) translate(${panX}%, ${panY}%)`,
                transformOrigin: 'center center'
              }}
            />
          </div>
        </div>

        {/* Bottom Full-Width Black Bar with Red "RESTRICTED ACCESS" */}
        <div className="w-full bg-black py-2.5 px-6 flex items-center justify-center">
          <span
            className="text-[#dc2626] font-bold text-[12px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
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
      className="relative bg-white text-black select-none rounded-[20px] shadow-2xl flex flex-col items-center justify-center overflow-hidden p-8 border-[1.5px] border-black"
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
