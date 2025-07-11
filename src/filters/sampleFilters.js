// Sample filter functions
// Filters should return true if a feature passes the test

/**
 * Example filter: always returns true (no filtering)
 * @param {GeoJSON.Feature} feature
 * @returns {boolean}
 */
export function alwaysTrue(feature) {
  return true;
}

// Additional filters can be added here
