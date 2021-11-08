function adjacentElementProduct(inputArray) {
  let maxProduct = 0;
  //   inputArray.reduce((a, b) => {
  //     console.log("A and B: ", a, " ", b);
  //     const product = a * b;
  //     if (product > maxProduct) maxProduct = product;
  //   });
  for (let i = 0; i < inputArray.length - 1; i++) {
    // console.log("i: ", i);
    const product = inputArray[i] * inputArray[i + 1];
    if (product > maxProduct) maxProduct = product;
  }
  return maxProduct;
}

console.log(adjacentElementProduct([3, 6, -2, -5, 7, 3]));
