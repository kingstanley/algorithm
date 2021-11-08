function alphabetSubSequence(inputString) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  inputString = inputString.split("");
  let count = 0;
  for (let i = 0; i < inputString.length - 1; i++) {
    const firstIndex = alphabet.indexOf(inputString[i]);
    const secondIndex = alphabet.indexOf(inputString[i + 1]);
    if (firstIndex < secondIndex) {
      count++;
      //   console.log(
      //     alphabet.indexOf(inputString[i]),
      //     " + ",
      //     alphabet.indexOf(inputString[i + 1])
      //   );
    } else {
      console.log("met a false");
      return false;
    }
  }
  return count >= 1;
}

// console.log(alphabetSubSequence("acdc"));
// console.log(alphabetSubSequence("bxz"));

function alphabetSubSequence2(inputString) {
  inputString = inputString.split("");
  const charValues = [];
  inputString.forEach((value) => {
    charValues.push(value.charCodeAt(0));
  });
  let count = 0;
  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] < charValues[i + 1]) {
      count++;
    } else {
      return false;
    }
  }
  return count >= 1;
}

console.log(alphabetSubSequence2("acdc"));
