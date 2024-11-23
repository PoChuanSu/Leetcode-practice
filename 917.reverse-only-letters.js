/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('');
    let i = 0;
    let j = s.length -1;

    while (i <= j) {
        if (s[i].match(/[a-zA-Z]/) && !s[j].match(/[a-zA-Z]/)){
            j--;
        }

        else if (!s[i].match(/[a-zA-Z]/) && s[j].match(/[a-zA-Z]/)){
            i++;
        }

        else if (!s[i].match(/[a-zA-Z]/) && !s[j].match(/[a-zA-Z]/)){
            i++;
            j--;
        }

        else {
            let tmp = s[i];
            s[i] = s[j];
            s[j] = tmp;
            i++;
            j--;
        }
    }

    return s.join('');
};
// @lc code=end

