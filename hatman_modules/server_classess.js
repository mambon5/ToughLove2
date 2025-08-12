/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//
var map = require('./classes/map');
var transpose = map.transpose
var Cmap = map.Cmap
const Crectangle = require('../js/classes/rectangle');
//var Animation = require('../js/classes/Animation');
//var AnimationSheet = require('../js/classes/AnimationSheet');
var Centity = require('./classes/entity');
var Ccharacter = require('./classes/character');
var Cobject = require('./classes/object');
var CcharacterManager = require('./classes/characterManager');
var Cplayer = require('./classes/player');
var Cmonster = require('./classes/monster');
//var Cbackground = require('../js/classes/background');
var Cgame = require('./classes/game');
var bubble = require('./classes/bubble');
var Cbubble = bubble.Cbubble
bubtake = bubble.bubtake
var CobjectManager = require('./classes/objectManager');
var CfloorManager = require('./classes/floorManager');
var CentityManager = require('./classes/entityManager');
var CuserManager = require('./classes/userManager');
var Cuser = require('./classes/user');

//var Cclient = require('../js/classes/client_trial');
//
//
//module.exports.Animation = Animation
//module.exports.AnimationSheet = AnimationSheet
//module.exports.Cbackground = Cbackground
module.exports.Cbubble = Cbubble
module.exports.bubtake = bubtake
module.exports.Ccharacter = Ccharacter
module.exports.CcharacterManager = CcharacterManager
//module.exports.Cclient = Cclient
module.exports.Centity = Centity
module.exports.CentityManager = CentityManager
module.exports.CfloorManager = CfloorManager
module.exports.Cgame = Cgame
module.exports.transpose = transpose
module.exports.Cmap = Cmap
module.exports.Cmonster = Cmonster
module.exports.Cobject = Cobject
module.exports.CobjectManager = CobjectManager
module.exports.Cplayer = Cplayer
module.exports.Crectangle = Crectangle
module.exports.Cuser = Cuser
module.exports.CuserManager = CuserManager


