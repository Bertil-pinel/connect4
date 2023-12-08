
import Column from './Column.js';

export default class Board{
    constructor(width, height, blockSize, contentHTML, firstPlayer){
        this.width = width;
        this.blockSize = blockSize;
        this.columns = new Array(width);

        this.board = document.createElement("div");
        this.board.id = 'board';
        this.board.className = firstPlayer.number
        this.board.style.width = (width*blockSize + width * 6)+'px'
        this.board.style.height = (height*blockSize + height * 6)+'px'
        this.board.style.display = 'flex';
        this.board.style.flexDirection = 'row'
        this.board.style.justifyContent= 'center'
        this.board.style.alignItems = 'center'
        this.board.dataset.MaxPlayer = 2
        this.board.dataset.win = false
        

        contentHTML.appendChild(this.board)
        
        firstPlayer.icon.style.border = 'solid 0.2em lightgreen'


        for(let i = 0 ; i<width;i++){
           this.columns.push(new Column(i,width,height,blockSize,this.board))
        }
    }

    clear(){
        this.board.remove();
    }



}