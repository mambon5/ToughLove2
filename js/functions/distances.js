/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function distl2(p1, p2) {
    const res = Math.sqrt( Math.pow(p1[0]-p2[0],2) + Math.pow(p1[1]-p2[1],2)  );
    return res;
}

function distancel2(rect1, rect2) {//distance according to mathematical l2 norm (euclidean)
    //euclidean distance between two rectangles

    let x1 = rect1.x
    let x2 = rect2.x
    let y1 = rect1.y
    let y2 = rect2.y
    let x1b = rect1.x + rect1.width*rect1.scale
    let x2b = rect2.x + rect2.width*rect2.scale
    let y1b = rect1.y + rect1.height*rect1.scale
    let y2b = rect2.y + rect2.height*rect2.scale
    var left = false, top = false, bottom = false, right = false
    
    if(x1 > x2b) left = true
    if(x2 > x1b) right = true
    if(y1 > y2b) top = true
    if(y2 > y1b) bottom = true
    
    let dist=0;
//    console.log("top left right bottom" + top +" " + left + " " + right + " "+
//            bottom)
//        console.log("rect1 upl [ " + Math.round(x1) + ", "+ Math.round(y1) + "]" +
//            " --> dr [ " + Math.round(x1b) + ", "+ Math.round(y1b) + "]");
//    console.log("rect2 upl [ " + Math.round(x2) + ", "+ Math.round(y2) + "]" +
//            "dr [ " + Math.round(x2b) + ", "+ Math.round(y2b) + "]");
    if (top && left){
        return distl2([x1, y1], [x2b, y2b]) 
    }
    else if (left && bottom){
        return distl2([x1, y1b], [x2b, y2]);
    } else if (bottom && right) {
        return distl2([x1b, y1b], [x2, y2])
    }
    else if (right &&  top) {
        return distl2([x1b, y1], [x2, y2b])
    }
    else if (left) {
        dist = x1 - x2b;        
        return dist;
    }
    else if (right) {
        dist = x2 - x1b
        return dist;
    }
    else if (bottom) {
        dist = y2 - y1b
        return dist;
    }
    else if (top) {
        dist = y1 - y2b
        return dist;
    }
    else {
        // rectangles intersect
        return 0
    }
   }
   
   
if (typeof module !== "undefined" && module.exports) {
    module.exports.distl2 = distl2;
    module.exports.distancel2 = distancel2;
}