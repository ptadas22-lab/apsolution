import { IndustryProfile } from "../types/engine";
import { salonProfile } from "./salon";
import { restaurantProfile } from "./restaurant";
import { clinicProfile } from "./clinic";
import { gymProfile } from "./gym";
import { retailProfile } from "./retail";
import { manufacturingProfile } from "./manufacturing";
import { professionalProfile } from "./professional";
import { genericProfile } from "./other";

const profiles: Record<string, IndustryProfile> = {
  salon: salonProfile,
  spa: salonProfile,
  beauty: salonProfile,
  
  restaurant: restaurantProfile,
  cafe: restaurantProfile,
  food: restaurantProfile,
  dining: restaurantProfile,
  
  clinic: clinicProfile,
  medical: clinicProfile,
  dental: clinicProfile,
  health: clinicProfile,
  
  gym: gymProfile,
  fitness: gymProfile,
  yoga: gymProfile,
  
  retail: retailProfile,
  store: retailProfile,
  ecommerce: retailProfile,
  shop: retailProfile,
  
  manufacturing: manufacturingProfile,
  factory: manufacturingProfile,
  production: manufacturingProfile,
  
  professional: professionalProfile,
  consulting: professionalProfile,
  agency: professionalProfile,
  legal: professionalProfile,
  accounting: professionalProfile
};

export const getIndustryProfile = (category: string): IndustryProfile => {
  const normalized = category.toLowerCase().trim();
  
  // Exact or partial match in keys
  for (const key of Object.keys(profiles)) {
    if (normalized.includes(key)) {
      return profiles[key];
    }
  }

  // Fallback if no match
  return genericProfile;
};
