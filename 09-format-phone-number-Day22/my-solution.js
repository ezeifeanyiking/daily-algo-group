function formatPhoneNumber(numbers) {
  const formattedNumber = numbers.join("");
  return `(${formattedNumber.slice(0, 3)}) ${formattedNumber.slice(
    3,
    6
  )}-${formattedNumber.slice(6)}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => "(123) 456-7890"
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // => "(519) 555-4468"
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); // => "(345) 501-2527"
