export interface Crop {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  varieties: string[];
  harvestSeason: string;
  certifications: string[];
  keyStats: { label: string; value: string }[];
}

export interface RegionInfo {
  id: string;
  name: string;
  department: string;
  coordinates: { x: number; y: number }; // Percentage positions for an elegant interactive map
  farmersCount: number;
  mainCrops: string[];
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
}

export interface TraceStep {
  id: number;
  label: string;
  location: string;
  description: string;
  details: string;
  completed: boolean;
}

export interface CorporateProfile {
  pcaName: string;
  pcaMessage: string;
  pcaTitle: string;
  pcaImage: string;
  legalStatus: string;
  capitalSocial: string;
  registrationDuration: string;
  mainOffice: string;
  secondaryOffice: string;
}

