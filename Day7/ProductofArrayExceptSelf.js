/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let newArr = [];
  let mem = {};
  for (let i = 0; i < nums.length; i++) {
    if (mem[nums[i]]) {
      newArr.push(mem[nums[i]]);
    } else {
      mem[nums[i]] = productOfNumbers(i, nums);
      newArr.push(mem[nums[i]]);
    }
  }
  return newArr;
};
function productOfNumbers(index, nums) {
  return nums.reduce((a, c, i) => {
    if (index == i) return a;
    return a * c;
  }, 1);
}
