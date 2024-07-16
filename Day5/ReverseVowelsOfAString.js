/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let obj = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  let arr = [];
  for (let char of s) {
    if (obj[char]) {
      arr.push(char);
    }
  }
  let result = "";
  for (let char of s) {
    if (obj[char]) {
      result += arr.pop();
    } else {
      result += char;
    }
  }
  return result;
};
