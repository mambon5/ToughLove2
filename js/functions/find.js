/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//find objects functions
function finditem(itname) {
    const res =  vobj.find(obj => obj.name == itname)
    if(res==undefined) return "none"
    return res
    
}

function findchar(charname) {
    const res =  vchar.find(obj => obj.name == charname)
    if(res==undefined) return "none"
    return res
}
   
   
if (typeof module !== "undefined" && module.exports) {
    module.exports.finditem = finditem;
    module.exports.findchar = findchar;
}