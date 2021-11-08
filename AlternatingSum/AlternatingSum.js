function alternatingSum(inputArray) {
  let team1Sum = 0;
  let team2Sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 == 0) {
      // its even and should be in team 1
      team1Sum += inputArray[i];
    } else {
      // its old and should be in team2
      team2Sum += inputArray[i];
    }
  }
  return [team1Sum, team2Sum];
}

console.log(alternatingSum([50, 60, 60, 45, 70]));
