function boxBlur(params) {
  //   params = flatenArray(params);
  let centerPixel = 0;
  let totalPixel = 0;
  params.forEach((pixel) => {
    totalPixel += parseInt(pixel);
  });

  return [[Math.trunc(totalPixel / params.length)]];
}

function flatenArray(params) {
  const flatArray = [];
  for (let i = 0; i < params.length; i++) {
    const value = flateen(params[i]);
    flatArray.push(value);
  }
  function flateen(params) {
    if (Array.isArray(params)) {
      flateen(params);
    } else {
      return params;
    }
  }
  return flatArray;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
