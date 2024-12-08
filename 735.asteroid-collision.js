/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let i = 0;
    let ans = [];

    while (i < asteroids.length) {
        if (asteroids[i] >= 0 || !ans.length || ans[ans.length - 1] < 0) {
            ans.push(asteroids[i++]);
        } else if (asteroids[i] + ans[ans.length - 1] < 0) {
            ans.pop();
        } else if (asteroids[i] + ans[ans.length - 1] === 0) {
            ans.pop();
            i++;
        } else {
            i++;
        }
    }

    return ans;
};
// @lc code=end
