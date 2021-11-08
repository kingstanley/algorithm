// The argorithim tries to get the median value of an array of numbers

function absoluteValueSumMinimization(a) {
  const isEven = a.length % 2 === 0;
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValueSumMinimization([2, 4, 7]));
console.log(absoluteValueSumMinimization([2, 4, 7, 6]));
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6, 8]));
