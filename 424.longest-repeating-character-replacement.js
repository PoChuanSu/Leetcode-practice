/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let ans = 0;

    for (let w = 65; w <= 90; w++) {
        let c = String.fromCharCode(w);
        let i = 0, j = 0, replaced = 0;

        while (j < s.length) {
            if (s[j] === c) {
                j++;
            }

            else if (replaced < k) {
                j++;
                replaced++;
            }

            else if (s[i] === c) {
                i++;
            }

            else {
                i++;
                replaced--;
            }

            // console.log(`i= ${i}; j= ${j} `);
            ans = Math.max(ans, j-i);
        }
    }

    return ans;
};
// @lc code=end

