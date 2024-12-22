/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
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
var goodNodes = function (root) {
    let ans = 0;

    function preHelper(node, max) {
        if (node.val >= max) {
            max = node.val;
            ans++;
        }

        if (node.left) preHelper(node.left, max);
        if (node.right) preHelper(node.right, max);
    }

    preHelper(root, root.val);

    return ans;
};
// @lc code=end
