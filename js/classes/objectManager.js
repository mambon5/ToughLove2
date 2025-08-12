/* 
 * Object Manager class
 */
outputed=false
class CobjectManager {
    static add(obj) {
        vobj.push(obj);
    }

    static update() {
        vobj.forEach(object => object.move());  //we should do an update function on object, to generalize, for now we call draw
    }

    static draw() {
        CobjectManager.sortfordraw();
       
        vobj.forEach(object => object.draw());
       

    }

    static sortfordraw() {//sort for printing on screen, lowest y first to print
        vobj.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }

    static generateValidPoses() {
        vobj.forEach(CobjectManager.generateValidPos);
    }

    static generateValidPos(item, index) {
       item.generateValidPos();
        
        console.log(item.name);
    }

    static findByName(name) { // troba un objecte usant el seu atribut de nom
        return vobj.find(obj => obj.name === name);
    }
    
   
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = CobjectManager;
}