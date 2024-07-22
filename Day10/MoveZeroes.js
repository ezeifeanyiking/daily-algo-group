/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //[0,1,0,3,12]
  function compareNumbers(a, b) {
    console.log(a, b);
    if (a == 0) {
      return 1;
    } else if (b == 0) {
      return -1;
    } else {
      return 0;
    }
  }
  nums.sort(compareNumbers);
};
