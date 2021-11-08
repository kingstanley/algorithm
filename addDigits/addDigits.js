function addTowDigits(digits) {
  let nums = digits.toString().split("");
  return nums.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
}
function addDigits(digits) {
  let sum = 0;
  remainder = digits;

  while (remainder > 0) {
    const value = remainder % 10;
    sum += value;
    remainder = Math.trunc(remainder / 10);
    // console.log("Value: ", value, " Remainder: ", remainder);
  }
  //   let nums = digits.toString().split("");
  //   nums.map((value, key) => {
  //     sum += parseInt(value);
  //   });
  return sum;
}

// console.log(addTowDigits(29));
console.log(addDigits(123));
