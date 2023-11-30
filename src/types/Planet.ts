export interface Planet {
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climates: string[];
  gravity: string;
  terrains: string[];
  surfaceWater: number;
  population: number;
  residentConnection: {totalCount: number};
  filmConnection: {totalCount: number};
  created: string;
  edited: string;
  id: string;
}
