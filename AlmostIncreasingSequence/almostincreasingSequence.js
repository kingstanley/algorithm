function almostIncreasingSequence(sequence) {
  const s = [];
  for (let i = 0; i < sequence.length; i++) {
    // const removed = sequence.pop();
    // console.log("Sequence: ", removed);
    //     let itsSequence = false;
    //     for (let j = 0; j < sequence.length - 1; j++) {
    //       console.log(sequence[j], " ", sequence[j + 1]);
    //       if (sequence[j] <= sequence[j + 1]) {
    //         itsSequence = true;
    //       } else {
    //         itsSequence = false;
    //         return false;
    //       }
    //     }
    //     if (itsSequence) {
    //       return true;
    //     } else {
    //       sequence.unshift(removed);
    //     }
  }
  //   return false;
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (sequence[i] < sequence[i - 2] && sequence[i + 1] < sequence[i - 1]) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
