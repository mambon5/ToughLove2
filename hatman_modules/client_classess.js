/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//
var map = require('../js/classes/map');
var transpose = map.transpose
var Cmap = map.Cmap
const Crectangle = require('../js/classes/rectangle');
//var Animation = require('../js/classes/Animation');
//var AnimationSheet = require('../js/classes/AnimationSheet');
var Centity = require('../js/classes/entity');
var Ccharacter = require('../js/classes/character');
var Cobject = require('../js/classes/object');
var CcharacterManager = require('../js/classes/characterManager');
var Cplayer = require('../js/classes/player');
var Cmonster = require('../js/classes/monster');
//var Cbackground = require('../js/classes/background');
var Cgame = require('../js/classes/game');
var bubble = require('../js/classes/bubble');
var Cbubble = bubble.Cbubble
var bubtake = bubble.bubtake
var CobjectManager = require('../js/classes/objectManager');
var CfloorManager = require('../js/classes/floorManager');
var CentityManager = require('../js/classes/entityManager');
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



