/* 
 * Rectangle class
 */

class Crectangle {
    constructor(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
    
    get x() {return this._x;}
    get y() {return this._y;}
    get width() {return this._width;}
    get height() {return this._height;}
    
    set x(e) {this._x = e;}
    set y(e) {this._y = e;}
    set width(e) {this._width = e;}
    set height(e) {this._height = e;}
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Crectangle;
}