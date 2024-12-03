/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;

    while(j < chars.length) {
        let count = 0;
        let curr = chars[j];

        while (j < chars.length && chars[j] === curr) {
            count++;
            j++;
        }

        chars[i++] = curr;

        if (count > 1){
            for (let d of count.toString()){
                chars[i++] = d;
            }
        }
    }

    return i;
};
// @lc code=end

