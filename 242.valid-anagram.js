/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
va isAnagram = function(s, t) {
    let s_1 = {};
    let t_1 = {};

    for (let c of s) {
        if (s_1[c]){
            s_1[c]++;
        } else {
            s_1[c] = 1;
        }
    }

    for (let c of t) {
        if (t_1[c]){
            t_1[c]++;
        } else {
            t_1[c] = 1;
        }
    }

    for (let key in s_1) {
        if (!key in t_1)
            return false;
        if (s_1[key] !== t_1[key])
            return false;
    }
    return true;
};
// @lc code=end

