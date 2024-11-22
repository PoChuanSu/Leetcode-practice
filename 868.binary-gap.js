/*
 * @lc app=leetcode id=868 lang=javascript
 *
 * [868] Binary Gap
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let bi = n.toString(2);
    let i = 0;
    let last = 0;
    let max = 0;

    while (i < bi.length) {
        if (bi[i] === '1')
        {
            let dis = i - last;
            last = i;
            max = Math.max(dis, max);
        }

        i++;
    }

    return max;
};
// @lc code=end

