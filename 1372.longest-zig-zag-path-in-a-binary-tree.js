/*
 * @lc app=leetcode id=1372 lang=javascript
 *
 * [1372] Longest ZigZag Path in a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
    let ans = 0;

    function preHelper(node, isLeft, steps) {
        if (!node) return;
        ans = Math.max(ans, steps);

        if (isLeft) {
            preHelper(node.left, !isLeft, steps + 1);
            preHelper(node.right, isLeft, 1);
        } else {
            preHelper(node.left, isLeft, 1);
            preHelper(node.right, !isLeft, steps + 1);
        }
    }

    preHelper(root, true, 0);
    preHelper(root, false, 0);

    return ans;
};
// @lc code=end
