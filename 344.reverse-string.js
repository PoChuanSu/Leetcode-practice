/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0, j = s.length-1;

    while ( i !== j && i < j) {
        let tmp_start = s[i];
        s[i] = s[j];
        s[j] = tmp_start;
        i++;
        j--;
    }

    return s;
};
// @lc code=end

