/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {

function maxBy(array, cb) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  let maxValue = cb(array[0]);
  let maxItem = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue > maxValue) {
      maxValue = currentValue;
      maxItem = array[i];
    }
  }

  return maxItem;
}

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
