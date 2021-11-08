function caseInsensitivePalindrome(inputString) {
  const lowerCase = inputString.toLowerCase();

  const reversed = lowerCase.split("").reverse().join("");

  return lowerCase === reversed;
}

console.log(caseInsensitivePalindrome("AaBaA"));
console.log(caseInsensitivePalindrome("abac"));
