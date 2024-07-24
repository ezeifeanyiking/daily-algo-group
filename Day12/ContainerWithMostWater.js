/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let leftH = height[left];
    let rightH = height[right];
    let distance = right - left;
    let minH = Math.min(leftH, rightH);
    let curArea = distance * minH;
    maxArea = Math.max(maxArea, curArea);
    if (leftH > rightH) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
