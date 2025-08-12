
bubtake = Date.now();

if (typeof module !== "undefined" && module.exports) {
    Cobject = require("./object");
}

class Cbubble extends Cobject {
     constructor(x, y, width, height, scale, speed, margins, name, host) {
        super(x, y, width, height, scale, speed, margins, name);
        this._host = host; //host is the character que la pilla.
    }
    get host(){return this._host;}
    
    set host(e){this._host = e; }

    move() {
       if(this._host != "empty") {
            this.x =  this._host.x  + this._host.width*this._host.scale/2 - this.width/2;
            this.y = this._host.y  - this.width;
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
