/* 
 * Background class
 */

class Cbackground {
    constructor(callback_x, callback_y) {
        this._callback_x = callback_x;
        this._callback_y = callback_y;
        this._image = new Image();
    }
    
    get x() {return this._callback_x;}
    get y() {return this._callback_y;}
    get image() {return this._image;}
    
    set image(e) {this._image = e;}
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cbackground;
}