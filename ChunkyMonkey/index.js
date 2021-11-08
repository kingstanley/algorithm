// function chunkyMonkey(firstArg, secondArg) {
//   return [firstArg.slice(0, secondArg), firstArg.slice(secondArg)];
// }

function chunkyMonkey1(firstArg, secondArg) {
  const nested = [];
  let count = 0;
  while (count < firstArg.length) {
    nested.push(firstArg.slice(count, (count += secondArg)));
  }
  return nested;
}
console.log(chunkyMonkey1(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey1([0, 1, 2, 3, 4, 5], 4));
