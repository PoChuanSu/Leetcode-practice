/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
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
var maxLevelSum = function (root) {
    let queue = [],
        sum = [];

    queue.push(root);

    while (queue.length) {
        let layerValue = [];
        let n = queue.length;
        let sum_tmp = 0;

        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            if (node) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                layerValue.push(node.val);
            }
        }

        for (i of layerValue) {
            sum_tmp += i;
        }

        sum.push(sum_tmp);
    }

    let max = Math.max(...sum);
    return sum.indexOf(max) + 1;
};
// @lc code=end
