function findFirstNonRepeatingCharacter(str) {
  //
  const obj = {};
  for (let el of str) {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  }
  const newArray = Object.entries(obj);
  let nonRepeatingStr;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i][1] === 1) {
      nonRepeatingStr = newArray[i][0];
      break;
    } else {
      nonRepeatingStr = "null";
    }
  }
  return nonRepeatingStr;
}

console.log(findFirstNonRepeatingCharacter("aabccdeff")); // should return 'b'
console.log(findFirstNonRepeatingCharacter("aabbcc")); // should return null
console.log(findFirstNonRepeatingCharacter("abcdef")); // should return 'a'
