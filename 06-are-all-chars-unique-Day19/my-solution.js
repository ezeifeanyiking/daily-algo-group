function areAllCharactersUnique(str) {
  const uniqStr = new Set(str);

  return uniqStr.size === str.length;
}

console.log(areAllCharactersUnique("abcdefg")); // true
console.log(areAllCharactersUnique("abcdefgA")); // true
console.log(areAllCharactersUnique("programming")); // false
console.log(areAllCharactersUnique("")); // true
console.log(areAllCharactersUnique("a")); // true
