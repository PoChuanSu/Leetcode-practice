/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130] Maximum Twin Sum of a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let arr = []

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        ans = Math.max(ans, arr[i] + arr[arr.length-1-i])
    }

    return ans;
};
// @lc code=end

