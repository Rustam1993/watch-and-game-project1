class Game {
    constructor(){
        this.playerTurn = 1;
        this.startingPoints = [1,2,3,4];
        this.startingPointforEggs = [1,2,3,4]
        this.eggs = [1,2,3,4];
        this.spawnRate = 10;        
    }
    // spawnEggs in the game
    spawnEggs(egg){
        this.eggs.push(egg)
        if(this.eggs.length === 0 ){
            this.eggs.push(egg)
        }
    }
    // removes egg from screen when it gets to end of line
    removeEggs(element){
        return this.eggs.splice(indexOf(element),1);
    }
    // get random starting point for bucket
    startingPoint() 
    {    
         return this.startingPoints[(Math.floor(Math.random()*4))];
    }   
    // get starting point for egg base
    startingPointforBase(){
        return this.startingPointforEggs[(Math.floor(Math.random()*4))]
    }
}


let newGame = new Game();
$(document).ready(function(){
    

    $('#start-game-button').click(function () {
        // Timer
        let timer = new Timer();    
        timer.start();
        timer.addEventListener('secondsUpdated', function (e) {
            $('#values').html(timer.getTimeValues().toString());
        });
        // Random position for bucket. Switch can get two buckets at the same time. Fixed by If Else statements
        // console.log(newGame.startingPoint());


        if (newGame.startingPoint()===1){
            document.getElementById("0.0").classList.add("change-blue-to-white");
        }
        else if(newGame.startingPoint()===2){
            document.getElementById("0.1").classList.add("change-blue-to-white");

        }
        else if(newGame.startingPoint()===3){
            document.getElementById("1.0").classList.add("change-blue-to-white");
    
        }
        else if(newGame.startingPoint()===4){
            document.getElementById("1.1").classList.add("change-blue-to-white");
        
        }
        else {
            document.getElementById("1.0").classList.add("change-blue-to-white")
        }
        setInterval(function(){ 
            newGame.startingPointforBase();
            if(newGame.startingPointforBase()===1){
            document.getElementById("left-top").classList.add("change-blue-to-white")
            }
            if(newGame.startingPointforBase()===2){
                document.getElementById("left-bottom").classList.add("change-blue-to-white")
            }
            if(newGame.startingPointforBase()===3){
                document.getElementById("right-top").classList.add("change-blue-to-white")
            }
            if(newGame.startingPointforBase()===4){
                document.getElementById("right-bottom").classList.add("change-blue-to-white")
            }
        },1000)
        
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
