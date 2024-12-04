/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let count = 0;
    let ans = 0;
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        if (nums[R] === 0) {
            k--;
        }

        while (k < 0) {
            if (nums[L] === 0) {
                k++;
            }

            L++;
        }
        ans = Math.max (ans, R-L+1);
    }

    return ans;
};
// @lc code=end

