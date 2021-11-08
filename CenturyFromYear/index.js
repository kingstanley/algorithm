function centuryFromYear(year) {
  let century = Math.floor(year / 100);
  const remainder = year % 100;

  return remainder > 0 ? century + 1 : century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
