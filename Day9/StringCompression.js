/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let curVal = chars[0];
  let count = 1;
  let pointer = 0;
  for (let i = 1; i < chars.length; i++) {
    let temp = chars[i];
    if (temp === curVal) {
      count++;
      continue;
    } else {
      if (count > 1) {
        let counter = `${count}`.split("");
        for (let j = 0; j < counter.length; j++) {
          chars[++pointer] = `${counter[j]}`;
        }
      }
      chars[++pointer] = temp;
      curVal = temp;
      count = 1;
    }
  }
  if (count > 1) {
    let counter = `${count}`.split("");
    for (let j = 0; j < counter.length; j++) {
      chars[++pointer] = `${counter[j]}`;
    }
  }
  return pointer + 1;
};
