/* 
 * Rectangle class
 */

class Cclient {
    constructor(socketid) {
        this._socketid = socketid;
        this._socket = io();
        this._serverStateCount = 0;
        this._movement = { up: false, down: false, left: false, right: false, sequence_number: 0 };
        this._pending_movements = new Array();
        this._serverState = { players: new Array(), timestamp: 0 };
        this._buffer_positions = new Array();
        this._player = { name: "", x: 0, y: 0, last_sequence_number: 0 };     
    }
    
    
    get socketid() {return this._socketid;}
    get movement() {return this._movement;}
    get serverState() {return this._serverState;}
    
    start() {
        this._socket.on('state', (state) => {
            console.log(state);
            state.timestamp = new Date();
            this._serverState = state;
            var buffer_state = {
                players: new Array(),
                timestamp: 0
            };
            for (var i in state.players) {//gets all the x's and y's of players
                buffer_state.players[i] = {
                    x: state.players[i].x,
                    y: state.players[i].y,
                    last_sequence_number: state.players[i].last_sequence_number
                };
            }
            buffer_state.timestamp = state.timestamp;
            this._buffer_positions.push(buffer_state);
            this._serverStateCount++;
        });
//        const canvas = document.getElementById('canvas');
        //maybe not necessary to redefine canvas here
        
        if (canvas != null) {
            const name = prompt('What is your name?');
            this._socket.emit('new player', name, roomName);
        }
    }
    
};


if (typeof module !== "undefined" && module.exports) {
    module.exports =Cclient;
}