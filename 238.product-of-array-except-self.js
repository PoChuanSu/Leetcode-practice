/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    let leftProduct = [], rightProudct = [];
    leftProduct[0] = 1;
    rightProudct[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++){
        leftProduct[i] = leftProduct[i-1] * nums[i-1];
    }

    for (let i = nums.length - 2; i >=0; i--){
        rightProudct[i] = rightProudct[i+1] * nums[i+1];
    }

    for (let i = 0; i < nums.length; i++){
        output[i] = leftProduct[i] * rightProudct[i];
    }

    return output;
};
// @lc code=end

