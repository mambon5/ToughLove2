/* 
 * Entity Manager class
 */

class CentityManager {

    static fillArray() {//merging vchar and vobj int ventities
        ventities = vchar.concat(vobj);
    }

    static update() {
        player.update();
        ventities.forEach(entity => entity.move());  //we should do an update function on character, to generalize, for now we call draw
        mouse.checkMouseMove();
        player.checkClick();
        bubble1.move();
        selobj.move();

    }

    static draw() {
        CentityManager.sortfordraw();
//        planta1.draw();
        CfloorManager.draw();
        ventities.forEach(entity => {
            entity.draw();
            
        });
         
        bubble1.draw();
        selobj.draw();
        var now = Date.now();
        aux1.innerHTML = "bubble host: <b>" + bubble1.host.name + "</b>"+ 
                "<br> time bubbling: " + (Math.floor((now - bubtake)/100)/10).toFixed(1) + " sec";
    }
    
    static emit() {
         socket.emit("player move_click", roomName,
         player.dir, player.action, player.targetName, player.clicking);
         if(player.action != "none" && player.targetName !="none") console.log("player move-click emitted!: dir: " + player.dir + ", click: " +
                 player.clicking + ", target: " + player.targetName + ", player action: " + player.action)
    }
    
    static clearEvents() {
            mouse.clearEvents();
            player.clearAction();
    }
    
    static sortfordraw() {//sort for printing on screen, lowest y first to print
        ventities.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }
    
    
     
    
}


if (typeof module !== "undefined" && module.exports) {
    module.exports =CentityManager;
}