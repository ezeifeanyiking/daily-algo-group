/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  arr.sort((a, b) => a - b);
  let hold = arr[0];
  let newH = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (hold === arr[i]) {
      count++;
    } else {
      if (newH.includes(count)) {
        return false;
      }
      newH.push(count);
      hold = arr[i];
      count = 1;
    }
  }
  if (newH.includes(count)) {
    return false;
  }
  return true;
};
