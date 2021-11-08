function circleOfNumbers(n, firstNum) {
  const numArray = [];
  const halfNum = n / 2;
  for (let i = 0; i < n; i++) {
    numArray.push(i);
  }
  if (firstNum < halfNum) {
    return numArray[firstNum + halfNum];
  }
  return numArray[firstNum - halfNum];
}

console.log(circleOfNumbers(10, 2));
