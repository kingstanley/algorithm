function characterParity(digit) {
  intDigit = parseInt(digit);
  //   console.log(isNaN(intDigit));
  if (isNaN(intDigit)) {
    // console.log(typeof intDigit);
    return "not a digit ";
  } else {
    return intDigit % 2 == 0 ? "even" : "odd";
  }
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
