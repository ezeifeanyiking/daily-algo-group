function mergeAlternately(word1, word2) {
  const lenOfWord1 = word1.length;
  const lenOfWord2 = word2.length;
  const lenOfLongestWord = lenOfWord1 > lenOfWord2 ? lenOfWord1 : lenOfWord2;
  let newStr = "";
  for (let i = 0; i < lenOfLongestWord; i++) {
    newStr += word1[i] + word2[i];
  }
  return newStr.split("undefined").join("");
}
