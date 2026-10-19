import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { OscorpSymbol } from './OscorpLogo';

interface HeaderProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMuted, onToggleMute }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between transition-colors shadow-xs">
      {/* Brand & Crest */}
      <div className="flex items-center gap-3">
        <div className="p-1 rounded-md bg-slate-100 border border-slate-200">
          <OscorpSymbol className="w-6 h-6 text-black" color="#000000" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-black tracking-[0.22em] text-black text-base sm:text-lg uppercase">
              OSCORP
            </span>
            <span className="font-semibold tracking-[0.35em] text-slate-500 text-xs sm:text-sm uppercase -ml-1">
              INDUSTRIES
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Security ID Badge Generator
          </p>
        </div>
      </div>

      {/* Header Actions: Audio Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMute}
          title={isMuted ? 'Turn on sound' : 'Mute sound'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
            isMuted
              ? 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800'
              : 'bg-black border-black text-white shadow-xs hover:bg-slate-800'
          }`}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Sound On</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
