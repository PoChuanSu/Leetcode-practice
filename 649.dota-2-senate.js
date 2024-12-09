/*
 * @lc app=leetcode id=649 lang=javascript
 *
 * [649] Dota2 Senate
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let radiant = [];
    let dire = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") {
            radiant.push(i);
        } else dire.push(i);
    }

    while (radiant.length > 0 && dire.length > 0) {
        if (radiant[0] < dire[0]) radiant.push(radiant[0] + senate.length);
        else dire.push(dire[0] + senate.length);

        radiant.shift();
        dire.shift();
    }

    return radiant.length > dire.length ? "Radiant" : "Dire";
};
// @lc code=end
