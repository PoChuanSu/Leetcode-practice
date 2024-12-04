/*
 * @lc app=leetcode id=1456 lang=javascript
 *
 * [1456] Maximum Number of Vowels in a Substring of Given Length
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a','e','i','o','u'];
    let ans = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) ans++;
    }

    let ans_tmp = ans;
    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i])) ans_tmp ++;
        if (vowels.includes(s[i-k])) ans_tmp --;
        ans = Math.max(ans, ans_tmp);
    }

    return ans;
};
// @lc code=end

