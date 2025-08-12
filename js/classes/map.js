/* 
 * Map class
 */

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

class Cmap {
    constructor(rows, cols) {
this._map_matrix = [
                [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
                [0,1,1,1,1,1,0,0,0,1,0,1,0,0,0],
                [0,0,1,1,0,2,1,1,1,1,0,1,1,0,0],
                [0,1,1,1,0,0,1,0,0,1,1,1,1,1,0],
                [0,0,1,1,1,1,1,1,0,1,0,0,0,1,0],
                [0,0,1,1,0,0,0,1,1,1,0,0,1,1,0],
                [1,1,1,1,1,1,0,0,0,1,0,0,0,1,0],
                [0,0,1,1,0,1,1,0,0,1,0,0,0,1,0],
                [0,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,0,1,1,1,1,1,1,0,1,0]
            ];
        this._rows = this._map_matrix.length;
        this._cols = this._map_matrix[0].length;
        this._v_rows = rows;//visible rows and columns
        this._v_cols = cols;
        this._resh = canvas.width/this._v_cols;
        this._resv = canvas.height/this._v_rows;
    }
    
    tilePosition(pos1,pos2) {//type of tile, corner, center, lateral, etc 15 different positions for a tile
        var tilepos = [-1,-1];
        var cellt =  this._map_matrix[pos1][pos2];
        
        //get tile types arround main cell studied here
        var left = cellt;
        var top = cellt;
        var right = cellt;
        var bottom = cellt;
        if( (pos1-1)>-1 && this._map_matrix[pos1-1][pos2] != cellt) top = "other";
        if( (pos2-1)>-1 && this._map_matrix[pos1][pos2-1] != cellt) left = "other";
        if( (pos1+1)< this._rows && this._map_matrix[pos1+1][pos2] != cellt) bottom = "other";
        if( (pos2+1)<  this._cols && this._map_matrix[pos1][pos2+1] != cellt) right = "other";
        
        //center
        if(left == cellt && top ==cellt && right == cellt && bottom == cellt) tilepos = [1,1];
        
        //laterals, 3 adjacent cells full, 1 empty
        if(left == cellt && top ==cellt && right == cellt && bottom =="other") tilepos = [2,1];
        if(left == cellt && top ==cellt && right =="other" && bottom == cellt ) tilepos = [1,2];
        if(left == cellt && top =="other"&& right ==cellt && bottom == cellt  ) tilepos = [0,1];
        if(left =="other"&& top ==cellt && right == cellt && bottom == cellt ) tilepos = [1,0];
        
        //2 surrounding cells empty, 2 adjacent
        if(left == cellt && top ==cellt && right =="other" && bottom =="other") tilepos = [2,2];
        if(left == cellt && top =="other" && right == cellt && bottom =="other") tilepos = [1,3];
        if(left =="other" && top ==cellt && right == cellt && bottom =="other") tilepos = [2,0];
        if(left == cellt && top =="other" && right =="other" && bottom == cellt) tilepos = [0,2];
        if(left =="other" && top ==cellt && right =="other" && bottom == cellt) tilepos = [1,5];
        if(left =="other" && top =="other" && right == cellt && bottom == cellt) tilepos = [0,0];
        
        //peninsulas, 3 adjacent cells empty, 1 full
        if(left == "other" && top =="other" && right == "other" && bottom ==cellt) tilepos = [2,3];
        if(left == "other" && top =="other" && right ==cellt && bottom == "other" ) tilepos = [0,3];
        if(left == "other" && top ==cellt && right =="other" && bottom == "other"  ) tilepos = [2,4];
        if(left ==cellt && top =="other" && right == "other" && bottom == "other" ) tilepos = [1,4];
        
        //island
        if(left == "other" && top =="other" && right == "other" && bottom =="other") tilepos = [0,4];

      
        return(tilepos)
        
        
    }
    
    drawmatrix() {
        //image to use for pattern:
        var img1 = document.getElementById("wall");
//        var pat1 = ctx.createPattern(img1, "repeat");
        var img2 = document.getElementById("floor");
        var pat2 = canvas.ctx.createPattern(img2, "repeat");
        var img3 = document.getElementById("grass");
        var img4 = document.getElementById("tiles1");
        
        var tiles = grassSheet;
        
        let x = player.x_init - player.x ;
        let y = player.y_init - player.y;

        for(let i = 0; i < this._cols; i++) {
            for(let j = 0; j < this._rows; j++) {
                switch(this._map_matrix[j][i]) {
                    case 0:
                        var tpos = this.tilePosition(j,i);
                        canvas.ctx.drawImage(img4,i*this._resh+x,j*this._resv+y,this._resh+1,this._resv+1); //draw the mountain on top of the floor
                        canvas.ctx.drawImage(tiles.image,tpos[1]*tiles.frameWidth,tpos[0]*tiles.frameHeight, tiles.frameWidth, tiles.frameHeight,
                                i*this._resh+x,j*this._resv+y,this._resh+1,this._resv+1);

//                        ctx.drawImage(img1,i*this._resh+x,j*this._resv+y,this._resh+1,this._resv+1);
                        break;
                    case 1:
                    case 2:
//                    ctx.globalAlpha = 1;
//                    ctx.fillStyle = "white";
//                    ctx.fillRect(i*this._resh+x,j*this._resv+y,this._resh+1,this._resv+1);
//                    ctx.fillStyle = "black";
//                    ctx.globalAlpha = 1;
                        canvas.ctx.drawImage(img4,i*this._resh+x,j*this._resv+y,this._resh+1,this._resv+1);
                        break;
                }
            }
        }
    }
    
    getresol(){
        return [this._resh, this._resv];
    }
    
    getmatpos(x,y) {
        let pos2 = Math.floor(x/this._resh);
        let pos1 = Math.floor(y/this._resv);
        return [pos1,pos2];
    }
    
    validcorners(objx, objy, objw, objh) {
        return  this.validpos(objx, objy) &&
                this.validpos(objx + objw, objy) &&
                this.validpos(objx, objy + objh) &&
                this.validpos(objx + objw, objy + objh);
    }       

    validpos(objx, objy) {
        var pos = this.getmatpos(objx, objy);
        if(pos[1] < 0 || pos[0] > this._rows-1 || pos[0] < 0 || pos[1] > this._cols-1) return 0;
        return this._map_matrix[pos[0]][pos[1]];
    }
    
    recalculateCenter() {
        let pos = this.getmatpos(player.x, player.y); //returns A[i][j] => i fila (y), j columna (x) de la matriz
        //above: player position on matrix
        let posCenter = [Math.trunc((this._rows-1)/2), Math.trunc((this._cols-1)/2)];  //Y, X
        //above: map center point
        let trans = [pos[0] - posCenter[0], pos[1] - posCenter[1]];
        //above: displacement of player position from matrix center
        var A = [];

        for(var i = 0; i < this._rows; i++){
            A.push(this._map_matrix[(i+trans[0]+this._rows)%this._rows]);
        }
        
        var B = [];
        A = transpose(A);

        for(var j = 0; j < this._cols; j++){
            B.push(A[(j+trans[1]+this._cols)%this._cols]);
        }
        
        B = transpose(B);
        
        let totalWidth = this._cols*this._resh;
        let totalHeight = this._rows*this._resv;
        
        ventities.forEach(entity => entity.x = (entity.x - trans[1]*this._resh + totalWidth)%totalWidth );
        ventities.forEach(entity => entity.y = (entity.y - trans[0]*this._resv + totalHeight)%totalHeight );
        
        vfloor.forEach(elem => elem.x = (elem.x - trans[1]*this._resh + totalWidth)%totalWidth );
        vfloor.forEach(elem => elem.y = (elem.y - trans[0]*this._resv + totalHeight)%totalHeight );
        
        this._map_matrix = B;
    }
}


if (typeof module !== "undefined" && module.exports) {
    module.exports.Cmap = Cmap;
    module.exports.transpose = transpose;
}



