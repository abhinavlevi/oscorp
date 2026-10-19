import { BadgeData, CardStyle } from '../types';
import { PRESET_PROFILES } from '../constants/presets';

// Map presets to their dedicated OpenGraph preview cards
export function getPresetOgImage(presetKey: string): string {
  switch (presetKey) {
    case 'peter':
    case 'peter_intern':
      return '/og-peter.png';
    case 'guevara':
      return '/og-guevara.png';
    case 'osborn':
      return '/og-osborn.png';
    default:
      return '/og-image.png';
  }
}

// Check if current badge is an exact match for preset
export function isExactPresetMatch(badge: BadgeData, style: CardStyle, presetKey: string): boolean {
  const preset = PRESET_PROFILES[presetKey];
  if (!preset) return false;
  if (preset.cardStyle !== style) return false;

  const pb = preset.badge;
  return (
    pb.fullName === badge.fullName &&
    pb.role === badge.role &&
    pb.department === badge.department &&
    pb.clearanceLevel === badge.clearanceLevel &&
    pb.badgeNumber === badge.badgeNumber &&
    pb.photoUrl === badge.photoUrl &&
    pb.photoTransform.zoom === badge.photoTransform.zoom &&
    pb.photoTransform.panX === badge.photoTransform.panX &&
    pb.photoTransform.panY === badge.photoTransform.panY &&
    pb.biometrics.height === badge.biometrics.height &&
    pb.biometrics.weight === badge.biometrics.weight &&
    pb.biometrics.eyes === badge.biometrics.eyes &&
    pb.biometrics.hair === badge.biometrics.hair &&
    pb.biometrics.sex === badge.biometrics.sex &&
    pb.biometrics.bloodType === badge.biometrics.bloodType &&
    pb.biometrics.yearOfBirth === badge.biometrics.yearOfBirth &&
    pb.biometrics.primaryLab === badge.biometrics.primaryLab
  );
}

export interface ShareResult {
  url: string;
  ogImage: string;
  title: string;
  description: string;
}

// Generate smart delta-only URL with OpenGraph metadata
export async function generateShareUrl(
  badge: BadgeData,
  style: CardStyle,
  baseUrl: string = window.location.origin + window.location.pathname
): Promise<ShareResult> {
  const presetKey = badge.presetKey && PRESET_PROFILES[badge.presetKey] ? badge.presetKey : 'custom';
  const basePreset = PRESET_PROFILES[presetKey] || PRESET_PROFILES.peter;
  const ogImage = getPresetOgImage(presetKey);
  const title = `${badge.fullName} // ${badge.role} - Oscorp Security Access Credential`;
  const description = `${badge.fullName} has been granted ${badge.clearanceLevel} clearance at Oscorp Industries (${badge.department}). View verified prop-accurate credential.`;

  // If exact preset match, return ultra-compact URL: e.g. ?p=peter
  if (isExactPresetMatch(badge, style, presetKey)) {
    const params = new URLSearchParams();
    params.set('p', presetKey);
    return {
      url: `${baseUrl}?${params.toString()}`,
      ogImage,
      title,
      description
    };
  }

  const params = new URLSearchParams();
  params.set('p', presetKey);

  if (style !== basePreset.cardStyle) {
    params.set('s', style);
  }

  // Delta fields
  if (badge.fullName !== basePreset.badge.fullName) params.set('n', badge.fullName);
  if (badge.role !== basePreset.badge.role) params.set('r', badge.role);
  if (badge.department !== basePreset.badge.department) params.set('d', badge.department);
  if (badge.clearanceLevel !== basePreset.badge.clearanceLevel) params.set('c', badge.clearanceLevel);
  if (badge.badgeNumber !== basePreset.badge.badgeNumber) params.set('b', badge.badgeNumber);

  // Biometrics diffs
  const bio = badge.biometrics;
  const pBio = basePreset.badge.biometrics;
  if (bio.height !== pBio.height) params.set('bh', bio.height);
  if (bio.weight !== pBio.weight) params.set('bw', bio.weight);
  if (bio.eyes !== pBio.eyes) params.set('be', bio.eyes);
  if (bio.hair !== pBio.hair) params.set('bha', bio.hair);
  if (bio.sex !== pBio.sex) params.set('bs', bio.sex);
  if (bio.bloodType !== pBio.bloodType) params.set('bb', bio.bloodType);
  if (bio.yearOfBirth !== pBio.yearOfBirth) params.set('by', bio.yearOfBirth);
  if (bio.primaryLab !== pBio.primaryLab) params.set('bl', bio.primaryLab);

  // Transform diffs
  if (badge.photoTransform.zoom !== 1.0) params.set('tz', badge.photoTransform.zoom.toFixed(2));
  if (badge.photoTransform.panX !== 0) params.set('tx', Math.round(badge.photoTransform.panX).toString());
  if (badge.photoTransform.panY !== 0) params.set('ty', Math.round(badge.photoTransform.panY).toString());

  // External web image URL preservation only (no cloud uploading or storing of local images)
  if (badge.photoUrl !== basePreset.badge.photoUrl && (badge.photoUrl.startsWith('http://') || badge.photoUrl.startsWith('https://'))) {
    params.set('img', badge.photoUrl);
  }

  return {
    url: `${baseUrl}?${params.toString()}`,
    ogImage,
    title,
    description
  };
}

// Reconstruct badge data and style from URL search params
export function parseShareUrl(search: string): { badge: BadgeData; style: CardStyle } | null {
  if (!search || search.length <= 1) return null;

  try {
    const params = new URLSearchParams(search);

    // 1. Backward compatibility for legacy Base64 JSON `?dossier=...`
    const dossier = params.get('dossier');
    if (dossier) {
      try {
        const jsonStr = atob(dossier);
        const parsed = JSON.parse(jsonStr);
        if (parsed.badge && parsed.style) {
          return { badge: parsed.badge, style: parsed.style };
        }
      } catch (err) {
        console.warn('Legacy dossier parse error:', err);
      }
    }

    // 2. Modern Delta Share format
    const presetKey = params.get('p') || 'peter';
    const baseProfile = PRESET_PROFILES[presetKey] || PRESET_PROFILES.peter;
    const initialBadge = JSON.parse(JSON.stringify(baseProfile.badge)) as BadgeData;
    let initialStyle = baseProfile.cardStyle;

    const styleParam = params.get('s') as CardStyle | null;
    if (styleParam && ['style-a', 'style-b', 'style-c'].includes(styleParam)) {
      initialStyle = styleParam;
    }

    if (params.has('n')) initialBadge.fullName = params.get('n')!;
    if (params.has('r')) initialBadge.role = params.get('r')!;
    if (params.has('d')) initialBadge.department = params.get('d')!;
    if (params.has('c')) initialBadge.clearanceLevel = params.get('c')!;
    if (params.has('b')) initialBadge.badgeNumber = params.get('b')!;

    if (params.has('bh')) initialBadge.biometrics.height = params.get('bh')!;
    if (params.has('bw')) initialBadge.biometrics.weight = params.get('bw')!;
    if (params.has('be')) initialBadge.biometrics.eyes = params.get('be')!;
    if (params.has('bha')) initialBadge.biometrics.hair = params.get('bha')!;
    if (params.has('bs')) initialBadge.biometrics.sex = params.get('bs')!;
    if (params.has('bb')) initialBadge.biometrics.bloodType = params.get('bb')!;
    if (params.has('by')) initialBadge.biometrics.yearOfBirth = params.get('by')!;
    if (params.has('bl')) initialBadge.biometrics.primaryLab = params.get('bl')!;

    if (params.has('tz')) initialBadge.photoTransform.zoom = parseFloat(params.get('tz')!) || 1.0;
    if (params.has('tx')) initialBadge.photoTransform.panX = parseFloat(params.get('tx')!) || 0;
    if (params.has('ty')) initialBadge.photoTransform.panY = parseFloat(params.get('ty')!) || 0;

    if (params.has('img')) {
      initialBadge.photoUrl = params.get('img')!;
    }

    initialBadge.presetKey = presetKey;
    return { badge: initialBadge, style: initialStyle };
  } catch (e) {
    console.error('Error parsing share URL:', e);
    return null;
  }
}
