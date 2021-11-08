function avoidObstacles(params) {
  params.sort((a, b) => a - b);
  const largetInputVal = params[params.length - 1];
  for (let i = 1; i < largetInputVal + 1; i++) {
    if (params.every((element) => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([3, 5, 6, 7, 9, 12]));
