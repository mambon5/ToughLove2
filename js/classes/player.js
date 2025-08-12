/*
 * Player class
 */

if (typeof module !== "undefined" && module.exports) {
    Ccharacter = require("./character");
}

class Cplayer extends Ccharacter {
       constructor(x, y, width, height, scale, speed, margins, name="hero", clase="player", dir = 0, love=200, bag = "empty", hand="empty",
    lover="none", action="none",clicking=false, targetName ="none") {

        super(x, y, width, height, scale, speed, margins, name, clase);
        this._dir = dir;
        this._love = love;
        this._bag = bag;
        this._hand = hand;
        this._lover = lover;
        this._clicking = clicking;
        this._action = action;
        this._targetName = targetName;
    }

    get dir() {return this._dir;}
    get love() {return this._love;}
    get bag() {return this._bag;}
    get hand() {return this._hand;}
    get lover() {return this._lover;}
    get clicking() {return this._clicking;}
    get targetName() {return this._targetName;}
    get action() {return this._action;}
   
    set dir(e) {this._dir = e;}
    set love(e) {this._love = e;}
    set bag(e) {this._bag = e;}
    set hand(e) {this._hand = e;}
    set lover(e) {this._lover = e;}
    set clicking(e) {this._clicking = e;}
    set targetName(e) {this._targetName = e;}
    set action(e) {this._action = e;}
    
    update() {
                

        if(player.bag != "empty") {            
            bagobj.innerHTML = player.bag + " in bag";
        } else  bagobj.innerHTML = "bag is empty";
        if(player.hand != "empty") {            
            handobj.innerHTML = "holding a " + player.hand;
        }
    }
    
    doAction(dom) {
        let html ="";
        console.log("dom id: " + dom.id);
        switch(dom.id) {
            case "eat":
                console.log("EATING!!")
                html =  '<div id="eat" class="action">NYAM!!</div>';
                break;
            case "take": //una mascota té les opcions de pet o slap!
                html =  '<div id="take" class="action">FLOP!</div>';
                break;
            case "slap": //una mascota té les opcions de pet o slap!
               html =  '<div id="slap" class="action">PLAFF!!</div>';
                break;
            case "hug": //una mascota té les opcions de pet o slap!
              html =  '<div id="hug" class="action">Hugs!!</div>';
               break;
            case "give": //una mascota té les opcions de pet o slap!
              html =  '<div id="give" class="action">item Given!!</div>';
               break;
             case "lover": //una mascota té les opcions de pet o slap!
                html =  '<div id="lover" class="action"><3 ...</div>';
                break;
            case "pet": //una mascota té les opcions de pet o slap!
                html =  '<div class="action">cou-cou ^^!!</div>';
                break;
            case "start fire": //una mascota té les opcions de pet o slap!
                html =  '<div id="stove" class="action">FIRE!!</div>';
                break;
            case "stop fire": //una mascota té les opcions de pet o slap!
                html =  '<div id="stove" class="action">PLUF!</div>';
                break;
        }
        optionMenu.inhtml(html);
        this.action = dom.id
        this.clicking = false; //player ended the clicking process.
    }     
    
    clearAction() {
        this.action = "none";
    }
    
    checkClick() {
        //reset action in the beggining of click after 2 sec elapsed from the last action. If new action is
        //created in this 2 seconds time, the new action will be recorded and not deleted;

        
            
            var target = selobj.host;            
            
            
            if(mouse.click && target!="empty" && arrayxoc(mouse,ventities)!=(-1) && this.action =="none") {
                console.log("player " + this.name + " targets " + target.name)
                const dist = distancel2(target,this);
                switch(target.clase) {
                    case "barril candy":
                        if(dist==0 )  optionMenu.openMenu("candy");
                        break;
                    case "pet":
                        optionMenu.openMenu("pet");
                        break;
                    case "stove":
                        optionMenu.openMenu("stove");
                        break;
                    case "stick":
                        optionMenu.openMenu("stick");
                        break;
                    case "player":
                        if(target.name != this.name && dist < 10){
                            console.log("lover player: " + this.lover)
                            if(this.lover=="none" && target.lover=="none") {
                                optionMenu.openMenu("love player")
                            } else {
                                optionMenu.openMenu("other player")
                            }
                        } else if(target.name == this.name) {
                            optionMenu.openMenu("self");
                        }
                        break;
                        
                }
               this._targetName = target.name;
               this.clicking = true; //player is clicking stuff.
            } else if(mouse.click  &&  this.action =="none"|| this.dir != 0) {
                console.log("clicking cleared")
                optionMenu.openMenu("close");
                this.clicking = false;
                this._targetName = "none";
            } 
            
//            if(mouse.click) console.log("action: " + this.action + ", target: " + target + 
//                    ", targetname " + this._targetName + ", this name: " + this.name + ", equal 1: " +
//                    (target.name == this.name) + ", equal 2: " + (this._targetName == this.name));
            
        
    }
    


    move() {
        let dir = 0;
        this.moving = false;
        if( (keys[38] || keys[87])  ){//up
            this.animation = this.animations[3];
            dir=1;
        }
        if( (keys[40] || keys[83])   ){//down
            this.animation = this.animations[0];
            dir=5;
        }
        if( (keys[37] || keys[65]) ){//left
            this.animation = this.animations[1];
            if(dir === 1) dir=8;
            else if(dir === 5) dir = 6;
            else dir = 7;
        }
        if( (keys[39] || keys[68]) ){//right
            this.animation = this.animations[2];
            if(dir === 1) dir=2;
            else if(dir === 5) dir = 4;
            else dir = 3;
        }
       if(document.activeElement.id !== "message-input") { //chat is not selected, can move
            if(dir !== 0 ){ //dir is 0 and chat not selected
//              this.action = "none";
              let xoc = super.choque(dir);
              if(xoc === "null" && !this.moving) {

                  //suggest move to server.
                  this.moving = true;
    //              super.apuramove(dir);
              }
              else if(this === bubble1.host && xoc.clase==="char") {
                  //give away bubble, also send this info to server.
    //              bubtake = Date.now();              
    //              bubble1.host = xoc;
    //              aux3.innerHTML = xoc.clase;

              }
             else aux2.innerHTML = xoc.clase;
              this.animation.animating = true;
            } else{
                this.moving = false;
              this.animation.animating = false;
            }
            this.dir = dir
//            socket.emit("player movement", roomName, dir);
            this.animation.animate();
        }
    }

    draw() {
        canvas.ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, this.x_init, this.y_init, this.width*this.scale, this.height*this.scale);
        let text = Math.round(player.love/5)+"%";
        lovebar.style.width = text;
        lovebar.innerHTML = player.love
    }
};




if (typeof module !== "undefined" && module.exports) {
    module.exports = Cplayer;
}