/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let count = 0;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let target = k - nums[left];
    if (nums[right] === target) {
      left++;
      right--;
      count++;
    } else if (nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};
