/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0, j = 0;
    let ans = "";

    while (i < word1.length || j < word2.length) {
        if (word1[i]!== undefined) ans+=word1[i];
        if (word2[j] !== undefined) ans+=word2[j];
        i++;
        j++;
    }

    return ans;
    
    
};
// @lc code=end

