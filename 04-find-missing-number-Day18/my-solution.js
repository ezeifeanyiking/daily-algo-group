function findMissingNumber(arr) {
  // Calculate the length of the complete array including the missing number
  let n = arr.length + 1;
  let expectedResult = (n * (n + 1)) / 2;
  let actualResult = 0;
  for (let i = 0; i < arr.length; i++) {
    actualResult += arr[i];
  }

  return expectedResult - actualResult;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])); // 5
console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])); // 9
console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])); // 7
