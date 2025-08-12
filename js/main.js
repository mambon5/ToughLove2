let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');
let aux3 =  document.getElementById('aux3');
let lovebar =  document.getElementById('lovebar');
let lover =  document.getElementById('lover');
bagobj =  document.getElementById('bag');
handobj =  document.getElementById('hand');


lovebar.style.width = "50%";
lover.innerHTML = "no lover yet.."
bag.innerHTML = "bag is empty"
hand.innerHTML = "hands are free"






scale = 1.6;
const speed = 6;
walkdt = 5;


optionMenu = new ChtmlBox("optionMenu",-500,300,300,160,1,"black");
console.log
canvas = new Ccanvas(0,0,930, 462, 1);
console.log("scale " + scale)
console.log("canvas w h: " + canvas.width + " " + canvas.height)
mouse = new Cmouse(0,0,1,1,scale);

function mouseCoords(event) { //computing mouse coordinates when hovering on canvas
    
    var canvRect = canvas.dom.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / canvRect.width,    // relationship bitmap vs. element for X
    scaleY = canvas.height / canvRect.height;  // relationship bitmap vs. element for Y
    
    mouse.x =  (event.clientX - canvRect.left) * scaleX - canvas.width/2 + player.x;   // scale mouse coordinates after they have
    mouse.y =  (event.clientY - canvRect.top) * scaleY - canvas.height/2 + player.y;    //we want mouse position relative to moving canvas
   
   
     }

const map = new Cmap(3,5);
const grassSheet = new TileSheet("images/forest/basicGrassWall4.png", 192,96, 3, 6);


const playerAnimationSheet   = new AnimationSheet("images/henryjones.png", 128, 192, 4, 4);
const monster1AnimationSheet = new AnimationSheet("images/captainamerica_shield.png", 128, 192, 4, 4);
const monster2AnimationSheet = new AnimationSheet("images/greebo2.png", 128, 128, 4, 4);
const monster3AnimationSheet = new AnimationSheet("images/protocoldroid2.png", 128, 192, 4, 4);
const monster4AnimationSheet = new AnimationSheet("images/tiana2.png", 128, 192, 4, 4);
const monster5AnimationSheet = new AnimationSheet("images/rhodey.png", 128, 192, 4, 4);
const monster6AnimationSheet = new AnimationSheet("images/laila.png", 128, 192, 4, 4);
const monster7AnimationSheet = new AnimationSheet("images/officewoman5.png", 128, 192, 4, 4);
const barril1AnimationSheet = new AnimationSheet("images/barril1.png", 115, 130, 1, 1);
const barril2AnimationSheet = new AnimationSheet("images/barril2.png", 164, 178, 1, 1);
const lollypalAnimationSheet = new AnimationSheet("images/lollypoppal.png", 100, 237, 1, 1);
const candybowlAnimationSheet = new AnimationSheet("images/candybowl1.png", 62, 93, 1, 1);
const bubble1AnimationSheet = new AnimationSheet("images/bubble1.png", 54, 16, 1, 3);
const selectobjAnimationSheet = new AnimationSheet("images/select_obj.png", 54, 19, 1, 3);
const stoveOnFireAnimationSheet = new AnimationSheet("images/stoveonfire1.png", 329, 84, 1, 7);
const stoveApagadaAnimationSheet = new AnimationSheet("images/stove1.png", 50, 84, 1, 1);
const planta1AnimationSheet = new AnimationSheet("images/plantaterra1.png", 22,26, 1, 1);
const stones1AnimationSheet = new AnimationSheet("images/pedres1.png", 62,34, 1, 1);
const trumpSheet = new AnimationSheet("images/trump_run.png", 600,400, 4, 6);
const sheepDogSheet = new AnimationSheet("images/sprites_char/DogSheepdog01.png", 264,240, 5, 4);
const beagleDogSheet = new AnimationSheet("images/sprites_char/DogBeagle01.png", 160,240, 6, 4);
const rivKittySheet = new AnimationSheet("images/sprites_char/riverKitty01.png", 128,128, 4, 4);
const lightsaberSheet = new AnimationSheet("images/char_items/lightsabericonblue.png", 120,43, 1, 5);



player = new Cplayer(canvas.width/2, canvas.height/2, 32, 48, scale, speed, marg_cpmerica, name="hjones");
//player.image.src = "images/asdf.png"; // 24.25, 45.5
player.generateValidPos();
console.log("captai america margins:" + player.margins)
console.log("Player: " + player.x + " | " + player.y + " width: " + player.width + ", height: " + 
        player.height);
for (var i = 0; i < 4; i ++){
  player.animations.push(new Animation(monster1AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
player.animation = player.animations[0];
CcharacterManager.add(player, vchar.push);

const monst1 = new Cmonster(canvas.width/10*0, canvas.height/3,
                32, 48, scale, speed, marg_cpmerica, name="captainamerica_shield");
//monst1.image.src = "images/captainamerica_shield.png";
for (var i = 0; i < 4; i ++){
  monst1.animations.push(new Animation(monster1AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst1.animation = monst1.animations[0];
monst1.generateValidPos();
//CcharacterManager.add(monst1);

const monst2 = new Cmonster(canvas.width/10*1, canvas.height/3,
32, 32, scale, speed/2, marg_greebo2, name="greebo2");
//monst2.image.src = "images/greebo2.png";
for (var i = 0; i < 4; i ++){
  monst2.animations.push(new Animation(monster2AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst2.animation = monst2.animations[0];
monst2.generateValidPos();
//CcharacterManager.add(monst2);

const monst3 = new Cmonster(canvas.width/10*2, canvas.height/3,
32, 48, scale, speed/2, marg_prodroid2, name="protocoldroid2");
//monst3.image.src = "images/protocoldroid2.png";
for (var i = 0; i < 4; i ++){
  monst3.animations.push(new Animation(monster3AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst3.animation = monst3.animations[0];
monst3.generateValidPos();
//CcharacterManager.add(monst3);

const monst4 = new Cmonster(canvas.width/10*3, canvas.height/3,
32, 48, scale, speed*1.1, marg_tiana2, name="tiana2");
//monst4.image.src = "images/tiana2.png";
for (var i = 0; i < 4; i ++){
  monst4.animations.push(new Animation(monster4AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst4.animation = monst4.animations[0];
monst4.generateValidPos();
//CcharacterManager.add(monst4);

const monst5 = new Cmonster(canvas.width/10*4, canvas.height/3,
32, 48, scale, speed*1.5, marg_rhodey, name="rhodey");
//monst5.image.src = "images/rhodey.png";
for (var i = 0; i < 4; i ++){
  monst5.animations.push(new Animation(monster5AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst5.animation = monst5.animations[0];
monst5.generateValidPos();
//CcharacterManager.add(monst5);

const monst6 = new Cmonster(canvas.width/10*6, canvas.height/3,
32, 48, scale, speed*1.1, marg_laila, name="laila");
for (var i = 0; i < 4; i ++){
  monst6.animations.push(new Animation(monster6AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst6.animation = monst6.animations[0];
monst6.generateValidPos();
//CcharacterManager.add(monst6);

const monst7 = new Cmonster(canvas.width/10*6, canvas.height/3,
32, 48, scale, speed*1, marg_laila, name="officewoman05");
for (var i = 0; i < 4; i ++){
  monst7.animations.push(new Animation(monster7AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
}
monst7.animation = monst7.animations[0];
monst7.generateValidPos();
CcharacterManager.add(monst7);

const stove1 = new Cobject(canvas.width / 10 * 6, canvas.height * 2 / 3, 34, 60, scale, 0, 
marg_stove,  name= "stove11", clase="obj");
stove1.animations.push(new Animation(stoveOnFireAnimationSheet, 0, [5,5,5,5,5,5,5]));
stove1.animations.push(new Animation(stoveApagadaAnimationSheet, 0, 1));
stove1.animation = stove1.animations[0];
stove1.animation.animating = true;
//CobjectManager.add(stove1);

const stove2 = new Cobject(canvas.width / 10 * 6, canvas.height * 2 / 3, 34, 60, scale, 0, 
marg_stove,  name= "stove2", clase="obj");
stove2.animations.push(new Animation(stoveOnFireAnimationSheet, 0, [5,5,5,5,5,5,5]));
stove2.animations.push(new Animation(stoveApagadaAnimationSheet, 0, 1));
stove2.animation = stove2.animations[1];
stove1.animation.animating = false;
//CobjectManager.add(stove2);



const planta = "Null";
for(let i=0; i<10; ++i) {
    planta1 = new Cobject(canvas.width / 10 * 6, canvas.height * 2 / 3, 22,26, scale, 0, 
    [0,0,0,0],  name= ("plantafloor"+i), clase="flooritem");
    planta1.animations.push(new Animation(planta1AnimationSheet, 0, 1));
    planta1.animation = planta1.animations[0];
    CfloorManager.add(planta1);
}


for(let i=0; i<5; ++i) {
     const stones = new Cobject(canvas.width / 10 * 4, canvas.height * 2 / 3, 31*1.6, 17*1.5, scale, 0, 
    [0,0,0,0],  name= ("piedrasfloor"+i), clase="flooritem");
    stones.animations.push(new Animation(stones1AnimationSheet, 0, 1));
    stones.animation = stones.animations[0];
    CfloorManager.add(stones);
}

const barril1 = new Cobject(canvas.width/10*7, canvas.height/3, 32, 37, scale, 0, 
marg_barril1,  name= "barril1", clase="mom");
barril1.animations.push(new Animation(barril1AnimationSheet, 0, 1));
barril1.animation = barril1.animations[0];
//CobjectManager.add(barril1);

const barril2 = new Cobject(canvas.width / 10 * 6, canvas.height * 2 / 3, 32, 37, scale, 0, 
marg_barril1,  name= "barril1", clase="mom");
barril2.animations.push(new Animation(barril1AnimationSheet, 0, 1));
barril2.animation = barril2.animations[0];
//init_pos = barril2.generateValidPos();
//barril2.x = init_pos[0];
//barril2.y = init_pos[1];
console.log("Barril 2: " + barril2.x + " | " + barril2.y);
//CobjectManager.add(barril2);

 //genera i barrils aleatoriament de candy:
for(let i=0; i<20; ++i) {
    barril3 = new Cobject(canvas.width / 10 * 6, canvas.height * 3 / 3, 32, 37, scale, 0, 
    marg_barril1,  name= ("barrillcandy"+i), clase="mom");
    barril3.animations.push(new Animation(barril1AnimationSheet, 0, 1));
    barril3.animation = barril3.animations[0];
    //init_pos = barril3.generateValidPos();
    //barril3.x = init_pos[0];
    //barril3.y = init_pos[1];
   // CobjectManager.add(barril3);
}

 //genera i barrils aleatoriament de vi:
for(let i=0; i<20; ++i) {
    barril3 = new Cobject(canvas.width / 10 * 6, canvas.height * 3 / 3, 32, 37, scale, 0, 
    marg_barril1,  name= ("barrilwine"+i), clase="mom");
    barril3.animations.push(new Animation(barril2AnimationSheet, 0, 1));
    barril3.animation = barril3.animations[0];
    //init_pos = barril3.generateValidPos();
    //barril3.x = init_pos[0];
    //barril3.y = init_pos[1];
   // CobjectManager.add(barril3);
}
//palo de piruletas:
for(let i=0; i<10; ++i) {
    lollypal = new Cobject(canvas.width/10*6, canvas.height*3/3, 
        20, 47, scale, 0, 
    marg_lollypal,  name= ("lollypopbar"+i), clase="mom");
    lollypal.animations.push(new Animation(lollypalAnimationSheet, 0, 1));
    lollypal.animation = lollypal.animations[0];
    //init_pos = lollypal.generateValidPos();
//    lollypal.x = init_pos[0];
//    lollypal.y = init_pos[1];
    //CobjectManager.add(lollypal);
}

//bol de chuches
for(let i=0; i<10; ++i) {
    candybowl = new Cobject(canvas.width/10*6, canvas.height*3/3, 
        15, 20, scale, 0, 
    marg_candybowl,  name= ("candybowl"+i), clase="mom");
    candybowl.animations.push(new Animation(candybowlAnimationSheet, 0, 1));
    candybowl.animation = candybowl.animations[0];
    //init_pos = candybowl.generateValidPos();
//    lollypal.x = init_pos[0];
//    lollypal.y = init_pos[1];
   // CobjectManager.add(candybowl);
}

const bubble1 = new Cbubble(canvas.width/10*4, canvas.height/3,
    18, 16, scale, 0,[2,0,2,0], "bubble1", host=player, pos="top");

bubble1.animations.push(new Animation(bubble1AnimationSheet, 0, [5,5,5]));
bubble1.animation = bubble1.animations[0];
bubble1.animation.animating = true;

console.log("bubble pos " + bubble1.pos)

const selobj = new Cbubble(canvas.width/10*4, canvas.height/3, 
    18, 16, scale, 0,[2,0,2,0], "selectobj", host="empty", pos="around");//element for marking object selected

selobj.animations.push(new Animation(selectobjAnimationSheet, 0, [5,5,5]));
selobj.animation = selobj.animations[0];
selobj.animation.animating = true;


CentityManager.fillArray();
CfloorManager.generateValidPoses();
CobjectManager.generateValidPoses();



//background.image.src = "images/fix, y, width, height, speed, margins = [0,0,0,0]
const keys = [];
window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
//    console.log("key code pressed: " +e.keyCode);
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
});

window.addEventListener("mousedown", function(e){
    mouse.mousedown = true;
//    console.log("left mouse pressed: " +mouse.mousedown);
});
window.addEventListener("mouseup", function(e){
    mouse.mouseup = true;
    mouse.mousedown = false;
//    console.log("left mouse released: " + mouse.mouseup);
});
window.addEventListener("click", function(e){
    mouse.click = true;
//    console.log("left mouse clicked: " +  mouse.click);
});
/* *
 *
    37(left arrow)
    38(up arrow)
    39(right arrow)
    40(down arrow)
    87(w)
    65(a)
    83(s)
    68(d)
 *
 * */

// create a temporary canvas
/*var tempCanvas = document.createElement("canvas");
var tempCtx = tempCanvas.getContext("2d");

// set the temp canvas size == the canvas size
tempCanvas.width=canvas.width;
tempCanvas.height=canvas.height;

tempCtx.drawImage(player.animation.animationSheet.image, 0, 0, 150, 150, 0,0, 150, 150);
var hey = checkTransparency(tempCtx, 0, 0, 150, 150);
aux3.innerHTML = "left: " + hey[0] + "<br> top: " + hey[1] + "<br> right: " + hey[2] + "<br> bottom: " + hey[3];*/
            
const game = new Cgame(60);
game.startGame();
