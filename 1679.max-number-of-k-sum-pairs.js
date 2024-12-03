/*
 * @lc app=leetcode id=1679 lang=javascript
 *
 * [1679] Max Number of K-Sum Pairs
 */xd

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=> a-b);
    let ans  = 0;
    let i = 0, j = nums.length - 1;

    while (i < j) {
        let tmp = nums[i] + nums[j];

        if (tmp === k) {
            i++;
            j--;
            ans++;
        }
        else if (tmp > k) {
            j--;
        } else {
            i++;
        }
    }

    return ans;
};
// @lc code=end

