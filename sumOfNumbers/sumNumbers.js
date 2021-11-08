function sumTwoNumbers(x, y) {
  return x + y;
}

function sumAllNumbers(...numbers) {
  let sum = 0;

  numbers.map((value, key) => {
    sum += value;
  });
  return sum;
}

console.log(sumTwoNumbers(1, 2));

console.log(sumAllNumbers(1, 2, 3, 4, 5));

function stringDifference(s, t) {
  const sArray = s.split("");
  const tArray = t.split("");
  console.log("sArray: ", sArray);
  console.log("tArray: ", tArray);
  let added;
  for (let i = 0; i < t.length; i++) {
    const foundInA = sArray.find((a) => a == tArray[i]);
    if (!foundInA) {
      added = tArray[i];
    }
    console.log("added: ", added, foundInA);
  }
  return added;
}

console.log(stringDifference("abcd", "dacbe"));
