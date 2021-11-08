function arrayPreviousLess(items) {
  const preLess = [];
  for (let i = 0; i < items.length; i++) {
    if (i == 0) {
      preLess.push(-1);
    }
    if (i > 0) {
      if (items[i - 1] < items[i]) {
        preLess.push(items[i - 1]);
      } else {
        preLess.push(-1);
      }
    }
  }
  return preLess;
}

function arrayPreviousLess2(items) {
  const preLess = [];
  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        preLess.unshift(items[j]);
        break;
      } else if (j === 0) {
        preLess.unshift(-1);
      }
    }
  }
  return preLess;
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5, 9, 7]));
console.log(arrayPreviousLess2([3, 5, 2, 4, 5, 9, 7]));
