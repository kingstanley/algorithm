/**
 * My Solution
 * @param {*} inputArray
 * @returns
 */
function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const diff = Math.abs(inputArray[i] - inputArray[i + 1]);

    maxDifference = diff > maxDifference ? diff : maxDifference;
  }
  return maxDifference;
}

/** Instructor's Solution */
function arrayMaximalAdjacentDifference1(inputArray) {
  let maxDifference = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const diff = Math.abs(inputArray[i - 1] - inputArray[i]);

    maxDifference = diff > maxDifference ? diff : maxDifference;
  }
  return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference1([2, 4, 1, 0]));
