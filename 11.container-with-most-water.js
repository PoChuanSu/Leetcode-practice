/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans  = -Infinity;
    let start = 0, end = height.length -1;

    while (start <= end) {
        let tmp_h = Math.min(height[start],height[end]);
        let width = end - start;
        ans = Math.max(ans, tmp_h*width);

        // if (start === end && start < height.length -2) {
        //     start ++;
        //     end = height.length -1;
        //     console.log(start);
        // }
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return ans;
};
// @lc code=end

