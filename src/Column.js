export default class Column{
    constructor(id,width, height,blockSize, board){
        this.id = id;
        this.height = height;
        this.blockSize = blockSize;

        var fill = 0;
        const MaxPlayer = board.dataset.MaxPlayer

        const column = document.createElement("div");
        column.id = 'column-' + id;
        column.style.margin = '0px 3px'
        column.style.width = blockSize + 'px';

        column.onclick = function(){
            let win = board.dataset.win
            var winBool = (win==='true')
            if(!winBool){

                let currentPlayer = parseInt(board.className)
                
                let playerColor = document.getElementById('player' + currentPlayer.toString()).innerText
                
                let nextPlayer
                if(fill != height){
                    const Case = document.getElementById('case-'+ id + '-' + fill)
                    Case.style.backgroundImage ="url('../assets/"+playerColor+".png')"
                    Case.style.backgroundSize = "100% 100%"
                    Case.className = currentPlayer
                    fill++;
                    if(currentPlayer == MaxPlayer){
                        nextPlayer = (1).toString();
                    }
                    else{
                        
                        nextPlayer = (currentPlayer+1).toString();
                    }
                    board.className = nextPlayer;
                    
                }
                else{
                    nextPlayer = currentPlayer
                }

                const matrix = new Array(width);
                for(let i = 0 ; i < width; i++){
                    let column = new Array(height);
                    for(let j = 0 ; j < height; j++){
                        let number = document.getElementById('case-'+i+'-'+j).className
                        column[j] = number?number:0
                    }
                    matrix[i] = column
                }
                

                //vertical check
                for(let i =0; i<width;i++){
                    for(let j =0; j<height-3;j++){
                        if(matrix[i][j] == currentPlayer && matrix[i][j+1] == currentPlayer && matrix[i][j+2] == currentPlayer && matrix[i][j+3] == currentPlayer )
                            winBool = true
                    }
                }

                // horizontalCheck 
                for (let i = 0; i<width-3; i++){
                    for (let j = 0; j<height ; j++ ){
                        if (matrix[i][j] == currentPlayer && matrix[i+1][j] == currentPlayer && matrix[i+2][j] == currentPlayer && matrix[i+3][j] == currentPlayer){
                            winBool =  true;
                        }           
                    }
                }

                // ascendingDiagonalCheck 
                for (let i=3; i<width; i++){
                    for (let j=0; j<height-3; j++){
                        if (matrix[i][j] == currentPlayer && matrix[i-1][j+1] == currentPlayer && matrix[i-2][j+2] == currentPlayer && matrix[i-3][j+3] == currentPlayer)
                            winBool =  true;
                    }
                }
                // // descendingDiagonalCheck
                for (let i=3; i<width; i++){
                    for (let j=3; j<height; j++){
                        if (matrix[i][j] == currentPlayer && matrix[i-1][j-1] == currentPlayer && matrix[i-2][j-2] == currentPlayer && matrix[i-3][j-3] == currentPlayer)
                            winBool =  true;
                    }
                }

                if( !winBool){
                    document.getElementById('icon' + currentPlayer).style.border = ''
                    document.getElementById('icon' + nextPlayer).style.border = 'solid 0.2em lightgreen'
                }
                else{
                    document.getElementById('board').dataset.win = true
                    document.getElementById('win'+currentPlayer).style.display = 'block';
                    return;
                }
            }

        }

        for(let j = 0 ; j <     height;j++){
            const Case = document.createElement("div");
            Case.id = 'case-'+ id + '-' +(height-j-1) ;
            Case.style.height = blockSize + 'px';
            Case.style.backgroundColor = 'saddlebrown';
            Case.style.borderRadius = '5em';
            Case.style.margin = '6px 0'    
            column.appendChild(Case);
        }   
        board.appendChild(column)
    }   

   
}