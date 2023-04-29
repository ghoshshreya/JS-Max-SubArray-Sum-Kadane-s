var maxSubArray = function (nums) {
  //BRUTE_FORCE with 3 loops :: TC - O(n^3) SC - O(1)
  // let maxSum = nums[0];
  // let arrayLength = nums.length;
  // if (nums.length > 1) {
  //   for (let x = 0; x < arrayLength; x++) {
  //     for (let y = x; y < arrayLength; y++) {
  //       let sum = 0;
  //       for (let k = x; k <= y; k++) {
  //         sum += nums[k];
  //       }
  //       maxSum = Math.max(maxSum, sum);
  //     }
  //   }
  // }
  
  //BETTER APPROACH with 2 loops :: TC - O(n^2) SC - O(1)
  // let maxSum = nums[0];
  // const arrLength = nums.length;
  // if (arrLength > 1) {
  //   for (let x = 0; x < arrLength; x++) {
  //     let sum = nums[x];
  //     for (let y = x + 1; y < arrLength; y++) {
  //       sum += nums[y];
  //       maxSum = Math.max(maxSum, sum);
  //     }
  //   }
  // }
  // return maxSum;
};

console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
