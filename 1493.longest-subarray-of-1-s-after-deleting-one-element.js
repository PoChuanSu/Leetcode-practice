/*
 * @lc app=leetcode id=1493 lang=javascript
 *
 * [1493] Longest Subarray of 1's After Deleting One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let preWin = 0;
    let curWin = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            maxLen = Math.max(maxLen, preWin + curWin);
            preWin = curWin;
            curWin = 0;
        } else {
            curWin ++;
        }
    }

    if (curWin === nums.length) return curWin - 1;
    maxLen = Math.max(maxLen, preWin + curWin);
    
    return maxLen;
};
// @lc code=end

