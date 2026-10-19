import React, { useState } from 'react';
import { Download, Share2, Loader2, CheckCircle2, RotateCw, Copy, ExternalLink, X } from 'lucide-react';
import { toPng } from 'html-to-image';
import { BadgeData, CardStyle } from '../types';
import { CardStyleA_VerticalStaff } from './cards/CardStyleA_VerticalStaff';
import { CardStyleB_HorizontalIntern } from './cards/CardStyleB_HorizontalIntern';
import { CardStyleC_SpecialProjects } from './cards/CardStyleC_SpecialProjects';
import { soundSystem } from '../services/audio';
import { generateShareUrl, ShareResult } from '../services/share';

interface PreviewStageProps {
  cardStyle: CardStyle;
  badge: BadgeData;
}

export const PreviewStage: React.FC<PreviewStageProps> = ({ cardStyle, badge }) => {
  const [isBackView, setIsBackView] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isSharing, setIsSharing] = useState<boolean>(false);
  const [shareResult, setShareResult] = useState<ShareResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const targetWidth = cardStyle === 'style-a' ? 320 : 500;
  const targetHeight = cardStyle === 'style-a' ? 490 : 315;

  // High-Resolution Export Handler
  const handleDownload = async () => {
    const cardElement = document.getElementById('oscorp-id-card');
    if (!cardElement) return;

    try {
      setIsDownloading(true);
      soundSystem.playAuthHumAndChime();

      // Wait a moment for fonts and rendering stabilization
      await new Promise((resolve) => setTimeout(resolve, 200));

      const dataUrl = await toPng(cardElement, {
        pixelRatio: 3, // 300+ DPI equivalent crispness
        cacheBust: true,
        quality: 1.0,
        width: targetWidth,
        height: targetHeight,
        canvasWidth: targetWidth * 3,
        canvasHeight: targetHeight * 3,
        style: {
          transform: 'none',
          transformOrigin: '0 0',
          margin: '0',
          padding: '0',
          maxWidth: 'none',
          maxHeight: 'none',
          width: `${targetWidth}px`,
          height: `${targetHeight}px`,
          boxShadow: 'none'
        }
      });

      const sanitizedName = (badge.fullName || 'OPERATIVE').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
      const side = isBackView ? 'BACK' : 'FRONT';
      const fileName = `OSCORP_${cardStyle.toUpperCase()}_${sanitizedName}_${side}.png`;

      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Badge image export failed:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  // Smart Delta Short-URL Share Handler
  const handleShare = async () => {
    try {
      setIsSharing(true);
      soundSystem.playTerminalChirp(1000, 0.04);

      const result = await generateShareUrl(badge, cardStyle);
      setShareResult(result);
      setCopied(false);
    } catch (err) {
      console.error('Share generation error:', err);
    } finally {
      setIsSharing(false);
    }
  };

  const handleCopyLink = () => {
    if (!shareResult) return;
    navigator.clipboard.writeText(shareResult.url);
    soundSystem.playTerminalChirp(1400, 0.05);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Social Share URL builders
  const getTwitterShareUrl = () => {
    if (!shareResult) return '';
    const tweetText = `Generated my official Oscorp Industries ${badge.role} access badge for ${badge.fullName} (${badge.department})! 🔬⚡`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(shareResult.url)}`;
  };

  const getLinkedInShareUrl = () => {
    if (!shareResult) return '';
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareResult.url)}`;
  };

  return (
    <div className="flex flex-col items-center w-full space-y-5">
      {/* Top Status & View Selector Controls */}
      <div className="w-full flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-slate-700">
            Preview
          </span>
        </div>

        {/* Flip Front / Back Button */}
        <button
          type="button"
          onClick={() => {
            soundSystem.playTerminalChirp(850, 0.03);
            setIsBackView(!isBackView);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-700 hover:border-black transition-all cursor-pointer shadow-2xs font-medium"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>{isBackView ? 'Show Front' : 'Show Back'}</span>
        </button>
      </div>

      {/* Preview Stage Card Wrapper: Clean studio pedestal with subtle neutral lighting */}
      <div className="relative w-full min-h-[520px] bg-gradient-to-b from-[#e8edf2] to-[#dfe5eb] border border-slate-300/80 rounded-2xl p-6 sm:p-12 flex items-center justify-center shadow-inner overflow-hidden">
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* Responsive Scaler Wrapper for preview display */}
        <div className="flex items-center justify-center max-w-full overflow-visible transition-transform duration-200 origin-center scale-[0.66] xs:scale-[0.80] sm:scale-95 md:scale-100">
          {/* Isolated card DOM container: exact physical card dimensions, zero border bleed, zero red/green line artifacts */}
          <div
            id="oscorp-id-card"
            className="relative shrink-0 overflow-hidden border-0 ring-0 outline-none rounded-[20px]"
            style={{
              width: `${targetWidth}px`,
              height: `${targetHeight}px`,
              margin: '0 auto',
              border: 'none',
              outline: 'none',
              boxShadow: '0 25px 45px -10px rgba(0, 0, 0, 0.28), 0 10px 20px -5px rgba(0, 0, 0, 0.15)'
            }}
          >
            {cardStyle === 'style-a' && <CardStyleA_VerticalStaff badge={badge} isBackView={isBackView} />}
            {cardStyle === 'style-b' && <CardStyleB_HorizontalIntern badge={badge} isBackView={isBackView} />}
            {cardStyle === 'style-c' && <CardStyleC_SpecialProjects badge={badge} isBackView={isBackView} />}
          </div>
        </div>
      </div>

      {/* Action Buttons Directly Below Card */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Primary Download Button */}
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-sm tracking-wide uppercase shadow-md transition-all cursor-pointer disabled:opacity-50"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-white" />
              <span>Download ID Card</span>
            </>
          )}
        </button>

        {/* Secondary Share Button */}
        <button
          type="button"
          onClick={handleShare}
          disabled={isSharing}
          className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-black font-semibold text-sm tracking-wide uppercase shadow-xs transition-all cursor-pointer disabled:opacity-50"
        >
          {isSharing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-black" />
              <span>Generating Link...</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-black" />
              <span>Share Badge</span>
            </>
          )}
        </button>
      </div>

      {/* Share Modal with OpenGraph Card Preview and Direct Social Links */}
      {shareResult && (
        <div className="w-full bg-white border border-slate-300 rounded-2xl p-5 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Share Link Created</span>
            </div>
            <button
              onClick={() => setShareResult(null)}
              className="text-slate-400 hover:text-black p-1 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Social Card Preview Thumbnail */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col sm:flex-row gap-3 items-center">
            <img
              src={shareResult.ogImage}
              alt="Social Card Preview"
              className="w-full sm:w-48 h-auto rounded-lg border border-slate-300 object-cover shadow-2xs"
            />
            <div className="flex-1 text-left space-y-1">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Preview Card
              </div>
              <div className="text-xs font-bold text-slate-900 leading-snug">
                {shareResult.title}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                {shareResult.description}
              </p>
            </div>
          </div>

          {/* URL Input & Copy Button */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareResult.url}
              className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono text-slate-900 selection:bg-slate-900 selection:text-white select-all"
            />
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-4 py-2 bg-black hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-all cursor-pointer shrink-0 shadow-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          {/* Direct 1-Click Social Sharing Links */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Share:</span>
              <a
                href={getTwitterShareUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium inline-flex items-center gap-1 transition-colors"
              >
                Post on X <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
              </a>
              <a
                href={getLinkedInShareUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium inline-flex items-center gap-1 transition-colors"
              >
                LinkedIn <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
              </a>
            </div>

            <div className="text-xs text-slate-500">
              Every image is browser loaded (and we won't save any images anywhere)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
