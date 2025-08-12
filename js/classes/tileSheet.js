/*
 * AnimationSheet class
 */

class TileSheet {
    constructor(imageSource, width, height, rows, columns) {
        this._rows = rows;
        this._columns = columns;
        this._image = new Image(width, height);
        
        this._image.src = imageSource;
        this._frameWidth = this._image.width / this._columns;
        this._frameHeight = this._image.height / this._rows;
        
        console.log("fr width, fr height: " + this._frameWidth +" " + this._frameHeight );
    }

    get image() {return this._image;}
    get rows() {return this._rows;}
    get columns() {return this._columns;}
    get frameWidth() {return this._frameWidth;}
    get frameHeight() {return this._frameHeight;}

    set image(e) {this._image = e;}
    set rows(e) {this._rows = e;}
    set columns(e) {this._columns = e;}
    set frameWidth(e) {this._frameWidth = e;}
    set frameHeight(e) {this._frameHeight = e;}
};

