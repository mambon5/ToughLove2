/*
 * Player class
 */

if (typeof module !== "undefined" && module.exports) {
    Ccharacter = require("./character");
    
    find = require("../../js/functions/find")
    distances = require("../../js/functions/distances")
}

class Cplayer extends Ccharacter {

    constructor(x, y, width, height, scale, speed, margins, name="hero", clase="char", dir = 0, love=200, bag = "empty", hand="empty",
    lover="none", action="none",clicking=false, targetName ="none") {

        super(x, y, width, height, scale, speed, margins, name, clase);
        this._dir = dir;
        this._love = love;
        this._bag = bag;
        this._hand = hand;
        this._lover = lover;
        this._action = action;
        this._clicking = clicking;
        this._targetName = targetName;
    }

    get dir() {return this._dir;}
    get love() {return this._love;}
    get bag() {return this._bag;}
    get hand() {return this._hand;}
    get lover() {return this._lover;}
    get clicking() {return this._clicking;}
    get targetName() {return this._targetName;}
    set action(e) {this._action = e;}
    
    get action() {return this._action;}
    set dir(e) {this._dir = e;}
    set love(e) {this._love = e;}
    set bag(e) {this._bag = e;}
    set hand(e) {this._hand = e;}
    set lover(e) {this._lover = e;}
    set clicking(e) {this._clicking = e;}
    set targetName(e) {this._targetName = e;}


    kiss(target) {
        
    }
    
    eat(item) {
        if(item=="candy") {
//            var msg = this.name + " has eaten candy! +25 love";
            this.addlove(25);
//            console.log(msg);  
        }
    }
    drink(item) {
        
    }
    
    pet() {       
        this.addlove(50);
    }
    
    hit(target) {
        
    }
    
    shoot() {
        
    }
    
    slap(target) {
        switch(target) {
            case "pet":
                this.sublove(50);
                break;
        }
    }
    
    addtobag(item) {
        this.bag = item;
    }
    
    holdinhand(item) {
        this.hand = item;w
    }
    
    warmup() {
        
    }
    
    propose_lover() {
        
    }
    
    propose_marry() {
        
    }
    
    heartbroken() {// activate if your love reaches 0
        
    }
    
    blissfuljoy() {// activate if your love reaches 400
        
    }
    
    addlove(amount) {
         this.love = this.love + amount;
         if(this.love>500) this.love=500
    }
    
    sublove(amount) {
         this.love = this.love - amount;
         if(this.love<0) this.love=0
    }

    click() {
        if(this._targetName != "none" && this.action !="none") {
//            let target = super.choque(this._dir);
            let target = find.finditem(this._targetName);
            if(target == "none") target = find.findchar(this._targetName);
            let dist = 0;
            if(target != "none")  {
                dist = distances.distancel2(target,this);
                console.log("player dir: " + this.dir + 
                ", click: " + this.clicking + " targetName: " + 
                this._targetName + ", distance: " + dist + ", action: " + this._action);
            }
            
            if(target != "none" && dist==0) {
                switch(target.clase) {
                    case "barril candy":
                        switch(this.action) {
                            case "eat":
                                this.eat("candy"); 
                                break;
                            case "take":
                                this.addtobag("candy"); 
                                break;
                        }
                        
                    case "pet":
                        switch(this.action) {
                            case "pet":
                                this.pet(); 
                                break;
                             case "slap":
                                this.slap("pet"); 
                                break;
                        }
                    case "stick":
                        switch(this.action) {
                            case "take in hand":
                                if(this._targetName =="lightsaber") this.holdinhand("lightsaber");
                                break;
                             case "put in bag":
                                if(this._targetName =="lightsaber") this.addtobag("lightsaber"); 
                                break;
                        }    
                }
            }
            this._clicking = false;
        }
    }
    
    move() {

       var dir = this._dir;

        this.moving = false;
//        if( (keys[38] || keys[87])  ){//up
//            this.animation = this.animations[3];
//            dir=1;
//        }
//        if( (keys[40] || keys[83])   ){//down
//            this.animation = this.animations[0];
//            dir=5;
//        }
//        if( (keys[37] || keys[65]) ){//left
//            this.animation = this.animations[1];
//            if(dir === 1) dir=8;
//            else if(dir === 5) dir = 6;
//            else dir = 7;
//        }
//        if( (keys[39] || keys[68]) ){//right
//            this.animation = this.animations[2];
//            if(dir === 1) dir=2;
//            else if(dir === 5) dir = 4;
//            else dir = 3;
//        }
        if(dir !== 0){
          let target = super.choque(dir);
          if(target === "null") super.apuramove(dir);
          else if(this === bubble1.host && target.clase==="char") {
              bubtake = Date.now();              
              bubble1.host = target;
//             console.log("xoc tipus: " + target.clase);
          
          }
         else  {
//             console.log("xoc2 tipus: " + target.clase);
         }
//          this.animation.animating = true;
        
        } else{
//          this.animation.animating = false;
        }

//        this.animation.animate();
    }

    draw() {
//        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, this.x_init, this.y_init, this.width, this.height);
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cplayer;
}
