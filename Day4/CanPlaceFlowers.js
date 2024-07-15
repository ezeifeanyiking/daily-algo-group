var canPlaceFlowers = function (flowerbed, n) {
  let prev = 0;
  let cur = 0;
  let next = 0;
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return n <= 1;
  }
  if (flowerbed.length === 1 && flowerbed[0] === 1) {
    return n === 0;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      cur = flowerbed[i];
      next = flowerbed[i + 1];
      if (cur === 0 && next === 0) {
        n--;
        flowerbed[i] = 1;
      }
      continue;
    }
    if (i === flowerbed.length - 1) {
      cur = flowerbed[i];
      prev = flowerbed[i - 1];
      if (cur === 0 && prev === 0) {
        n--;
        flowerbed[i] = 1;
      }
      continue;
    }
    cur = flowerbed[i];
    next = flowerbed[i + 1];
    prev = flowerbed[i - 1];
    if (cur === 0 && prev === 0 && next === 0) {
      n--;
      flowerbed[i] = 1;
    }
  }

  return n < 1;
};
