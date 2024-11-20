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
    let ans = "";

    for (let c of target) {
        let charNum = c.charCodeAt()-97;
        let targetX = (charNum) % 5;
        let targetY = Math.floor(charNum/5);

        while (y > targetY) {ans+='U'; y--;}
        while (x > targetX) {ans+='L'; x--;}
        
        while (y < targetY) {ans+='D'; y++;}
        while (x < targetX) {ans+='R'; x++;}

        ans+='!';
    }
    return ans;
};
// @lc code=end

