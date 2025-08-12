/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function drawobject(contxt, obj) {
     contxt.drawImage(obj.image, obj.frameX*obj.frameW, obj.frameY*obj.frameH, obj.frameW, obj.frameH, obj.x_init, obj.y_init, obj.width, obj.height);
 }
