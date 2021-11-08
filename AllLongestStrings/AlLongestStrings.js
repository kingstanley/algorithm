function allLongestString(inputArray) {
  let longestString = 0;
  const longestStringArray = [];
  inputArray.forEach((word) => {
    longestString = longestString < word.length ? word.length : longestString;
  });
  inputArray.forEach((word) => {
    if (longestString == word.length) longestStringArray.push(word);
  });
  return longestStringArray;
}

console.log(allLongestString(["aba", "aa", "ad", "vcd", "aba"]));
