/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [x1,y1] = points[0];
    let [x2,y2] = points[1];
    let [x3,y3] = points[2];

    return (x2-x1)*(y3-y1)-(x3-x1)*(y2-y1) === 0? false:true;
    
};
// @lc code=end

