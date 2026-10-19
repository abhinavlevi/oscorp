import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { CardStyle, BadgeData } from './types';
import { PRESET_PROFILES } from './constants/presets';
import { Header } from './components/Header';
import { EditorPanel } from './components/EditorPanel';
import { PreviewStage } from './components/PreviewStage';
import { soundSystem } from './services/audio';
import { parseShareUrl, getPresetOgImage } from './services/share';

export function App() {
  const [cardStyle, setCardStyle] = useState<CardStyle>('style-a');
  const [badge, setBadge] = useState<BadgeData>(PRESET_PROFILES.peter.badge);
  const [isMuted, setIsMuted] = useState<boolean>(soundSystem.getMuted());

  // Initialize from Share URL if present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      const parsed = parseShareUrl(window.location.search);
      if (parsed) {
        setBadge(parsed.badge);
        setCardStyle(parsed.style);
      }
    }
  }, []);

  // Synchronize document title and OpenGraph / SEO meta tags dynamically
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const pageTitle = `${badge.fullName} // ${badge.role} - Oscorp Security ID Credential`;
    const pageDesc = `${badge.fullName} - ${badge.department} (${badge.clearanceLevel}). Verified prop-accurate Oscorp Industries access badge from The Amazing Spider-Man with optical QR verification.`;
    const ogImg = window.location.origin + getPresetOgImage(badge.presetKey || 'custom');

    document.title = pageTitle;

    // Helper to update or create meta tags
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'title', pageTitle);
    setMeta('name', 'description', pageDesc);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDesc);
    setMeta('property', 'og:image', ogImg);
    setMeta('property', 'og:image:secure_url', ogImg);
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDesc);
    setMeta('name', 'twitter:image', ogImg);
  }, [badge]);

  const handleToggleMute = () => {
    const nextMuted = soundSystem.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleApplyPreset = (presetKey: string) => {
    const profile = PRESET_PROFILES[presetKey];
    if (!profile) return;
    setBadge(JSON.parse(JSON.stringify(profile.badge)));
    setCardStyle(profile.cardStyle);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Sticky Minimal Header */}
      <Header isMuted={isMuted} onToggleMute={handleToggleMute} />

      {/* Main Two-Column Studio Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Editor Form Panel */}
          <section className="lg:col-span-5 order-2 lg:order-1">
            <EditorPanel
              cardStyle={cardStyle}
              onChangeStyle={setCardStyle}
              badge={badge}
              onChangeBadge={setBadge}
              onApplyPreset={handleApplyPreset}
            />
          </section>

          {/* Right Column: Prominent Preview Stage */}
          <section className="lg:col-span-7 order-1 lg:order-2 lg:sticky lg:top-24">
            <PreviewStage cardStyle={cardStyle} badge={badge} />
          </section>
        </div>
      </main>

      {/* Single-Line Corporate Signature Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs font-mono tracking-widest text-slate-400 uppercase">
        OSCORP INDUSTRIES - INNOVATION FOR A SAFER TOMORROW
      </footer>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
