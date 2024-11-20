/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        stones.sort((a, b) => b - a);
        stones[1] = stones[0] - stones[1];
        stones.shift();
    }

    return stones[0];
};
// @lc code=end

