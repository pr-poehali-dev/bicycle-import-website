export interface BikeSpecs {
  frame: string;
  fork: string;
  brakes: string;
  crankset: string;
  motor?: string;
  battery?: string;
  display?: string;
}

export interface Bike {
  id: number;
  name: string;
  price: number;
  category: string;
  material: string;
  groupset: string;
  weight: number;
  speeds: number;
  wheelSize: number;
  image: string;
  description: string;
  features: string[];
  specs: BikeSpecs;
}

export interface Filters {
  priceRange: [number, number];
  materials: string[];
  groupsets: string[];
  categories: string[];
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface SizeGuide {
  [key: string]: string;
}
