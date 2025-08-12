/*
 * Player class
 */


class Cuser {
    constructor(socketid, req_sent, usrname) {
        this._socketid = socketid;
        this._req_sent = req_sent;
        this._usrname = usrname;
       
    }

    get socketid() {return this._socketid;}
    get req_sent() {return this._love;}
    get usrname() {return this._usrname;}
    

    set socketid(e) {this._socketid = e;}
    set req_sent(e) {this._req_sent = e;}
    set usrname(e) {this._usrname = e;}
  

};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cuser;
}
