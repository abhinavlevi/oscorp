import React, { useState } from 'react';
import {
  Camera,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Lock,
  UserCheck
} from 'lucide-react';
import { BadgeData, CardStyle } from '../types';
import { PRESET_PROFILES } from '../constants/presets';
import { PORTRAIT_SVGS } from '../constants/portraitSvgs';
import { soundSystem } from '../services/audio';

interface EditorPanelProps {
  cardStyle: CardStyle;
  onChangeStyle: (style: CardStyle) => void;
  badge: BadgeData;
  onChangeBadge: (badge: BadgeData) => void;
  onApplyPreset: (presetKey: string) => void;
}

const DEPARTMENTS = [
  'GENETICS LABORATORY',
  'CROSS-SPECIES GENETICS',
  'ADVANCED NUCLEAR ROBOTICS',
  'BIO-CHEMISTRY DIVISION',
  'LIMB REGENERATION LAB',
  'EXECUTIVE DIRECTORATE',
  'MILITARY BIO-TECH',
  'AEROSPACE DIVISION',
  'SPECIAL PROJECTS DIVISION'
];

const CLEARANCE_LEVELS = [
  'LEVEL ALPHA',
  'LEVEL 5',
  'LEVEL 4',
  'LEVEL 3',
  'LEVEL 2',
  'LEVEL 1'
];

export const EditorPanel: React.FC<EditorPanelProps> = ({
  cardStyle,
  onChangeStyle,
  badge,
  onChangeBadge,
  onApplyPreset
}) => {
  const [showFraming, setShowFraming] = useState<boolean>(true);
  const [showBiometrics, setShowBiometrics] = useState<boolean>(false);

  // File upload handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    soundSystem.playTerminalChirp(900, 0.05);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onChangeBadge({
          ...badge,
          photoUrl: result,
          photoTransform: { zoom: 1.0, panX: 0, panY: 0 }
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Reset photo to preset default
  const handleResetPhoto = () => {
    soundSystem.playTerminalChirp(600, 0.05);
    const defaultPortrait =
      badge.presetKey && PORTRAIT_SVGS[badge.presetKey as keyof typeof PORTRAIT_SVGS]
        ? PORTRAIT_SVGS[badge.presetKey as keyof typeof PORTRAIT_SVGS]
        : PORTRAIT_SVGS.peter;

    onChangeBadge({
      ...badge,
      photoUrl: defaultPortrait,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 }
    });
  };

  // Framing transform updates
  const updateTransform = (key: 'zoom' | 'panX' | 'panY', value: number) => {
    onChangeBadge({
      ...badge,
      photoTransform: {
        ...badge.photoTransform,
        [key]: value
      }
    });
  };

  const handleResetFraming = () => {
    soundSystem.playTerminalChirp(700, 0.04);
    onChangeBadge({
      ...badge,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 }
    });
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-6 text-slate-800">
      {/* 1. Card Style Selector */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Badge Style
        </label>
        <div className="grid grid-cols-3 gap-2">
          {/* Style A: Staff Badge (Vertical) */}
          <button
            type="button"
            onClick={() => {
              soundSystem.playSwitchTone();
              onChangeStyle('style-a');
            }}
            className={`px-2.5 py-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardStyle === 'style-a'
                ? 'bg-black border-black text-white shadow-xs font-bold'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-black'
            }`}
          >
            <div className="font-bold text-xs leading-tight">Staff Badge</div>
            <div className={`text-[10px] mt-0.5 ${cardStyle === 'style-a' ? 'text-slate-300' : 'text-slate-500'}`}>
              Vertical
            </div>
          </button>

          {/* Style B: Intern Pass (Hologram) */}
          <button
            type="button"
            onClick={() => {
              soundSystem.playSwitchTone();
              onChangeStyle('style-b');
            }}
            className={`px-2.5 py-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardStyle === 'style-b'
                ? 'bg-black border-black text-white shadow-xs font-bold'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-black'
            }`}
          >
            <div className="font-bold text-xs leading-tight">Intern Pass</div>
            <div className={`text-[10px] mt-0.5 ${cardStyle === 'style-b' ? 'text-slate-300' : 'text-slate-500'}`}>
              Hologram
            </div>
          </button>

          {/* Style C: Photo Pass */}
          <button
            type="button"
            onClick={() => {
              soundSystem.playSwitchTone();
              onChangeStyle('style-c');
            }}
            className={`px-2.5 py-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardStyle === 'style-c'
                ? 'bg-black border-black text-white shadow-xs font-bold'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-black'
            }`}
          >
            <div className="font-bold text-xs leading-tight">Photo Pass</div>
            <div className={`text-[10px] mt-0.5 ${cardStyle === 'style-c' ? 'text-slate-300' : 'text-slate-500'}`}>
              Horizontal
            </div>
          </button>
        </div>
      </div>

      {/* 2. Character Presets Dropdown */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 space-y-2">
        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5 text-black" /> Preset Employee
        </label>
        <div className="relative">
          <select
            value={badge.presetKey}
            onChange={(e) => {
              soundSystem.playTerminalChirp(800, 0.05);
              onApplyPreset(e.target.value);
            }}
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-black cursor-pointer appearance-none pr-8 shadow-2xs"
          >
            {Object.entries(PRESET_PROFILES).map(([key, p]) => (
              <option key={key} value={key} className="bg-white text-slate-900">
                {p.name} — {p.title}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
        </div>
      </div>

      {/* 3. Primary Identification Inputs */}
      <div className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={badge.fullName}
              onChange={(e) => onChangeBadge({ ...badge, fullName: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black shadow-2xs font-medium"
              placeholder="e.g. Peter Parker"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Role
            </label>
            <input
              type="text"
              value={badge.role}
              onChange={(e) => onChangeBadge({ ...badge, role: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black uppercase shadow-2xs font-medium"
              placeholder="e.g. STAFF / INTERN"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Department */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Department
            </label>
            <div className="relative">
              <select
                value={badge.department}
                onChange={(e) => onChangeBadge({ ...badge, department: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black appearance-none pr-8 cursor-pointer shadow-2xs font-medium"
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept} className="bg-white text-slate-900">
                    {dept}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Clearance Level */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Clearance Level
            </label>
            <div className="relative">
              <select
                value={badge.clearanceLevel}
                onChange={(e) => onChangeBadge({ ...badge, clearanceLevel: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 font-bold focus:bg-white focus:outline-none focus:border-black appearance-none pr-8 cursor-pointer shadow-2xs"
              >
                {CLEARANCE_LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl} className="bg-white text-slate-900">
                    {lvl}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Badge Serial Number */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Badge Number
          </label>
          <input
            type="text"
            value={badge.badgeNumber}
            onChange={(e) => onChangeBadge({ ...badge, badgeNumber: e.target.value })}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:outline-none focus:border-black shadow-2xs"
            placeholder="e.g. A00810 or A00742"
          />
        </div>
      </div>

      {/* 4. Photo Upload & Adjustments */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-black" /> Photo
          </span>
          <button
            type="button"
            onClick={handleResetPhoto}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-black cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset Photo
          </button>
        </div>

        {/* Upload Row */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-16 rounded border border-slate-300 bg-white overflow-hidden shrink-0 flex items-center justify-center shadow-xs">
            <img
              src={badge.photoUrl}
              alt="Thumbnail"
              className="w-full h-full object-cover"
              style={{
                transform: `scale(${badge.photoTransform.zoom}) translate(${badge.photoTransform.panX}%, ${badge.photoTransform.panY}%)`
              }}
            />
          </div>

          <div className="flex-1 space-y-1">
            <label className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 bg-black hover:bg-slate-800 text-white rounded-lg text-xs font-medium cursor-pointer transition-all shadow-xs">
              <Camera className="w-3.5 h-3.5" />
              <span>Upload Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
            <p className="text-[11px] text-slate-500 leading-tight">
              Instant preview. PNG, JPG or WebP supported.
            </p>
          </div>
        </div>

        {/* Collapsible Framing Controls */}
        <div className="border-t border-slate-200 pt-3">
          <button
            type="button"
            onClick={() => {
              soundSystem.playTerminalChirp(750, 0.03);
              setShowFraming(!showFraming);
            }}
            className="flex items-center justify-between w-full text-xs text-slate-600 hover:text-black cursor-pointer font-medium"
          >
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-black" />
              Adjust Position &amp; Zoom
            </span>
            {showFraming ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showFraming && (
            <div className="space-y-3 pt-3">
              {/* Zoom Slider */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Zoom</span>
                  <span className="text-black font-semibold">{badge.photoTransform.zoom.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.05"
                  value={badge.photoTransform.zoom}
                  onChange={(e) => updateTransform('zoom', parseFloat(e.target.value))}
                  className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Horizontal Shift */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Horizontal</span>
                  <span className="text-black font-semibold">{Math.round(badge.photoTransform.panX)}%</span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="40"
                  step="1"
                  value={badge.photoTransform.panX}
                  onChange={(e) => updateTransform('panX', parseFloat(e.target.value))}
                  className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Vertical Shift */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Vertical</span>
                  <span className="text-black font-semibold">{Math.round(badge.photoTransform.panY)}%</span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="40"
                  step="1"
                  value={badge.photoTransform.panY}
                  onChange={(e) => updateTransform('panY', parseFloat(e.target.value))}
                  className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleResetFraming}
                  className="text-xs text-slate-500 hover:text-black cursor-pointer font-medium"
                >
                  Reset Position
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Privacy Notice */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 space-y-1.5">
        <div className="flex items-center gap-1.5 text-slate-800 text-xs font-semibold">
          <Lock className="w-3.5 h-3.5 text-slate-700 shrink-0" />
          <span>Privacy</span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Every image is browser loaded (and we won't save any images anywhere).
        </p>
      </div>

      {/* 6. Collapsible Optional Details */}
      <div className="border border-slate-200 rounded-xl p-3.5 bg-white">
        <button
          type="button"
          onClick={() => {
            soundSystem.playTerminalChirp(700, 0.03);
            setShowBiometrics(!showBiometrics);
          }}
          className="flex items-center justify-between w-full text-xs text-slate-700 hover:text-black cursor-pointer font-medium"
        >
          <span className="flex items-center gap-1.5">
            Additional Details (Optional)
          </span>
          {showBiometrics ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showBiometrics && (
          <div className="pt-3 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Height</label>
                <input
                  type="text"
                  value={badge.biometrics.height}
                  onChange={(e) =>
                    onChangeBadge({
                      ...badge,
                      biometrics: { ...badge.biometrics, height: e.target.value }
                    })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Weight</label>
                <input
                  type="text"
                  value={badge.biometrics.weight}
                  onChange={(e) =>
                    onChangeBadge({
                      ...badge,
                      biometrics: { ...badge.biometrics, weight: e.target.value }
                    })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Eyes</label>
                <input
                  type="text"
                  value={badge.biometrics.eyes}
                  onChange={(e) =>
                    onChangeBadge({
                      ...badge,
                      biometrics: { ...badge.biometrics, eyes: e.target.value }
                    })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Hair</label>
                <input
                  type="text"
                  value={badge.biometrics.hair}
                  onChange={(e) =>
                    onChangeBadge({
                      ...badge,
                      biometrics: { ...badge.biometrics, hair: e.target.value }
                    })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Blood Type</label>
                <input
                  type="text"
                  value={badge.biometrics.bloodType}
                  onChange={(e) =>
                    onChangeBadge({
                      ...badge,
                      biometrics: { ...badge.biometrics, bloodType: e.target.value }
                    })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Birth Year</label>
                <input
                  type="text"
                  value={badge.biometrics.yearOfBirth}
                  onChange={(e) =>
                    onChangeBadge({
                      ...badge,
                      biometrics: { ...badge.biometrics, yearOfBirth: e.target.value }
                    })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-500 mb-1">Lab Location</label>
              <input
                type="text"
                value={badge.biometrics.primaryLab}
                onChange={(e) =>
                  onChangeBadge({
                    ...badge,
                    biometrics: { ...badge.biometrics, primaryLab: e.target.value }
                  })
                }
                className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-black"
                placeholder="e.g. Tower Lab 63-B"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
