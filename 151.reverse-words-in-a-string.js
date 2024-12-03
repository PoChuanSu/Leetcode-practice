/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(/\s+/);
    let i = 0, j = s.length - 1;

    while (i < j) {
        [s[i],s[j]] = [s[j], s[i]]
        i++;
        j--;
    }

    return s.join(' ').trim();
};
// @lc code=end

