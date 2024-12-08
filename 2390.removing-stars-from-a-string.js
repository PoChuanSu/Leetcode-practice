/*
 * @lc app=leetcode id=2390 lang=javascript
 *
 * [2390] Removing Stars From a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "*") ans.push(s[i]);
        else ans.pop();
    }

    return ans.join("");
};
// @lc code=end
