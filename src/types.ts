export type CardStyle = 'style-a' | 'style-b' | 'style-c';

export interface PhotoTransform {
  zoom: number; // 1.0 to 2.5
  panX: number; // -40 to 40 (%)
  panY: number; // -40 to 40 (%)
}

export interface Biometrics {
  height: string;
  weight: string;
  eyes: string;
  hair: string;
  sex: string;
  bloodType: string;
  yearOfBirth: string;
  primaryLab: string;
}

export interface BadgeData {
  presetKey: string;
  fullName: string;
  role: string;
  department: string;
  clearanceLevel: string;
  badgeNumber: string;
  photoUrl: string;
  photoTransform: PhotoTransform;
  biometrics: Biometrics;
  issueDate: string;
  expiryDate: string;
}

export interface PresetProfile {
  id: string;
  name: string;
  title: string;
  badge: BadgeData;
  cardStyle: CardStyle;
}
