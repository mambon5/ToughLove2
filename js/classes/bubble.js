var bubtake = Date.now();

if (typeof module !== "undefined" && module.exports) {
    Cobject = require("./object");
}

class Cbubble extends Cobject {
     constructor(x, y, width, height, scale, speed, margins, name, host, pos="top") {
        super(x, y, width, height, scale, speed, margins, name);
        this._host = host; //host is the character que la pilla.
        this._pos = pos; 
    }
    get host(){return this._host;}
    get pos(){return this._pos;}
    
    set host(e){this._host = e; }
    set pos(e){this._pos = e; }

    move() {
       if(this._host != "empty") {
            this.x =  this._host.x  + this._host.width*this._host.scale/2 - this.width*this.scale/2;
            if(this._pos=="top") this.y = this._host.y  - this.width*this.scale;
            if(this._pos=="around") this.y =  this._host.y  + this._host.height*this._host.scale/2 - this.height*this.scale/2;
        }
   }
   
   draw() {
        if(this._host != "empty") {
            super.draw();
        }
    }
}
   


if (typeof module !== "undefined" && module.exports) {
    module.exports.bubtake = bubtake;
    module.exports.Cbubble = Cbubble;
}
