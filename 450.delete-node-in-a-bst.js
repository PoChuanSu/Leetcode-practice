/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return root;
    else if (key < root.val) root.left = deleteNode(root.left, key);
    else if (key > root.val) root.right = deleteNode(root.right, key);
    else {
        if (!root.left || !root.right) {
            let tmp = root.left ? root.left : root.right;
            if (!tmp) {
                tmp = root;
                root = null;
            } else {
                root = tmp;
            }
        } else {
            let cur = root.left;
            while (cur.right) cur = cur.right;

            root.val = cur.val;
            root.left = deleteNode(root.left, cur.val);
        }
    }

    return root;
};
// @lc code=end
