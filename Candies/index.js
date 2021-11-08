function candies(n, m) {
  candy = Math.floor(m / n);

  return n * candy;
}

console.log(candies(3, 10));
