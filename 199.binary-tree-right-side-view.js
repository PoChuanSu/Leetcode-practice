/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    let queue = [],
        ans = [];

    queue.push(root);

    while (queue.length) {
        let layVals = [];
        let n = queue.length;

        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            if (node) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                layVals.push(node.val);
            }
        }
        ans.push(layVals.pop());
    }

    return ans;
};
// @lc code=end
