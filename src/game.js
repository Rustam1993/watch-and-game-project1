class Game {
    
    constructor(){
        this.playerTurn = 1;
       
       
        
        //this.startingPointforEggs = [1,2,3,4]
        // 
        this.gamesIsOn = false;

        
        this.spawnRate = 10;        
        this.leftTop = document.getElementById("left-top");
        this.leftBottom = document.getElementById("left-bottom")
        this.rightTop = document.getElementById("right-top")
        this.rightBottom = document.getElementById("right-bottom")
        // buckets
        this.leftTopBucket = document.getElementById("0.0");
        this.leftBottomBucket = document.getElementById("0.1")
        this.rightTopBucket = document.getElementById("1.0")
        this.rightBottomBucket = document.getElementById("1.1")


        this.timer = new Timer();
    }
    
   
    spawnEggs(position){

        let eggs = new Egg(position);
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
       console.log(this.timer.getTimeValues())
        this.timer.addEventListener('secondsUpdated', (e) => {
            $('#values').html(this.timer.getTimeValues().toString());
        })
    }

}


$(document).ready(function(){   
    let newGame = new Game();
    newGame.player = new Player();

    

    $('#start-game-button').click(function ()   {
        // if (newGame.gamesIsOn)
        // {
        //     newGame.resetGame();   
        // }
        // newGame.gamesIsOn = true;
        newGame.startTimer();
      
        
      

        setInterval(function(){ 
            
            let startingPointForBase = newGame.startingPointforBase();
            if ((startingPointForBase===1)) {
            newGame.spawnEggs(1);
            newGame.reset();
            document.getElementById("left-top").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===2)) {
                newGame.spawnEggs(2);
                newGame.reset();
                document.getElementById("right-top").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===3)) {
                newGame.spawnEggs(3);
                newGame.reset();
                document.getElementById("right-bottom").classList.add("change-blue-to-white");
            }
            else if ((startingPointForBase===4)) {
                newGame.spawnEggs(4);
                newGame.reset();
                document.getElementById("left-bottom").classList.add("change-blue-to-white");
            }
            // else 
            // {
            //     newGame.spawnEggs(4);
            //     newGame.reset();
            //     document.getElementById("right-top").classList.add("change-blue-to-white");
            // }
        }, 2000);
       

        
        // else if(newGame.startingPointforBase()===2){
        //     setInterval(function(){ 
        //         newGame.reset()
        //         newGame.spawnEggs(2);
        //         document.getElementById("right-top").classList.add("change-blue-to-white");
        //         },3000)
            

        // }
        // else if(newGame.startingPointforBase()===3){
           
        //         newGame.reset()
        //         newGame.spawnEggs(3);
        //         document.getElementById("right-bottom").classList.add("change-blue-to-white");
        //         },3000)
    
        // }
        // else if(newGame.startingPointforBase()===4){
        //     setInterval(function(){ 
        //         newGame.reset()
        //         newGame.spawnEggs(4);
        //         document.getElementById("left-bottom").classList.add("change-blue-to-white");
        //         },3000)
        
        // }
        // else{
        //     setInterval(function(){ 
        //         newGame.reset()
        //         newGame.spawnEggs(4);
        //         document.getElementById("left-bottom").classList.add("change-blue-to-white");
        //         },3000)
        // }
        
        
       



        // setInterval(function(){ 
        //     newGame.startingPointforBase();
        //     if(newGame.startingPointforBase()===1){
                
        //         newGame.reset();
        //     document.getElementById("left-top").classList.add("change-blue-to-white")
        //     }
        //     if(newGame.startingPointforBase()===2){
        //         newGame.reset();
        //         document.getElementById("left-bottom").classList.add("change-blue-to-white")
        //     }
        //     if(newGame.startingPointforBase()===3){
        //         newGame.reset();
        //         document.getElementById("right-top").classList.add("change-blue-to-white")
        //     }
        //     if(newGame.startingPointforBase()===4){
        //         newGame.reset();
        //         document.getElementById("right-bottom").classList.add("change-blue-to-white")
        //     }
        // },500)
        
});


    document.onkeydown  = function(e){
         
        switch (e.keyCode){
            case 37:
            $("0.0").addClass("change-blue-to-white")
            document.getElementById("0.0").classList.add("change-blue-to-white");
            break;
            case 38:
            document.getElementById("1.0").classList.add("change-blue-to-white")
            break;
            case 39:
            document.getElementById("0.1").classList.add("change-blue-to-white")
            break;
            case 40:
            document.getElementById("1.1").classList.add("change-blue-to-white")
            break;
        }
    
}})

