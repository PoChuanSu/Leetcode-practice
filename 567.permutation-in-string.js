/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let obj1 = {};
    let obj2 = {};


    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97 + i);
        obj1[char] = 0;
        obj2[char] = 0;
    }


    for (let i = 0; i < s1.length; i++) {
        obj1[s1[i]]++;
    }

    console.log(obj1);

    for (let j = 0; j < s2.length-s1.length+1; j++) {
        for (let i = j; i < j + s1.length; i++) {
            obj2[s2[i]]++;
        }

        console.log(obj2);

        if (JSON.stringify(obj1) === JSON.stringify(obj2))
            return true;
        else
        {
            for (let i = 0; i < 26; i++) {
                const char = String.fromCharCode(97 + i);
                obj2[char] = 0;
            }
        }
            
    }

    return false;
};
// @lc code=end

