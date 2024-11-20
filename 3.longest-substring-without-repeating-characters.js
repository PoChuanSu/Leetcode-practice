/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0, tmp = 0, ans = 0;
    let obj = {};

    while (j < s.length) {
        let c = s[j];

        if (obj[c]) {
           i = Math.max(i, obj[c]);
        }
        ans = Math.max(ans, j-i+1);
        obj[c] = j+1;
        j++;
    }

    return ans;
};
// @lc code=end

