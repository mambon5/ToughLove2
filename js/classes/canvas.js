/* 
 * Entity class, a being with independent existence
 */

if (typeof module !== "undefined" && module.exports) {
    Crectangle = require("./rectangle");
}


class Ccanvas extends Crectangle {
    constructor(x=0, y=0, width=930, height=462, scale, bgcolor="black") {
        super(x, y, width, height,scale);
        this._width = width;
        this._height = height;
        this._bgcolor = bgcolor;
        this._dom = document.getElementById('my_canvas');
        this._ctx = this._dom.getContext('2d');
        this._dom.width = width
        this._dom.height = height
//        let txtx = x
//        let txty = y
//        if(x!="auto" && y !="auto") {
//            txtx = txtx + "px";            
//            txty = txty + "px";            
//        }
//        this._dom.style.left = txtx
//        this._dom.style.top = txty
        
        console.log("canvas class defined! " + this._dom.width + " " +  this._dom.height)
    }

    get bgcolor() { return this._bgcolor; }
    get ctx() { return this._ctx; }
    get dom() { return this._dom; }
    get width() {return this._width    }
    get height() {return this._height}
    
    set bgcolor(e) { this._bgcolor = e; }
    set ctx(e) { this._ctx = e; }
    set dom(e) { this._dom = e; }
    set width(e) {
        this._width = e;
        this._dom.width = this._width
    }
    set height(e) {
        this._height = e;
        this._dom.height = this._height
    }
//    set x(e) {
//        this._x = e;
//        let txt = x + "px";
//        this._dom.style.left = txt
//    }
//    set y(e) {
//        this._y = e;
//        let txt = y + "px";
//        this._dom.style.top = txt
//    }

    writeOptions(array){
        let n = array.length
        this._dom.font = "30px Comic Sans MS";
        this._dom.fillStyle = "red";
        this._dom.textAlign = "center";
        if(n>0) {
            var text = ""
            for(i=0;i<n;++i) {
                text = text + array[i] + " ";
            }
             this._dom.fillText(text); 
        }
       
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cmouse;
}