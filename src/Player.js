export default class Player{
    constructor(number,color,infoHTML){
        this.number = number
        this.color = color

        this.player = document.createElement("div");
        this.player.id = 'player' + number;
        this.player.innerText = color;
        this.player.style.fontSize = '3em'
        this.player.style.fontFamily = 'Beach'
        this.player.style.color = 'white'
        this.player.style.margin = '2em'
        this.player.style.padding = '0.5em'
        this.player.style.height = '20%'
        this.player.style.width = '80%'
        this.player.style.display = 'flex'
        this.player.style.flexDirection = 'row'
        this.player.style.justifyContent = 'space-evenly'
        this.player.style.alignItems = 'center'

        const win = document.createElement("div");
        win.id = 'win' + number
        win.style.backgroundImage="url('../assets/win.png')"
        win.style.backgroundSize = '100% 100%'
        win.style.height='1.5em'
        win.style.width='1.5em'
        win.style.position='relative'
        win.style.bottom='45px'
        win.style.right='20px'
        win.style.transform = 'rotate(-30deg)'
        win.style.display  = 'none'

        
        this.icon = document.createElement("div");
        this.icon.id = 'icon' + number
        this.icon.style.backgroundImage="url('../assets/"+color+".png')"
        this.icon.style.backgroundSize = '100% 100%'
        this.icon.style.height='2em'
        this.icon.style.width='2em'
        this.icon.style.borderRadius = '10em';
        this.icon.style.marginLeft='1em'
        
        this.icon.appendChild(win)
        this.player.appendChild(this.icon)
        


        infoHTML.appendChild(this.player)
    }
    
    clear(){
        this.player.remove();
    }
}