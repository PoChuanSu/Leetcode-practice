/*
 * @lc app=leetcode id=1138 lang=javascript
 *
 * [1138] Alphabet Board Path
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let y = 0;
    let x = 0;

    for (let c of target) {
        let charNum = char.charCodeAt()-97;
        let targetX = (charNum) % 5;
        let targetY = Math.floor(charNum/5);

        while()
    }
};
// @lc code=end

