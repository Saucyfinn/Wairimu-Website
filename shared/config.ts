/**
 * Shared configuration for Wairimu Station property
 */
export const PROPERTY_COORDINATES = {
  // Wairimu Station, Kaikoura, New Zealand
  // Using general Kaikoura coordinates as specific station coordinates are not publicly available
  latitude: -42.4167,
  longitude: 173.6833,
} as const;

export const PROPERTY_INFO = {
  name: 'Wairimu Station',
  location: 'Kaikoura, New Zealand',
  description: 'Outstanding investment property with proven income potential'
} as const;