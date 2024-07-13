function solution(str1, str2) {
  let str1Len = str1.length;
  let str2Len = str2.length;

  if (str2Len > str1Len) {
    return solution(str2, str1);
  }

  if (str1 === str2) {
    return str1;
  }
  let offset = str1.substring(0, str2.length);
  let rem = str1.substring(str2.length);

  if (offset === str2) {
    return solution(rem, str2);
  }

  return "";
}

console.log(solution("ABCABC", "ABC"));
