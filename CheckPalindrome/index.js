function checkPalindrome(inputString) {
  const lowerCase = inputString.toLowerCase();
  const reversed = lowerCase.split("").reverse().join("");

  return lowerCase == reversed;
}

console.log(checkPalindrome("aaBaA"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
