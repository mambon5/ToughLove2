/* 
 * Character Manager class
 */

class CcharacterManager {
    static add(obj, callback) {
//        console.log("new player detected");
//        console.log("vchar vector before adding player:");
//        console.log(vchar);
        vchar.push(obj);
//        console.log("push made to character vector of element: " + obj.name);
//        console.log("vchar vector after addition:");
//        console.log(vchar);
    
    }
    
    static delete(obj) {
        var index = vchar.findIndex(char => char.name === obj.name);
        
        if (index > -1) {
            
            var n = vchar.length;
            var aux = [];
            vchar.forEach(char => {
                if(char.name == obj.name ) {
                    
                } 
                else {
                        aux.push(char);
                    }
            });
            vchar = aux;
            
           
        }
        
    }
    
    static update() {
        vchar.forEach(character => character.move());  //we should do an update function on character, to generalize, for now we call draw
        
    }
    
    static draw() {
        CcharacterManager.sortfordraw();
        vchar.forEach(character => {
            character.draw();
           
        });
       
        
    }
    
        static sortfordraw() {//sort for printing on screen, lowest y first to print
        vchar.sort(function(a,b){return a.y+a.height-b.y-b.height;});        
    }
    
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = CcharacterManager;
}