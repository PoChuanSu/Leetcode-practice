/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=> a - b);
    let total = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) continue;

        let j = i + 1;
        let k = nums.length;

        while (j < k){
            let total_tmp = nums[i] + nums[j] + nums[k];
            if (total_tmp === target) return total_tmp;
            else if (total_tmp < target) j++;
            else k--;

            if (Math.abs(total_tmp-target) < Math.abs(total-target)) total = total_tmp;
        }
    }

    return total;
};
// @lc code=end

