/* 
 * Entity class, a being with independent existence
 */

if (typeof module !== "undefined" && module.exports) {
    Crectangle = require("./rectangle");
}


class Centity extends Crectangle {
    constructor(x, y, width, height, scale, speed, margins = [0,0,0,0], name) {
        super(x, y, width, height,scale);
        this._x_init = x;
        this._y_init = y;
        this._speed = speed;
        
        
        if ( !(typeof module !== "undefined" && module.exports) ) {
            // the js function Image() is apparently not defined in Node.js
                this._image = new Image();
            }
            
        this._margins = margins;
        this._moving = false;
        this._animation = null;
        this._animations = [];
        this._name = name;
        
    }
    
    get x_init() { return this._x_init; }
    get y_init() { return this._y_init; }
    get speed() {return this._speed;}
    get image() {return this._image;}
    get margins() { return this._margins; }
    get moving() { return this._moving; }
    get animations() { return this._animations; }
    get animation() { return this._animation; }
    get name() { return this._name; }
    get clase() {return this._clase;}
   

    
    set speed(e) {this._speed = e;}
    set image(e) {this._image = e;}
    set margins(e) {this._margins = e;} //margins are left, top, right, bottom
    set moving(e) { this._moving = e; }
    set animations(e) { this._animations = e; }
    set animation(e) { this._animation = e; }
    set name(e) { this._name = e; }

    cut_rect() {
        return new Centity(
                        this.x + this.margins[0]*this.scale, 
                        this.y + this.margins[1]*this.scale,
                        this.width - this.margins[0] - this.margins[2],
                        this.height - this.margins[1] - this.margins[3],
                        this.scale,
                        this.speed,
                        this.margins,
                        this.name);
    }
    
    dirmove(dir) {
        let rspeed = 0;
        
        if(dir===2 || dir===4 ||dir === 6 ||dir === 8 ) {
            rspeed=Math.floor(this.speed/Math.sqrt(2));
        }
        else rspeed = this.speed;
        if(dir===1) {this.y -= rspeed;}
        if(dir===2) {this.y -= rspeed; this.x += rspeed;}
        if(dir===3) {this.x += rspeed;}
        if(dir===4) {this.y += rspeed; this.x += rspeed;}
        if(dir===5) {this.y += rspeed;}
        if(dir===6) {this.y += rspeed; this.x -= rspeed;}
        if(dir===7) {this.x -= rspeed;}
        if(dir===8) {this.y -= rspeed; this.x -= rspeed;}
    }

    whoHit(entity) {
          ventities.forEach(elem  => {
                var name = elem.name       
                if(elem.name != entity.name && checkxoc(elem,entity)) return elem;
            });
            return "none";
    }
    
    who(name) {
          ventities.forEach(elem  => {
                if(elem.name == name) return elem;
            });
            return "none";
    }
    
    choque(dir) {
        var arrxoc = []; //array con characteres excepto el mismo
        let cind = -1;
        for (let i = 0; i < ventities.length; i++) {
            if (ventities[i].name !== this.name) arrxoc.push(ventities[i].cut_rect());
            else cind = i;//get this character index for later use
        }

        let cutrect = this.cut_rect();
        cutrect.dirmove(dir); //this moves the cut rectangle in order to foresee where the 
        //ninotet will be after the move

        let index = arrayxoc(cutrect, arrxoc);
        let obj = "null";
        if (cind < index) index += 1;
        if (index > (-1)) obj = ventities[index];
        return obj;
    }

    generateValidPos() {
        let x = -1;
        let y = -1;
        while (this.choque(0) !== "null" || !map.validcorners(x, y, this.width*this.scale, this.height*this.scale, canvas.width, canvas.height)) {
            x = Math.random() * map._resh * map._cols;
            y = Math.random() * map._resv * map._rows;
            this.x = x;
            this.y = y;
        }
        //console.log(this.name);
        
    }

    apuramove(dir) {    //dir is 1-top 2-right 3-down 4-left

        let marg = this.margins;//margins are left, top, right, bottom

        let canvW = canvas.width;
        let canvH = canvas.height;
        let resol = map.getresol(); // get resolution of each cell

        let cutrect = this.cut_rect(); //cuts rectangl according to margins

        let pos = map.getmatpos(cutrect.x, cutrect.y);

        let rspeed = 0;

        if (dir === 2 || dir === 4 || dir === 6 || dir === 8) {
            rspeed = Math.floor(this.speed / Math.sqrt(2));
        }
        else rspeed = this.speed; //adjusting speed for diagonal displacement
        if (dir == 8 || dir === 1 || dir == 2) {
            if (map.validcorners(cutrect.x, cutrect.y - rspeed, cutrect.width*cutrect.scale, cutrect.height*cutrect.scale, canvW, canvH)) {
                this.y -= rspeed;
                this.moving = true;
            } else {
                let limy = pos[0] * resol[1];
                let speed = cutrect.y - limy - 1;
                if (speed > 0) {
                    this.y -= speed;
                    this.moving = true;
                }
            }

        }

        cutrect = this.cut_rect();
        pos = map.getmatpos(cutrect.x, cutrect.y);
        if (dir === 2 || dir == 3 || dir == 4) {
            if (map.validcorners(cutrect.x + rspeed, cutrect.y, cutrect.width*cutrect.scale, cutrect.height*cutrect.scale, canvW, canvH)) {
                this.x += rspeed;
                this.moving = true;
            } else {
                let limx = (pos[1] + 1) * resol[0];
                let speed = limx - (cutrect.x + cutrect.width*cutrect.scale) - 1;
                if (speed > 0) {
                    this.x += speed;
                    this.moving = true;
                }
            }
        }
        cutrect = this.cut_rect();
        pos = map.getmatpos(cutrect.x, cutrect.y);
        if (dir === 4 || dir == 5 || dir == 6) {
            if (map.validcorners(cutrect.x, cutrect.y + rspeed, cutrect.width*cutrect.scale, cutrect.height*cutrect.scale, canvW, canvH)) {
                this.y += rspeed;
                this.moving = true;
            } else {
                let limy = (pos[0] + 1) * resol[1];
                let speed = limy - (cutrect.y + cutrect.height*cutrect.scale) - 1;
                if (speed > 0) {
                    this.y += speed;
                    this.moving = true;
                }
            }
        }
        cutrect = this.cut_rect();
        pos = map.getmatpos(cutrect.x, cutrect.y);
        if (dir === 6 || dir == 7 || dir == 8) {
            if (map.validcorners(cutrect.x - rspeed, cutrect.y, cutrect.width*cutrect.scale, cutrect.height*cutrect.scale, canvW, canvH)) {
                this.x -= rspeed;
                this.moving = true;
            } else {
                let limx = pos[1] * resol[0];
                let speed = cutrect.x - limx - 1;
                if (speed > 0) {
                    this.x -= speed;
                    this.moving = true;
                }
            }
        }
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Centity;
}