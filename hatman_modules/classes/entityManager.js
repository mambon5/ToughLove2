/* 
 * Entity Manager class
 */

class CentityManager {

    static fillArray() {//merging vchar and vobj int ventities
        ventities = vchar.concat(vobj);
    }

    static update() {
        vchar.forEach(charac => charac.click());
        ventities.forEach(entity => entity.move());  //we should do an update function on character, to generalize, for now we call draw
        bubble1.move();
        
    }

    static emit() {
        if(vchar.length > 0) {
                io.emit("current states", vchar);
                io.emit("bubble hostname", bubble1.host.name);
            }
    }
    

//    
//    static draw() {
//        CentityManager.sortfordraw();
//        planta1.draw();
//        CfloorManager.draw();
//        ventities.forEach(entity => entity.draw());
//         
//        bubble1.draw();
//        var now = Date.now();
//        aux1.innerHTML = "bubble host: <b>" + bubble1.host.name + "</b>"+ 
//                "<br> time bubbling: " + (Math.floor((now - bubtake)/100)/10).toFixed(1) + " sec";
//    }
    static sortfordraw() {//sort for printing on screen, lowest y first to print
        ventities.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }
}


if (typeof module !== "undefined" && module.exports) {
    module.exports =CentityManager;
}