/*
 * AnimationSheet class
 */

class AnimationSheet {
    constructor(imageSource, width, height, animations, framesPerAnimation) {
        this._animations = animations;
        this._framesPerAnimation = framesPerAnimation;
        this._image = new Image(width, height);
        console.log(new FileReader(imageSource));
        this._image.src = imageSource;
        this._frameWidth = this._image.width / this._framesPerAnimation;
        this._frameHeight = this._image.height / this._animations;
    }

    get image() {return this._image;}
    get animations() {return this._animations;}
    get framesPerAnimation() {return this._framesPerAnimation;}
    get frameWidth() {return this._frameWidth;}
    get frameHeight() {return this._frameHeight;}

    set image(e) {this._image = e;}
    set animations(e) {this._animations = e;}
    set framesPerAnimation(e) {this._framesPerAnimation = e;}
    set frameWidth(e) {this._frameWidth = e;}
    set frameHeight(e) {this._frameHeight = e;}
};

