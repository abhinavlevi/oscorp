import React from 'react';
import { BadgeData } from '../../types';
import { OscorpLogo } from '../OscorpLogo';
import { HologramBadge } from '../HologramBadge';
import { QRCodeSVG } from 'qrcode.react';

interface Props {
  badge: BadgeData;
  isBackView?: boolean;
}

export const CardStyleA_VerticalStaff: React.FC<Props> = ({ badge, isBackView = false }) => {
  const { zoom, panX, panY } = badge.photoTransform;

  // Split role vertically: e.g. "STAFF" -> ['S', 'T', 'A', 'F', 'F']
  const verticalLetters = (badge.role || 'STAFF').toUpperCase().split('');

  // Vertical badge number characters: e.g. "A00810" -> ['A', '0', '0', '8', '1', '0']
  const verticalBadgeNo = (badge.badgeNumber || 'A00810').toUpperCase().split('');

  // Front View: Screen-accurate to The Amazing Spider-Man Staff Badge (Image 2)
  if (!isBackView) {
    return (
      <div
        className="relative bg-white text-black select-none rounded-[24px] shadow-2xl p-5 flex flex-col justify-between overflow-hidden"
        style={{
          width: '320px',
          height: '490px',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        {/* Exact continuous thin black rounded border inset from the edges (Image 2) */}
        <div className="absolute inset-[13px] border-[1.5px] border-black rounded-[16px] pointer-events-none" />

        {/* Top Header: Centered OSCORP INDUSTRIES */}
        <div className="relative pt-4 pb-2 flex flex-col items-center">
          <OscorpLogo variant="dark" size="md" />
        </div>

        {/* Middle Body: Vertical Role (Left), Portrait (Center), Vertical Serial No. (Right) */}
        <div className="relative flex-1 flex items-center justify-between px-3 my-1">
          {/* Left: "S T A F F" in bold serif font */}
          <div
            className="flex flex-col items-center justify-center w-7 text-black font-serif font-black text-[21px] tracking-[0.22em] leading-tight"
            style={{ fontFamily: "'Playfair Display', 'Lora', Georgia, serif" }}
          >
            {verticalLetters.map((char, i) => (
              <span key={i} className="my-[1.5px]">
                {char}
              </span>
            ))}
          </div>

          {/* Center: Photo Frame with crisp thin black border */}
          <div className="relative w-[148px] h-[190px] border-[1.5px] border-black bg-[#f1f3f5] overflow-hidden flex items-center justify-center shadow-xs">
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

          {/* Right: "No." and Vertical Serial Number */}
          <div
            className="flex flex-col items-center justify-center w-7 font-serif font-bold text-black"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            <span className="text-[10px] font-bold mb-1">No.</span>
            {verticalBadgeNo.map((char, i) => (
              <span key={i} className="my-[1px] text-[12.5px] font-semibold">
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section: Name, Solid Dividing Line, Department */}
        <div className="relative pb-4 px-3 flex flex-col items-center text-center">
          {/* Operative Full Name in classic serif typography */}
          <div
            className="font-serif font-bold text-[18px] text-black tracking-wide leading-snug"
            style={{ fontFamily: "'Playfair Display', 'Lora', Georgia, serif" }}
          >
            {badge.fullName}
          </div>

          {/* Solid horizontal black dividing rule */}
          <div className="w-[88%] h-[1.5px] bg-black my-1.5" />

          {/* Department / Laboratory in small-caps serif font */}
          <div
            className="font-serif font-bold text-[11px] tracking-[0.16em] uppercase text-black"
            style={{ fontFamily: "'Cinzel', 'Lora', Georgia, serif" }}
          >
            {badge.department}
          </div>
        </div>
      </div>
    );
  }

  // Reverse Side: Screen-accurate prop reverse matching front face color and border
  const qrPayload = JSON.stringify({
    iss: 'OSCORP INDUSTRIES',
    id: badge.badgeNumber,
    name: badge.fullName,
    dept: badge.department,
    lvl: badge.clearanceLevel
  });

  return (
    <div
      className="relative bg-white text-black select-none rounded-[24px] shadow-2xl p-5 flex flex-col justify-between overflow-hidden"
      style={{
        width: '320px',
        height: '490px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Exact continuous thin black rounded border inset from the edges (identical to front face) */}
      <div className="absolute inset-[13px] border-[1.5px] border-black rounded-[16px] pointer-events-none" />

      {/* Top: Black Magnetic Stripe Bar centered across the card */}
      <div className="relative pt-2 px-1">
        <div className="w-full h-8 bg-black rounded flex items-center justify-center">
          <span className="text-[7.5px] font-mono tracking-[0.32em] text-white uppercase font-bold">
            MAGNETIC ENCRYPTION STRIPE
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex-1 flex flex-col justify-between px-2 py-3">
        {/* Header Notice */}
        <div className="space-y-1 text-center">
          <div className="text-[9.5px] font-bold tracking-wider text-black font-mono uppercase">
            OSCORP SECURITY CLEARANCE
          </div>
          <p className="text-[7.5px] text-slate-600 leading-tight">
            Property of Oscorp Industries. Authorized personnel must display credentials visibly within all facility sectors. If found, return to Facility Security, Tower Level 1.
          </p>
        </div>

        {/* Biometrics Summary Box */}
        <div className="bg-white p-2.5 rounded border border-slate-300 font-mono text-[8px] space-y-1">
          <div className="flex justify-between border-b border-slate-200 pb-0.5">
            <span className="text-slate-500">TIER:</span>
            <span className="font-bold text-black">{badge.clearanceLevel}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-0.5">
            <span className="text-slate-500">ASSIGNMENT:</span>
            <span className="font-semibold text-slate-800">{badge.biometrics.primaryLab}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">BIOMETRICS:</span>
            <span className="text-slate-800">{badge.biometrics.height} | {badge.biometrics.weight}</span>
          </div>
        </div>

        {/* Scannable Verification QR Code & Hologram */}
        <div className="flex items-center justify-between gap-3 bg-white p-2 rounded border border-slate-300">
          <div className="p-1 bg-white border border-slate-300 rounded shrink-0">
            <QRCodeSVG value={qrPayload} size={54} level="M" />
          </div>
          <div className="flex-1 font-mono text-[7px] text-slate-600 leading-relaxed">
            <div className="font-bold text-black text-[8px]">DIGITAL VERIFICATION</div>
            <div>VERIFIED CRYPTOGRAPHIC PASS</div>
            <div className="text-emerald-700 font-bold mt-0.5">STATUS: AUTHORIZED</div>
          </div>
          <div className="shrink-0">
            <HologramBadge size={44} />
          </div>
        </div>

        {/* Bottom: Official Oscorp Logo */}
        <div className="pt-2 flex flex-col items-center border-t border-slate-200">
          <OscorpLogo variant="dark" size="sm" />
        </div>
      </div>
    </div>
  );
};
