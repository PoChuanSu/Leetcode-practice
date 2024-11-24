/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    let len1 = str1.length;
    let len2 = str2.length;

    // Euclidean algorithms
    let div = function (x, y) {
        if (x === 0)
            return y;
        
        return div(y % x, x);
    }

    let len = div (len2,len1);

    return str1.substring(0, len);
};
// @lc code=end

