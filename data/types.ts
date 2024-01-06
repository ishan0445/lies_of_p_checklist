export interface ListType {
  id: string;
  name: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  requirements?: Array<Requirement>;
  description?: string;
}

export interface Requirement {
  id: string;
  name?: string;
  description: string;
  description_2?: string;
  url?: string;
  mapLink?: string;
}

export interface KeyBooleanValuePair {
  [key: string]: boolean;
}
