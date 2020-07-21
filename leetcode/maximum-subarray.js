/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  let curr = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {

    curr += nums[i]
    if (curr > max) max = curr;
    if (curr < 0) curr = 0;

  }
  return max;

};