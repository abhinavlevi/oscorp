import { PresetProfile } from '../types';
import { PORTRAIT_SVGS } from './portraitSvgs';

export const PRESET_PROFILES: Record<string, PresetProfile> = {
  peter: {
    id: 'peter',
    name: 'Peter Parker (Staff Badge)',
    title: 'Genetics Laboratory - Staff No. A00810',
    cardStyle: 'style-a',
    badge: {
      presetKey: 'peter',
      fullName: 'Peter Parker',
      role: 'STAFF',
      department: 'GENETICS LABORATORY',
      clearanceLevel: 'LEVEL 2',
      badgeNumber: 'A00810',
      photoUrl: PORTRAIT_SVGS.peter,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'10"',
        weight: '167 LBS',
        eyes: 'BROWN',
        hair: 'BROWN',
        sex: 'M',
        bloodType: 'O+',
        yearOfBirth: '1995',
        primaryLab: 'Genetics Laboratory'
      },
      issueDate: '2012-05-14',
      expiryDate: '2015-05-14'
    }
  },
  guevara: {
    id: 'guevara',
    name: 'Rodrigo Guevara (Intern Hologram Pass)',
    title: 'Cross-Species Genetics - Intern',
    cardStyle: 'style-b',
    badge: {
      presetKey: 'guevara',
      fullName: 'Rodrigo Guevara',
      role: 'INTERN',
      department: 'CROSS-SPECIES GENETICS',
      clearanceLevel: 'LEVEL 1',
      badgeNumber: 'A00742',
      photoUrl: PORTRAIT_SVGS.custom,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'11"',
        weight: '172 LBS',
        eyes: 'BROWN',
        hair: 'BLACK',
        sex: 'M',
        bloodType: 'O+',
        yearOfBirth: '1994',
        primaryLab: 'Internship Floor 63'
      },
      issueDate: '2012-04-01',
      expiryDate: '2012-09-01'
    }
  },
  peter_intern: {
    id: 'peter_intern',
    name: 'Peter Parker (Intern Photo Pass)',
    title: 'Cross-Species Genetics - Intern',
    cardStyle: 'style-c',
    badge: {
      presetKey: 'peter_intern',
      fullName: 'Peter Parker',
      role: 'INTERN',
      department: 'GENETICS LABORATORY',
      clearanceLevel: 'LEVEL 2',
      badgeNumber: 'A00810',
      photoUrl: PORTRAIT_SVGS.peter,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'10"',
        weight: '167 LBS',
        eyes: 'BROWN',
        hair: 'BROWN',
        sex: 'M',
        bloodType: 'O+',
        yearOfBirth: '1995',
        primaryLab: 'Genetics Laboratory'
      },
      issueDate: '2012-05-14',
      expiryDate: '2015-05-14'
    }
  },
  osborn: {
    id: 'osborn',
    name: 'Norman Osborn',
    title: 'CEO & Founder - Executive Directorate',
    cardStyle: 'style-a',
    badge: {
      presetKey: 'osborn',
      fullName: 'Norman Osborn',
      role: 'EXECUTIVE',
      department: 'EXECUTIVE DIRECTORATE',
      clearanceLevel: 'LEVEL ALPHA',
      badgeNumber: 'OSC-0001',
      photoUrl: PORTRAIT_SVGS.osborn,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'11"',
        weight: '185 LBS',
        eyes: 'GREEN',
        hair: 'AUBURN',
        sex: 'M',
        bloodType: 'AB+',
        yearOfBirth: '1962',
        primaryLab: 'Penthouse Directorate'
      },
      issueDate: '2002-01-01',
      expiryDate: 'PERMANENT'
    }
  },
  octavius: {
    id: 'octavius',
    name: 'Dr. Otto Octavius',
    title: 'Chief Scientist - Advanced Nuclear Robotics',
    cardStyle: 'style-a',
    badge: {
      presetKey: 'octavius',
      fullName: 'Dr. Otto Octavius',
      role: 'SCIENTIST',
      department: 'ADVANCED NUCLEAR ROBOTICS',
      clearanceLevel: 'LEVEL 5',
      badgeNumber: 'OSC-4421',
      photoUrl: PORTRAIT_SVGS.octavius,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'9"',
        weight: '210 LBS',
        eyes: 'BROWN',
        hair: 'DARK BROWN',
        sex: 'M',
        bloodType: 'A+',
        yearOfBirth: '1965',
        primaryLab: 'Fusion Core Facility 4'
      },
      issueDate: '2004-06-30',
      expiryDate: '2028-12-31'
    }
  },
  connors: {
    id: 'connors',
    name: 'Dr. Curt Connors',
    title: 'Lead Geneticist - Limb Regeneration Lab',
    cardStyle: 'style-a',
    badge: {
      presetKey: 'connors',
      fullName: 'Dr. Curt Connors',
      role: 'STAFF',
      department: 'CROSS-SPECIES GENETICS',
      clearanceLevel: 'LEVEL 4',
      badgeNumber: 'A00412',
      photoUrl: PORTRAIT_SVGS.connors,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '6\'2"',
        weight: '190 LBS',
        eyes: 'HAZEL',
        hair: 'BLONDE',
        sex: 'M',
        bloodType: 'B+',
        yearOfBirth: '1967',
        primaryLab: 'Limb Regeneration Sub-4'
      },
      issueDate: '2011-09-01',
      expiryDate: '2026-09-01'
    }
  },
  stacy: {
    id: 'stacy',
    name: 'Gwen Stacy',
    title: 'Senior Lab Assistant - Bio-Chemistry',
    cardStyle: 'style-b',
    badge: {
      presetKey: 'stacy',
      fullName: 'Gwen Stacy',
      role: 'INTERN',
      department: 'BIO-CHEMISTRY DIVISION',
      clearanceLevel: 'LEVEL 3',
      badgeNumber: 'A00944',
      photoUrl: PORTRAIT_SVGS.stacy,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'7"',
        weight: '128 LBS',
        eyes: 'BLUE',
        hair: 'BLONDE',
        sex: 'F',
        bloodType: 'O-',
        yearOfBirth: '1995',
        primaryLab: 'Bio-Chem Floor 63'
      },
      issueDate: '2012-03-10',
      expiryDate: '2015-03-10'
    }
  },
  custom: {
    id: 'custom',
    name: 'Custom Operative',
    title: 'Oscorp Security & Research Credential',
    cardStyle: 'style-a',
    badge: {
      presetKey: 'custom',
      fullName: 'Employee Name',
      role: 'STAFF',
      department: 'GENETICS LABORATORY',
      clearanceLevel: 'LEVEL 2',
      badgeNumber: 'A00912',
      photoUrl: PORTRAIT_SVGS.custom,
      photoTransform: { zoom: 1.0, panX: 0, panY: 0 },
      biometrics: {
        height: '5\'11"',
        weight: '175 LBS',
        eyes: 'BROWN',
        hair: 'BLACK',
        sex: 'M',
        bloodType: 'O+',
        yearOfBirth: '1998',
        primaryLab: 'Tower Lab 63'
      },
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15'
    }
  }
};
