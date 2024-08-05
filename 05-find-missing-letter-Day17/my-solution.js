function findMissingLetter(arr) {
  // Create a string of the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(arr[0]);

  const numberOfIterations = startIndex + arr.length;
  let ommission = "";
  for (let i = startIndex; i < numberOfIterations; i++) {
    if (!arr.includes(alphabet[i])) {
      ommission += alphabet[i];
    }
  }
  return ommission;
}

// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // => "e"
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // => "P"
console.log(findMissingLetter(["t", "u", "v", "w", "x", "z"])); // => "y"
