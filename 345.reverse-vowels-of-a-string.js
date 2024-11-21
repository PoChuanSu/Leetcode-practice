/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = ['a','e','i','o','u','A','E','I','O','U'];
    let i = 0, j = s.length-1;
    s = s.split("");

    while (i !== j && i < j) {
        if (vowel.includes(s[i]) && vowel.includes(s[j])) {
            let tmp = s[i];
            s[i] = s[j];
            s[j] = tmp;
            console.log(s);
            i++;
            j--;
        }

        else if (vowel.includes(s[i]) && !vowel.includes(s[j])) j--;
        else if (!vowel.includes(s[i]) && vowel.includes(s[j])) i++;
        else {
            i++;
            j--;
        }
    }

    return s.join('');
};
// @lc code=end

