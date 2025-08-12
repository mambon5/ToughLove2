/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getpixelmats(contxt, x=0, y=0, width = 10, height=10) {
    //get the 4 matrices from the selected pixels
     width = Math.ceil(width);
    height = Math.ceil(height);
    let imgData = contxt.getImageData(x,y,width,height);
    let i=0;
    let j=0;
    let matR = [];
    let matG = [];
    let matB = [];
    let matA = [];
   
    for(var f = 0; f < height; f++) {
        matR[f] = [];
        matG[f] = [];
        matB[f] = [];
        matA[f] = [];
    }
    for (let w = 0; w < imgData.data.length; w += 4) {
        matR[i][j] = imgData.data[w];
        matG[i][j] = imgData.data[w+1];
        matB[i][j] = imgData.data[w+2];
        matA[i][j] = imgData.data[w+3];
        
        ++j;
    if( (w+4) % (width*4) === 0) {
        j=0;
        ++i;
    }
    }
//     aux3.innerHTML = " dim: " + matR.length + ", " + matR[0].length +
//               " rwidth; " + player.width + "<br>" + 
//               "height: " + height + ", width: " + width + "<br>";
//    for(let i=0; i<matR.length; ++i) {
//        for(let j=0; j<matR[0].length; ++j) {
//            aux3.innerHTML += pad(matR[i][j],3) + " ";
//        }
//        aux3.innerHTML += " <br> ";
//    }
//       aux3.innerHTML += " dim: " + matR.length + ", " + matR[0].length +
//               " rwidth; " + player.width;
//    aux3.innerHTML = "<br> red: <br> " + matR + " <br> green: <br>" +
//            matG + " <br> blue: <br>" + matB + 
//            " <br> alpha: <br>" + matA;
    return [matR, matG, matB, matA];
    
}

function imgmargins(contxt, x=0, y=0, width = 10, height=10) {
    let mats =  getpixelmats(contxt, x, y, width, height);
    matR = mats[0];
    matG = mats[1];
    matB = mats[2];
    //find first nonwhite pixel on left:
    let w = -1;
    f = matR.length;
    c = matR[0].length
    
    for(let i=0; i<c; ++i) {
        for(let j=0; j<f; ++j) {
            if(matR[j][i] != 255 || matG[j][i] != 255 || matB[j][i] != 255 ) {
                w = i+1;
                j=f; i = c;
            }
        }
    }
    margl = w;
    
    //margin top:
     for(let i=0; i<f; ++i) {
        for(let j=0; j<c; ++j) {
            if(matR[i][j] != 255 || matG[i][j] != 255 || matB[i][j] != 255 ) {
                w = i+1;
                j=c; i = f;
            }
        }
    }
    margt = w;
    
    //margin right:
     for(let j=(c-1); j>(-1) ; --j) {
        for(let i=(f-1); i>(-1) ; --i) {
            if(matR[i][j] != 255 || matG[i][j] != 255 || matB[i][j] != 255) {
                w = c-1- j;
                j=-1; i = -1;
            }
        }
    }
    margr = w;
    
    //margin bottom:
     for(let j=(f-1); j>(-1) ; --j) {
        for(let i=(c-1); i>(-1) ; --i) {
            if(matR[j][i] != 255 || matG[j][i] != 255 || matB[j][i] != 255) {
                w = f-1- j;
                j=-1; i = -1;
            }
        }
    }
    margb = w;
    
    
    aux3.innerHTML = "margins: <br>" + margl + ", " + margt + 
            ", "+margr + ", " + margb;
    return [margl, margt, margr, margb];
}

function outputpixels(contxt, width=20, height=20) {
    let imgData = contxt.getImageData(0,0,width,height);
            aux2.innerHTML = " <br> Reds <br> ";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
              
               aux2.innerHTML += " <br> Green <br>";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i+1] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
                aux2.innerHTML += " <br> Blue <br>";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i+2] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
               aux2.innerHTML += " <br> Alpha <br>";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i+3] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
}

function checkTransparency(contxt, x=0, y=0, width = 10, height=10) {
    let mats =  getpixelmats(contxt, x, y, width, height);
    matA = mats[3];
    
    let w = margl = margt = margr = margb = -1;
    f = matA.length;
    c = matA[0].length;
    
    for(let i=0; i<c; ++i) {
        for(let j=0; j<f; ++j) {
            if(matA[j][i] !== 0) {
                w = i+1;
                j=f; i = c;
            }
        }
    }
    margl = w;
    
    //margin top:
     for(let i=0; i<f; ++i) {
        for(let j=0; j<c; ++j) {
            if(matA[i][j] !== 0) {
                w = i+1;
                j=c; i = f;
            }
        }
    }
    margt = w;
    
    //margin right:
     for(let j=(c-1); j>(-1) ; --j) {
        for(let i=(f-1); i>(-1) ; --i) {
            if(matA[i][j] !== 0) {
                w = c-1- j;
                j=-1; i = -1;
            }
        }
    }
    margr = w;
    
    //margin bottom:
     for(let j=(f-1); j>(-1) ; --j) {
        for(let i=(c-1); i>(-1) ; --i) {
            if(matA[j][i] !== 0) {
                w = f-1- j;
                j=-1; i = -1;
            }
        }
    }
    margb = w;
    
    return [margl, margt, margr, margb];
}