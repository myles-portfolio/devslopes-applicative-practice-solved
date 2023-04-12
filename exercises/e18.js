/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;

  // Count asteroids by year
  const asteroidCountsByYear = asteroids.map(function(asteroid) {
    return {
      year: asteroid.discoveryYear,
      count: 1
    };
  }).reduce(function(acc, curr) {
    if (acc[curr.year]) {
      acc[curr.year]++;
    } else {
      acc[curr.year] = 1;
    }
    return acc;
  }, {});

  // Convert asteroidCountsByYear to an array of objects
  const asteroidCountsByYearArray = Object.entries(asteroidCountsByYear)
    .map(([year, count]) => ({ year, count }));

  // Find the year with the largest count
  const maxYear = asteroidCountsByYearArray.reduce(function(acc, curr) {
    return acc.count > curr.count ? acc : curr;
  });

  return parseInt(maxYear.year);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
