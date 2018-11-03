class Game{
    constructor(){
        // 1. Player turn , should  befirst player and second player.
        // 2.Timer it should show for how long time game is ON
        // 3.Starting points. it's 4 of them. One point for each corner.
        // array of eggs. Can't be empty
        // SpawnRate for game hardness lvl
        this.player1 = player1;
        this.player2 = player2;

        
        
        
        
        
        
        
        
        // // Should it be an array? assign score to element after game ends?
        // this.playerTurn;
        // this.timer();
        // // this.timer = timer; Timer should be a method? google timer function
        // // Position where eggs will come out
        // // [1,       2]
        // // [3,       4]
        // this.startingPoint = [1,2,3,4];
        // // should be empty at starting point?
        // this.eggs = [];
        // this.spawningRate = 10;
        // // argument for spawn eggs should be starting point and it should be set randomly
        // this.spawnEggs();
        // // Same for remove? i think it should not receive agrument. Just as soon as egg hits end of div , this.remove()
        // this.removeEggs();
    }
    playerTurn(player){
        if (player === this.player1){
            console.log("First player")
        }
        else {
            console.log("Second Player")
        }
    }

    spawnEggs(){
        // lets get random position for starting point 
        
        
    }
    removeEggs(){
        
    }

}