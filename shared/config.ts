/**
 * Shared configuration for Wairimu Station property
 */
export const PROPERTY_COORDINATES = {
  // Wairimu Station, Kaikoura, New Zealand
  // Using general Kaikoura coordinates as specific station coordinates are not publicly available
  latitude: -42.4167,
  longitude: 173.6833,
  // Google Earth view parameters for optimal viewing
  altitude: 500, // meters above ground
  range: 2000, // viewing distance
  tilt: 35, // degrees
  heading: 0, // degrees
  roll: 45 // degrees
} as const;

export const GOOGLE_EARTH_CONFIG = {
  baseUrl: 'https://earth.google.com/web',
  /**
   * Generates a Google Earth URL with the specified coordinates and view parameters
   */
  generateUrl: (coords = PROPERTY_COORDINATES) => {
    const { latitude, longitude, altitude, range, tilt, heading, roll } = coords;
    return `${GOOGLE_EARTH_CONFIG.baseUrl}/@${latitude},${longitude},${altitude}a,${range}d,${tilt}y,${heading}h,${roll}t,0r`;
  }
} as const;

export const PROPERTY_INFO = {
  name: 'Wairimu Station',
  location: 'Kaikoura, New Zealand',
  description: 'Outstanding investment property with proven income potential'
} as const;