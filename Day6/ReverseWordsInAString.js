/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let outputStr = "";
  let newStr = s.split(" ");
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] == "") {
      continue;
    } else {
      outputStr += `${newStr[i]} `;
    }
  }
  return outputStr.trim();
};
