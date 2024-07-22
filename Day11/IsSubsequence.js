/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let str = s;
  let index = 0;
  if (s === "") return true;
  for (let char of t) {
    if (str[index] === char) {
      index++;
      if (str.length === index) {
        return true;
      }
    }
  }
  return false;
};
