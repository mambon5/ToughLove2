//client

const socket = io();
const messageContainer = document.getElementById('message-container');
const roomContainer = document.getElementById('room-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');





if (messageForm != null) {
  const name = prompt('What is your name?');
  player.name = name;
  appendMessage('You joined');
  console.log("4: player: " + player.name + ", width: " + player.width + 
        ", height: " + player.height);
  socket.emit('new-user', roomName, player);
    console.log("you joined");
  messageForm.addEventListener('submit', e => {
    e.preventDefault();
    // const message = messageInput.value + `player x: ${Math.round(player.x) + 
    //         ", y: " +Math.round(player.y)}`;
    const message = messageInput.value ;
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', roomName, message);
    messageInput.value = '';
    messageInput.blur();
    
  });
}

socket.on('room-created', room => {
  const roomElement = document.createElement('div');
  roomElement.innerText = room;
  const roomLink = document.createElement('a');
  roomLink.href = `/${room}`;
  roomLink.innerText = 'join';
  roomContainer.append(roomElement);
  roomContainer.append(roomLink);
});

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on("bubble state", bubhostname => {
   vchar.forEach(char => {
       if(char.name == bubhostname) bubble1.host = char
   });
});



socket.on("current users", (charvec, objvec) => {   
    objvec.forEach(obj  => {
      obj = find_item(obj);
      CobjectManager.add(obj);
      CentityManager.fillArray();
    })
    
    charvec.forEach(user  => {
        monst = getcharacter(user, type="monster");
        if(monst.name=="sheepDog") {//dog
            console.log("doggo found")
            for (var i = 0; i < 5; i ++){
            monst.animations.push(new Animation(sheepDogSheet, i, [walkdt/2, walkdt/2, walkdt/2, walkdt/2]));
         }
        } else if (monst.name=="beagleDog") {            
            for (var i = 0; i < 6; i ++){
            monst.animations.push(new Animation(beagleDogSheet, i, [walkdt/2, walkdt/2, walkdt/2, walkdt/2]));
         }
        } else if (monst.name=="riverKitty") {            
            for (var i = 0; i < 4; i ++){
            monst.animations.push(new Animation(rivKittySheet, i, [walkdt/2, walkdt/2, walkdt/2, walkdt/2]));
         }
        } else {//other monsters
             for (var i = 0; i < 4; i ++){
            monst.animations.push(new Animation(monster3AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
         }
         }
        
         monst.animation = monst.animations[0];
        CcharacterManager.add(monst);        
    });
    CentityManager.fillArray();
    
//    console.log("here come the current users connected");
//    
//    
//    console.log(charvec);
//    console.log(charvec.length);
});

//var players = []
//use socket.id instead of username
socket.on('user-connected', (player, user) => {
  // crear un player2
    
    //adding a new player to the client
    newpl = getcharacter(player, "monster");

    
    //getcharacter(player, type="monster");
    
    
    
    
//    newpl = new Cmonster(plyr._x,plyr._y, 32*scale, 
//    48*scale, plyr._scale,
//    plyr._speed, plyr._margins, plyr._name, plyr._clase);
    if(newpl.name.toLowerCase()=="trump") {
        newpl.width=newpl.width*1.4
        newpl.height=newpl.height*1.4
        var anims = [0,3,1,2];//trumps animations are sorted vertically in another order
        for (var i = 0; i < 4; i ++){
            newpl.animations.push(new Animation(trumpSheet, anims[i], [walkdt, walkdt, walkdt, walkdt]));
        } 
    }else {
        for (var i = 0; i < 4; i ++){
            newpl.animations.push(new Animation(monster3AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
        }
    }
    newpl.animation = newpl.animations[0];
    
    CcharacterManager.add(newpl);
//    console.log(newpl.x+" "+newpl.y+" "+ newpl.width+" "+ newpl.height+" "+ 
//    newpl.scale+" "+ newpl.speed+" "+ newpl.margins+" "+ newpl.name+" "+ newpl.clase +
//    " " + newpl.dir);
    CentityManager.fillArray();
    

appendMessage(`${newpl.name} connected, coords: ( ${Math.round(newpl.x)}, ${Math.round(newpl.y)} )`);
})

//setInterval(function() {
//    if(typeof player != 'undefined') socket.emit('movement', player, roomName );
//}, 1000 / 1);



socket.on('current states', function(users) {
    
  
    
  users.forEach(user  => {
      var name = user._name
      var x = user._x
      var y = user._y
      var dir = user._dir;
      var love = user._love;
      var bag = user._bag;
      var lover = user._lover;
      var hand = user._hand;

      
      vchar.forEach(plyr => {
          if(plyr.name == name) {
              plyr.x = x;
              plyr.y = y;
              plyr.dir  = dir;
              plyr.love  = love;
              plyr.lover  = lover;
              plyr.hand  = hand;
              plyr.bag  = bag;
          }
      })
      
      
  })
});


socket.on('user-disconnected', user => {
  appendMessage(`${user.name} disconnected`);
  
  var usr = getcharacter(user);
  CcharacterManager.delete(usr);
  CentityManager.fillArray();
 
  //delete player if we have to.
})


socket.on("stove-state-changed", data => {
    // data = { name: "stove1", isOn: true/false }
    let stoveObj = CobjectManager.findByName(data.name); // Funció que tu tinguis per buscar l’objecte localment
    if(stoveObj) {
        stoveObj.isOn = data.isOn;

        // Aquí actualitzes la representació visual de la stove, per exemple:
        if(stoveObj.isOn) {
            // Mostra foc o imatge d’estufa encesa
            stoveObj.animation = stoveObj.animations[0];
            stoveObj.animation.animating = true;
            console.log("estufa encesa");

        } else {
            // Mostra imatge d’estufa apagada
            stoveObj.animation = stoveObj.animations[1];
            stoveObj.animation.animating = false;
            console.log("estufa apagada");
        }
    }
});



function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message
  messageContainer.prepend(messageElement)
}
       
window.addEventListener("keyup", function(e){
    if(e.keyCode==9) {
        messageInput.focus();
    }
    
});

function getcharacter(chari, type="monster") {
    
    chari = JSON.parse(JSON.stringify(chari));
    //parsing JSON object as string 
    
    x = chari._x;
    y = chari._y;
    width = chari._width;
    height = chari._height;
    var scal = chari._scale;
    spd = chari._speed;
    margi = chari._margins
    name = chari._name
    clase = chari._clase
    dir = chari._dir;
    love = chari._love;
    bag = chari._bag;
    hand = chari._hand;
    lover = chari._lover;
    action = chari._action;
    clicking = chari._clicking;
    targetName = chari._targetName;
    clicktime = chari._clicktime;
    
    
    if(type == "monster") { 
        res = new Cmonster(x,y,width, height, scal, spd, margi, name, clase, dir,
        love, bag, hand, lover, action, clicking, targetName, clicktime);
        return  res;
    } else {
        if(type=="player") {
            res = new Cplayer(x,y,width, height, scal, speed, margi, name, clase, dir,
        love, bag, hand, lover, action, clicking, targetName, clicktime);
            return  res;
        }
    }
    return "not a player nor a monster";
}



function find_item(obj) {
     obji = JSON.parse(JSON.stringify(obj));
    //parsing JSON object as string 
    
    x = obji._x;
    y = obji._y;
    width = obji._width;
    height = obji._height;
    scale = obji._scale;
    spd = obji._speed;
    margi = obji._margins
    name = obji._name
    clase = obji._clase
    
    
    const obja = new Cobject(x,y, width, height, scale, spd, margi, name, clase);
   
    
    if(name == "stove1") { 
        console.log("entrant el find item stove 1 part");
        obja.animations.push(new Animation(stoveOnFireAnimationSheet, 0, [5,5,5,5,5,5,5]));
        obja.animations.push(new Animation(stoveApagadaAnimationSheet, 0, 1));
        obja.animation = obja.animations[0];
        obja.animation.animating = true;
    } else if(name == "stove2") {
        obja.animations.push(new Animation(stoveOnFireAnimationSheet, 0, [5,5,5,5,5,5,5]));
        obja.animations.push(new Animation(stoveApagadaAnimationSheet, 0, 1));
        obja.animation = obja.animations[1];
    
    } else if(clase == "barril candy") {
        obja.animations.push(new Animation(barril1AnimationSheet, 0, 1));
        obja.animation = obja.animations[0];
    }  else if(name == "lightsaber") {
        obja.animations.push(new Animation(lightsaberSheet, 0, [4,4,4,4,4]));
        obja.animation = obja.animations[0];
        obja.animation.animating = true;
        
        
        
        
        
    } 
    return(obja);
}