/* 
 *  Floor items Manager class
 */

class CfloorManager {
    static add(obj) {
        vfloor.push(obj);
    }

    static update() {
        vfloor.forEach(object => object.move());  //we should do an update function on object, to generalize, for now we call draw
    }

    static draw() {
        CfloorManager.sortfordraw();
       
        vfloor.forEach(object => object.draw());
       

    }

    static sortfordraw() {//sort for printing on screen, lowest y first to print
        vfloor.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }

    static generateValidPoses() {
        vfloor.forEach(CfloorManager.generateValidPos);
    }

    static generateValidPos(item, index) {
       item.generateValidPos();
        
        console.log(item.name);
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports =CfloorManager;
}