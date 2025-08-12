/* 
 * Entity class, a being with independent existence
 */

if (typeof module !== "undefined" && module.exports) {
    Crectangle = require("./rectangle");
}


class ChtmlBox extends Crectangle {
    constructor(id, x=0, y=0, width=930, height=462, scale, bgcolor="black") {
        super(x, y, width, height,scale);
        this._x = x
        this._y = y;
        this._id = id;
        this._width = width;
        this._height = height;
        this._bgcolor = bgcolor;
        this._dom = document.getElementById(this._id);
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
        
        console.log("html box class defined! " + this._dom.width + " " +  this._dom.height)
    }

    get bgcolor() { return this._bgcolor; }
    get dom() { return this._dom; }
    get width() {return this._width    }
    get height() {return this._height}
    
    set bgcolor(e) { this._bgcolor = e; }
    set ctx(e) { this._ctx = e; }
    set dom(e) { this._dom = e; }
    set width(e) {
        this._width = e + "px";
        this._dom.style.width = this._width
    }
    set height(e) {
        this._height = e + "px";
        this._dom.style.height = this._height
    }
    
    hide() {
         this._dom.visibility = "hidden";
    }
    show() {
         this._dom.visibility = "visible";
    }
    
    inhtml(html) {
        this._dom.innerHTML = html;
    }
    
    openMenu(type) {
         let html ="";
         switch(type) {
            case "candy":
                html =  '<button id="eat" onclick="player.doAction(this)" class="optionb">eat</button>'+
                        '<button id="take" onclick="player.doAction(this)" class="optionb">take</button>';
                break;
            case "pet": //una mascota té les opcions de pet o slap!
                html =  '<button id="pet" onclick="player.doAction(this)" class="optionb">pet</button>'+
                        '<button id="slap" onclick="player.doAction(this)" class="optionb">slap</button>';
                break;
            case "stove": //una mascota té les opcions de pet o slap!
                html =  '<button id="start fire" onclick="player.doAction(this)" class="optionb">start fire</button>'+
                        '<button id="stop fire" onclick="player.doAction(this)" class="optionb">stop fire</button>';
                break;
            case "love player": //una mascota té les opcions de pet o slap!
                html =  '<button id="hug" onclick="player.doAction(this)" class="optionb">hug</button>'+
                        '<button id="slap" onclick="player.doAction(this)" class="optionb">slap</button>'+
                        '<button id="give" onclick="player.doAction(this)" class="optionb">give</button>' +
                        '<button id="lover" onclick="player.doAction(this)" class="optionb">propose affair</button>';
                break;
            case "other player": //una mascota té les opcions de pet o slap!
                html =  '<button id="hug" onclick="player.doAction(this)" class="optionb">hug</button>'+
                        '<button id="slap" onclick="player.doAction(this)" class="optionb">slap</button>'+
                        '<button id="give" onclick="player.doAction(this)" class="optionb">give</button>';
                break;
             case "stick": //una mascota té les opcions de pet o slap!
                html =  '<button id="take in hand" onclick="player.doAction(this)" class="optionb">hold</button>'+
                        '<button id="put in bag" onclick="player.doAction(this)" class="optionb">put in bag</button>';
                break;
            case "self": //una mascota té les opcions de pet o slap!
                html =  '<button id="laugh" onclick="player.doAction(this)" class="optionb">laugh</button>'+
                        '<button id="cry" onclick="player.doAction(this)" class="optionb">cry</button>';
                break;
            case "close": //una mascota té les opcions de pet o slap!
                html =  '';
                break;
        }
         this._dom.innerHTML = html; 
         this.show();
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