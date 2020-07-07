/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let count = 0;
  let counting = false;
  for (let num of nums) {
    if (num === 1) {
      if (counting && num === 1 && count < k) return false;
      counting = true;
      count = 0
    }
    if (num === 0 && counting) {
      count++
    }
  }
  return true;
};