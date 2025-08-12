/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// left, top, right, bottom
let extrah =14;
var marg_henry = [6, 2, 4, 2]; marg_henry[1] += extrah;
var marg_tiana2 = [6, 5, 4, 2]; marg_tiana2[1] += extrah;
var marg_cpmerica = [4, 2, 1, 1]; marg_cpmerica[1] += extrah;
var marg_greebo2 = [1, 1, 0, 1]; marg_greebo2[1] += extrah*0.7;
var marg_prodroid2 = [6, 3, 4, 2]; marg_prodroid2[1] += extrah;
var marg_trump = [6, 3, 4, 2]; marg_trump[1] += extrah;
var marg_rhodey = [5, 3, 4, 2]; marg_rhodey[1] += extrah;
var marg_laila = [8, 5, 6, 1]; marg_laila[1] += extrah;
var marg_barril1 = [1, 1, 1, 1]; marg_barril1[1] += extrah*2/3;
var marg_lollypal = [1, 1, 1, 1]; marg_lollypal[1] += extrah*2;
var marg_candybowl = [2, 1, 1, 1]; marg_candybowl[1] += extrah/10;
var marg_stove = [10, 6, 8, 8]; marg_stove[1] += extrah*1.5;

if (typeof module !== "undefined" && module.exports) {
    module.exports.marg_henry = marg_henry;
    module.exports.marg_tiana2 = marg_tiana2;
    module.exports.marg_cpmerica = marg_cpmerica;
    module.exports.marg_greebo2 = marg_greebo2;
    module.exports.marg_prodroid2 = marg_prodroid2;
    module.exports.marg_rhodey = marg_rhodey;
    module.exports.marg_laila = marg_laila;
    module.exports.marg_barril1 = marg_barril1;
    module.exports.marg_lollypal = marg_lollypal;
    module.exports.marg_candybowl = marg_candybowl;
    module.exports.marg_stove = marg_stove;
}