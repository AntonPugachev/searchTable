export interface Countries {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  cioc?: string;
  gini?: { [key: string]: number };
  fifa?: string;
  borders?: string[];
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export type Side = 'right' | 'left';

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export type Continent = 'Oceania' | 'Europe' | 'Africa' | 'North America' | 'South America' | 'Asia' | 'Antarctica';

export interface Currencies {
  [key: string]: Aed;
}

export interface Aed {
  name: string;
  symbol?: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export type Region = 'Oceania' | 'Europe' | 'Africa' | 'Americas' | 'Asia' | 'Antarctic';

export type StartOfWeek = 'monday' | 'sunday' | 'saturday';

export type Status = 'officially-assigned' | 'user-assigned';
