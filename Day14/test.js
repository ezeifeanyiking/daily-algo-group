// Calculate the sum of the first 'k' elements
let sum = 0;
for (let i = 0; i < k; i++) {
  sum += nums[i];
}

// Initialize the maximum sum as the sum of the first 'k' elements
let maxSum = sum;

// Use a sliding window to find the maximum sum of any subarray of length 'k'
for (let i = k; i < nums.length; i++) {
  sum += nums[i] - nums[i - k];
  maxSum = Math.max(maxSum, sum);
}

// Return the maximum average
return maxSum / k;
