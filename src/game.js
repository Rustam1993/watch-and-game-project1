let currentGame;

class Game {
    
    constructor(){
        this.playerTurn = 1;
       
       
        
        //this.startingPointforEggs = [1,2,3,4]
        // 
        this.gamesIsOn = false;
        this.arrayofEggs = [];
        this.currentPlayer = new Player()
        this.spawnRate = 10;        
        this.leftTop = document.getElementById("left-top");
        this.leftBottom = document.getElementById("left-bottom")
        this.rightTop = document.getElementById("right-top")
        this.rightBottom = document.getElementById("right-bottom")
        // buckets
        this.leftTopBucket = document.getElementById("topLeft");
        this.leftBottomBucket = document.getElementById("bottomLeft")
        this.rightTopBucket = document.getElementById("topRight")
        this.rightBottomBucket = document.getElementById("bottomRight")


        this.timer = new Timer();
    }
    
   
    spawnEggs(position){

        let eggs = new Egg(position);
        console.log(eggs);
        eggs.move();
    }
    
    removeEggs(element){
        return this.eggs.splice(indexOf(element),1);
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
    startTimer(){

        this.timer.start();
    //    console.log(this.timer.getTimeValues())
        this.timer.addEventListener('secondsUpdated', (e) => {
            $('#values').html(this.timer.getTimeValues().toString());
        })
    }

}


$(document).ready(function(){   
    currentGame = new Game();
    console.log(currentGame)
  //  currentGame.player = new Player();

    

    $('#start-game-button').click(function ()   {
        // if (currentGame.gamesIsOn)
        // {
        //     currentGame.resetGame();   
        // }
        // currentGame.gamesIsOn = true;
        currentGame.startTimer();
      
        
      

        setInterval(function(){ 
            
            let startingPointForBase = currentGame.startingPointforBase();
            if ((startingPointForBase===1)) {
            currentGame.spawnEggs(1);
            currentGame.reset();
            document.getElementById("left-top").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===2)) {
                currentGame.spawnEggs(2);
                currentGame.reset();
                document.getElementById("right-top").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===3)) {
                currentGame.spawnEggs(3);
                currentGame.reset();
                document.getElementById("right-bottom").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===4)) {
                currentGame.spawnEggs(4);
                currentGame.reset();
                document.getElementById("left-bottom").classList.add("change-blue-to-white");
            }
           
        }, 12000);
       

        
        
});


    document.onkeydown  = function(e){
         
        switch (e.keyCode){
            case 49:
            currentGame.resetForBuckets()
           
            document.getElementById("topLeft").classList.add("change-blue-to-white");
            break;
            case 50:
            currentGame.resetForBuckets()
            document.getElementById("topRight").classList.add("change-blue-to-white")
            break;
            case 52:
            currentGame.resetForBuckets()
            document.getElementById("bottomLeft").classList.add("change-blue-to-white")
            break;
            case 51:
            currentGame.resetForBuckets()
            document.getElementById("bottomRight").classList.add("change-blue-to-white")
            break;
        }
    
}})

