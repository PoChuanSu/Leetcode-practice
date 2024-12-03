/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let current of nums){
        if (current > first && current > second) return true;
        else if (current > first) second = current;
        else first = current;
    }
    
    return false;
};
// @lc code=end

