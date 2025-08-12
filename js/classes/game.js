/*
 * Game class
 */

//copy the classes Cgame and CcharacterManagers as classes of the server. TO 
//have them twice.

class Cgame {
    
    
    constructor(fps) { //filas, columnas
        this._fps = fps;
        this._now;
        this._then;
        this._elapsed;
        this._started = false;
    }
    
    get fps() {return this._fps}
    get now() {return this._now}
    get then() {return this._then}
    get elapsed() {return this._elapsed}
    get started() {return this._started;}

    loop() {
        this._now = Date.now();
        this._elapsed = this._now - this._then;
        //aux1.innerHTML = "now: " + now + "<br> then: " + then;
        if(this._elapsed > 1000/this._fps) {
            
          
            
           
            
            this._then = this._now;

            canvas.ctx.clearRect(0,0,canvas.width,canvas.height);
            
            //map.recalculateCenter();  // Quotient Space!!!

            CentityManager.update();
            CentityManager.emit();
            map.drawmatrix();
            CentityManager.draw();
            if(mouse.click) console.log("mouse clicked: dir: " + player.dir + ", click: " +
                 player.clicking + ", target: " + player.targetName + ", player action: " + player.action)
            CentityManager.clearEvents();
//            console.log("left mouse pressed: " +mouse.mousedown);
//            console.log("left mouse clicked: " +mouse.click);

            aux2.innerHTML = "x: " + Math.round(player.x) + ", y: " + Math.round(player.y);
//            socket.emit("current state");
            //imgmargins(ctx, canvas.width/2, canvas.height/2, player.width, player.height);
            /*tempCtx.drawImage(player.animation.animationSheet.image, 0, 0, 150, 150, 0,0, 150, 150);
            let hey = checkTransparency(tempCtx, 0, 0, 150, 150);
            aux2.innerHTML = "left: " + hey[0] + "<br> top: " + hey[1] + "<br> right: " + hey[2] + "<br> bottom: " + hey[3];*/
        }
        requestAnimationFrame(()=>this.loop());
    }

    startGame() {
        this._started = true;
        this._then = Date.now();
        this.loop();
    }
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cgame;
}
