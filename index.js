// https://leetcode.com/problems/maximum-subarray/submissions/941457409/

//BRUTE_FORCE with 3 loops :: TC - O(n^3) SC - O(1)
var bruteForceSolution = function () {
  let maxSum = this.nums[0];
  let arrayLength = this.nums.length;
  if (this.nums.length > 1) {
    for (let x = 0; x < arrayLength; x++) {
      for (let y = x; y < arrayLength; y++) {
        let sum = 0;
        for (let k = x; k <= y; k++) {
          sum += this.nums[k];
        }
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  return maxSum;
};

//BETTER APPROACH with 2 loops :: TC - O(n^2) SC - O(1)
var betterSolution = function () {
  let maxSum = this.nums[0];
  const arrLength = this.nums.length;
  if (arrLength > 1) {
    for (let x = 0; x < arrLength; x++) {
      let sum = this.nums[x];
      for (let y = x + 1; y < arrLength; y++) {
        sum += this.nums[y];
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  return maxSum;
};

// OPTIMAL SOLUTION :: KADANE'S ALGORITH :: TC - O(n) SC - O(1)
var kadanesSolution = function () {
  let maxSum = -Infinity;
  let sum = 0;
  if (this.nums.length) {
    this.nums.forEach((x) => {
      sum += x;
      maxSum = Math.max(sum, maxSum);
      if (sum < 0) sum = 0;
    });
  }
  return maxSum;
};

var maxSubArray = function (nums, type) {
  return type.call(nums);
};

const inputArray = {
  nums: [-2, -3, 4, -1, -2, 1, 5, -3],
};

console.log(maxSubArray(inputArray, bruteForceSolution));
console.log(maxSubArray(inputArray, betterSolution));
console.log(maxSubArray(inputArray, kadanesSolution));
