import { DistrictInfrastructureAudit } from "./districts";

export interface LocalizedBuildingData {
  name: string;
  architect?: string;
  developer?: string;
  district: string;
  type: string;
  description: string;
  architecturalHighlights: string[];
  historicalNote?: string;
  structuralSystem?: string;
}

export interface LocalizedSubZone {
  name: string;
  character: string;
  pricePerSqFtAed?: string;
  bestFor: string;
}

export interface LocalizedTransitAnalysis {
  highwayAccess?: string;
  rushHourBottleneck?: string;
  publicTransit?: string;
  walkabilityScore?: string;
}

export interface LocalizedDistrictData {
  name: string;
  developer?: string;
  overview: string;
  description: string;
  urbanConcept?: string;
  keyLandmarks: string[];
  subZones?: LocalizedSubZone[];
  transitAnalysis?: Partial<LocalizedTransitAnalysis>;
  infrastructureAudit?: Partial<DistrictInfrastructureAudit>;
  investmentPros: string[];
  investmentRisks?: string[];
}
