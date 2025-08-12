/*
 * Monster class
 */
if (typeof module !== "undefined" && module.exports) {
    Ccharacter = require("./character");
}

class Cmonster extends Ccharacter {
    constructor(x, y, width, height, scale=1, speed, margins, name="", clase="char", dir = 0, love=200, bag = [], hand="empty",
    lover="none", action="none", clicking=false, targetName ="none", clicktime = Date.now()) {
        super(x, y, width, height, scale, speed, margins, name, clase);
        this._pastdir = -1;
        this._dir = dir;
        this._clicktime = clicktime;
        this._love = love;
        this._bag = bag;
        this._hand = hand;
        this._lover = lover;
        this._clicking = clicking;
        this._action = action;
        this._targetName = targetName;
    }
    
    get dir() {return this._dir;}
    get love() {return this._love;}
    get bag() {return this._bag;}
    get hand() {return this._hand;}
    get lover() {return this._lover;}
    get clicking() {return this._clicking;}
    get targetName() {return this._targetName;}
    get action() {return this._action;}
    get clicktime() {return this._clicktime;}

    set clicktime(e) {this._clicktime = e;}
    set dir(e) {this._dir = e;}
    set love(e) {this._love = e;}
    set bag(e) {this._bag = e;}
    set hand(e) {this._hand = e;}
    set lover(e) {this._lover = e;}
    set clicking(e) {this._clicking = e;}
    set targetName(e) {this._targetName = e;}
    set action(e) {this._action = e;}
   

    move() {
        this.randmove();
        this.animation.animate();
    }

    randmove() {
        this._moving = false;
//        let num = Math.floor(Math.random()*20);
        let num = this._dir;//can be from 0 to 8
      
//        if(this._pastdir === -1 || num > 18) {
//            let num = Math.floor(Math.random()*10);
//            this._pastdir = num;
//        } else {
////            num = this._pastdir;
//        }
        if( num===1 || num === 2 ){
            this.animation = this.animations[3];
        }
        if( num===3 || num === 4 ){
            this.animation = this.animations[2];
        }
        if( num===5 || num === 6 ){
            this.animation = this.animations[0];
        }
        if( num===7 || num === 8 ){
            this.animation = this.animations[1];
        }
        //let xoc = super.choque(num);
        if(num < 9 && num > 0 ){
           // if( xoc === "null") {
                //super.apuramove(num);
                this.animation.animating = true;
                this.moving = true;
            //}
            if(this === bubble1.host && xoc.clase==="char" ){
               //bubtake = Date.now();
              // bubble1.host = xoc;
            }
            
        } else if (this.name == "beagleDog" || this.name == "sheepDog") {
             this.animation = this.animations[4];
             this.animation.animating = true;
                this.moving = true;
        } else {
          this.moving = false;
          this.animation.animating = false;
        }
    }

    draw() {
        let x  = this.x - player.x + player.x_init;
        let y  = this.y - player.y + player.y_init;
//        console.log("monster: " + this.name + " scale: " + this.scale);
        canvas.ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, x, y, this.width*this.scale, this.height*this.scale);
        canvas.ctx.font = "20px Verdana";
        var gradient = canvas.ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        canvas.ctx.fillStyle = gradient;
        var wt = canvas.ctx.measureText(this._name);//text width  
        
        canvas.ctx.fillText(this._name ,x - wt.width/2 + this._width*this.scale/2,y);
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cmonster;
}