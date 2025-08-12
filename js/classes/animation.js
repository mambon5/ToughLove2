/**
 * Animation class
 **/

class Animation {
    constructor(animationSheet, animation, timePerFrame) {
        this._animationSheet = animationSheet;
        this._animation = animation;//frameY
        this._timePerFrame = timePerFrame;
        this._animating = false;
        this._animationTick = 0;
        this._currentFrame = 0;//frameX
    }

    get animationSheet() {return this._animationSheet;}
    get animation() {return this._animation;}
    get timePerFrame() {return this._timePerFrame;}
    get animating() {return this._animating;}
    get currentFrame() {return this._currentFrame;}

    set animationSheet(e) {this._animationSheet = e;}
    set animation(e) {this._animation = e;}
    set timePerFrame(e) {this._timePerFrame = e;}
    set animating(e) {this._animating = e;}
    set currentFrame(e) {this._currentFrame = e;}

    animate(){
      if (this._animating){
        var prevStartTime = 0;
        for (var i = 0; i < this._timePerFrame.length; i++){
          if(this._animationTick < this._timePerFrame[i] + prevStartTime){
            this._currentFrame = i;
            break;
          } else{
            prevStartTime += this._timePerFrame[i];
          }
        }
        this._animationTick++;
        if (this._animationTick > this._timePerFrame.reduce((a, b) => a+b,0)) {
          this._animationTick = 0;
        }
      }else{
        this._currentFrame = 0;
        this._animationTick = this._timePerFrame[0];
      }
    }

};


