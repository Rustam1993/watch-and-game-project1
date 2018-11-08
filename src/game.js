
let counter = 0;

class Game {
    
    constructor(){
        this.playerTurn = 1;
       
        this.gameCounter = 0;
        this.gamesIsOn = false;
        this.arrayofEggs = [];
        this.currentPlayer = new Player()
        this.spawnRate = 10;        
        this.leftTop = document.getElementById("left-top");
        this.leftBottom = document.getElementById("left-bottom")
        this.rightTop = document.getElementById("right-top")
        this.rightBottom = document.getElementById("right-bottom")

        
        this.leftTopBucket = document.getElementById("topLeft");
        this.leftBottomBucket = document.getElementById("bottomLeft")
        this.rightTopBucket = document.getElementById("topRight")
        this.rightBottomBucket = document.getElementById("bottomRight")


        this.timer = new Timer();
    }
    
    
    
    startingPointforBase(){
        return Math.floor(Math.random() * 4)+1;
    }
    reset(){


        this.leftTop.classList.remove("change-blue-to-white");
        this.leftBottom.classList.remove("change-blue-to-white");
        this.rightTop.classList.remove("change-blue-to-white");
        this.rightBottom.classList.remove("change-blue-to-white");


    }
    resetForBuckets(){
        this.leftTopBucket.classList.remove("change-blue-to-white");
        this.leftBottomBucket.classList.remove("change-blue-to-white");
        this.rightTopBucket.classList.remove("change-blue-to-white");
        this.rightBottomBucket.classList.remove("change-blue-to-white");
    }
    resetGame(){
            this.reset();
            this.timer.reset();
    }

    spawnEggs(position){

        let eggs = new Egg(position);
        // this.arrayofEggs.push(eggs);
        eggs.move();
    
      
            // let newThing = document.createElement('img')
            // newThing.src = "images/egg.jpg"
            // newThing.className = "fifty"
            // document.getElementById("parentDiv").appendChild(newThing)


        // }

        
        
    }
    
    
    
    


    startTimer(){

        this.timer.start();
    
        this.timer.addEventListener('secondsUpdated', (e) => {
            $('#values').html(this.timer.getTimeValues().toString());
        })
    }

}


$(document).ready(function(){   
    window.currentGame = new Game();
    // console.log(currentGame)
  

    
   

    $('#start-game-button').click(function ()   {
        
        counter++
        if(counter > 1){
            window.location.reload();
        }
        window.currentGame.startTimer();
        
        

       
        
      

        // let b =   setInterval(function(){
            function eggDrop(theTimer) { 
            let spawnTimer = theTimer; 
       let x = setInterval(function(){ 
            
            let startingPointForBase = window.currentGame.startingPointforBase();
            if ((startingPointForBase===1)) {
                window.currentGame.spawnEggs(1);
                window.currentGame.reset();
            document.getElementById("left-top").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===2)) {
                window.currentGame.spawnEggs(2);
                window.currentGame.reset();
                document.getElementById("right-top").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===3)) {
                window.currentGame.spawnEggs(3);
                window.currentGame.reset();
                document.getElementById("right-bottom").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===4)) {
                window.currentGame.spawnEggs(4);
                window.currentGame.reset();
                document.getElementById("left-bottom").classList.add("change-blue-to-white");
            }
            
            
            if (currentGame.currentPlayer.score > 9 && currentGame.currentPlayer.score < 15){
                clearInterval(x)
                eggDrop(1500);
            }
            if (currentGame.currentPlayer.score > 15){
                clearInterval(x)
                eggDrop(1000);
               
            }
            if (currentGame.currentPlayer.score > 25){
                clearInterval(x)
                eggDrop(500);
               
            }

            
            if(window.currentGame.currentPlayer.life<1){
                
                 setTimeout(() => {
                    alert("You have just lost, better luck next time!!");
                 }, 1)   
                 window.location.reload()
                
                // clearInterval(b);
                clearInterval();
              
            }
            if(spawnTimer > 100) {
                spawnTimer -= 15;
            }
        }, spawnTimer);
    }
        
        eggDrop(2000);
});


    document.onkeydown  = function(e){
         
        switch (e.keyCode){
            case 49:
            window.currentGame.resetForBuckets()
           
            document.getElementById("topLeft").classList.add("change-blue-to-white");
            break;
            case 50:
            window.currentGame.resetForBuckets()
            document.getElementById("topRight").classList.add("change-blue-to-white")
            break;
            case 52:
            window.currentGame.resetForBuckets()
            document.getElementById("bottomLeft").classList.add("change-blue-to-white")
            break;
            case 51:
            window.currentGame.resetForBuckets()
            document.getElementById("bottomRight").classList.add("change-blue-to-white")
            break;
        }
    
}})

