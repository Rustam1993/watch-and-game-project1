class Eggs{
    constructor(){
        // position would have two values of Top and Right(left) in the div. [top:100px,left100:px]
        this.position();
        // how to give image to property? - done
        this.image  = "../images/egg.jpg"
        this.width = 
        // here  also should be timer to move agg for some amout of time?
        this.timer();
        // starter of EGG position depends on where EGG will comde out? starter position either left side or right side
        this.startPosition = [1,2,3,4];

    }
    // Move 
    move(argument){
        argument = this.startPosition[Math.floor(Math.random()*this.startPosition.length)]
        if (argument===1){
            // every 0.1sec rudese top: px by 10px, increase right: but 10px
            // starting position for egg is bottom left to come out
        this.position[0]+=10;
        this.position[1]+=10;
        }
        if (argument===2){
             // starting position for egg is bottom right to come out
        }
        if (argument===3){
             // starting position for egg is top left to come out
            this.position[0]+=10;
            this.position[1]+=10;
        }
        if (argument===4){
             // starting position for egg is top right to come out
        }
    }
   
}