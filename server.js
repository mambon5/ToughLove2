const express = require('express');
const app = express();
const server = require('http').Server(app);
io = require('socket.io')(server);
classes = require('./hatman_modules/server_classess');
global = require('./hatman_modules/globalvars/entityVars');
functions = require('./hatman_modules/server_functions');
margins = require('./js/globalvars/img_margins');

canvasw = 930;
canvash = 462;
scale = 1.6;
speed=10;

users = []
map = new classes.Cmap(3,5);
bubble1 = new classes.Cbubble(canvasw/10*4, canvash/3,
        18, 16, scale, 0,[2,0,2,0], "bubble1", "empty");
//vchar = [];
//vobj = [];
//ventities = [];
//vfloor = [];


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/style",express.static(__dirname + "/style"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/js",express.static(__dirname + "/js"));

app.use(express.urlencoded({ extended: true }));

//recti = new classes.Centity(10,4,3,2, 2, margins = [1,1,1,1], name="michelangelo");


//we create the main server loop and start it
game = new classes.Cgame(60);
game.startGame();

const rooms = { };

app.get('/', (req, res) => {
  res.render('index', { rooms: rooms })
})

app.post('/room', (req, res) => {
  if (rooms[req.body.room] != null) {
    return res.redirect('/')
  }
  rooms[req.body.room] = { 
      name: req.params.room,
      users: {} };
  res.redirect(req.body.room)
  // Send message that new room was created
  io.emit('room-created', req.body.room);
  
})

app.get('/:room', (req, res) => {
    //when a room is created, a Cmap and objects, or a full game should be created.
    //Cgame should start
  if (rooms[req.params.room] == null) {
    return res.redirect('/')
  }
  res.render('room', { roomName: req.params.room });
});

// server listen to port:
port = 5000
server.listen(port, function () {console.log('connected port:' + port);});


io.on('connection', socket => {
    socket.on('new-user', (room, player) => {
      
        //first we send the current players to the new user (without the new user)
        //then we add the new user to the server character array
        socket.emit("current users",vchar, vobj);     
        socket.join(room);
            //fer un generateValid pos que usi tots els usuaris de lhabitació, 
            //rooms[room].users
        plyr = JSON.parse(JSON.stringify(player));//we parse the JSON string(the object
        console.log(plyr)
             //structure is completely lost when transfering objects from Client/server
            //now we add this player to the character vector
        player = new classes.Cplayer(plyr._x,plyr._y, plyr._width, plyr._height, scale,
        plyr._speed, plyr._margins, plyr._name, "player");
        //    console.log("player "+ player.name + " added, with scale: " + player.scale + ", width: " + player.width +
        //             " and height: " + player.height);

        rooms[room].users[socket.id] = player;
        user = new classes.Cuser(socket.id, false, player.name);
        classes.CuserManager.add(user);


        classes.CcharacterManager.add(rooms[room].users[socket.id]);
        classes.CentityManager.fillArray();

        //    rooms[room].users[socket.id] = {
        //            name: player.name,
        //            x: player.x,
        //            y: player.y
        //            //last_sequence_number: 0
        //        };

        //    console.log("user: "+ rooms[room].users[socket.id].name);
        //    console.log("rooma name: " + room);
        socket.to(room).emit('user-connected', player, rooms[room].users[socket.id]);
        console.log("new player detected");
        //socket.to(room).broadcast.emit('user-connected', player, "whatever");
  });
  

  
  
  



//setInterval(function() {
//    Object.entries(rooms)
//    socket.emit('movement', player, roomName );
//}, 1000 / 60);
  
    socket.on('send-chat-message', (room, message) => {
        socket.to(room).emit('chat-message', { message: message, name: rooms[room].users[socket.id].name })
    });
    
    socket.on('disconnect', () => {
        getUserRooms(socket).forEach(room => {
            socket.to(room).emit('user-disconnected', rooms[room].users[socket.id] )
            delete rooms[room].users[socket.id];
          })
        })
  
  
//    socket.on("player movement", (room, dir) => {
//        rooms[room].users[socket.id].dir = dir;
//        plyr = rooms[room].users[socket.id];
//        plyr.dir = dir;
//    });

    socket.on("player move_click", (room, dir, action, targetName, clicking) => {
        
        //            if(target != "none") console.log("distance: " + )

        plyr = rooms[room].users[socket.id];
        plyr.dir = dir;
        plyr.targetName =targetName;
        plyr.action =action;
        plyr.clicking = clicking;
    });
  
  
});



function getUserRooms(socket) {
  return Object.entries(rooms).reduce((names, [name, room]) => {
    if (room.users[socket.id] != null) names.push(name);
    return names
  }, []);
}

function finditem(itname) {
    const res =  vobj.find(obj => obj.name == itname)
    if(res==undefined) return "none"
    return res
    
}

function findchar(charname) {
    const res =  vchar.find(obj => obj.name == charname)
    if(res==undefined) return "none"
    return res
}
