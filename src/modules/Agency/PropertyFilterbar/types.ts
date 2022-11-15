import { IRange, Surface } from "@app/types";

type RoomFilter = {
  bedrooms: number;
  kitchens: number;
  livingRooms: number;
};

type ParkingFilter = {
  indoor: boolean;
  outdoor: boolean;
  spaces: number;
};

type ExteriorFilter = {
  types: string[];
  garages: number;
};

export type PropertyFilter = {
  isConstruction?: boolean;
  rate?: number;
  budget?: IRange;
  propertyTypes?: string[];
  locations?: string[];
  amenities?: string[];
  rooms?: RoomFilter;
  energy?: string[];
  heater?: string[][];
  parking?: ParkingFilter;
  habitableSurface?: Surface;
  landSurface?: Surface;
  exterior?: ExteriorFilter;
  localActivity?: string[];
  locationType?: string[];
  nearbyPlaces: string[];
};
