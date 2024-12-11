/*
 * @lc app=leetcode id=2215 lang=javascript
 *
 * [2215] Find the Difference of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);
    let ans = [[], []];

    for (i of n1) {
        if (!n2.has(i)) ans[0].push(i);
    }

    for (i of n2) {
        if (!n1.has(i)) ans[1].push(i);
    }

    return ans;
};
// @lc code=end
