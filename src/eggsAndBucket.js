class Player{
    constructor(){
        this.name = name;
        this.score = 0;
        this.lifes = 5;
        this.startingPoints = [1,2,3,4];
        // location should one of the bucket divs 
        this.location = 0;
    }

    canMove(){

    }
    Up(){

    }
    down(){

    }
    left(){

    }
    right(){

    }
    startingPoint(){    
        return this.startingPoints[(Math.floor(Math.random()*4))];
   } 
}

class Egg{
    constructor(position){
        this.startingPoint = position;
        
        this.eggCoordinates1 = [[1,4], [3, 12]];
        this.eggCoordinates2 = [[1,4], [3, 12]];
        this.eggCoordinates3 = [[1,4], [3, 12]];
        this.eggCoordinates4 = [[1,4], [3, 12]];
        // this.position = {locX: 0, locY: 0};
        // this.image = "../images/egg.jpg";
        // startposition of egg should be at randomly selected egg's base.
        // this.startPosition  = 0;

    }
    removeEggs(){

    }
    // depends of starting position 
    move(){

        if (this.startingPoint === 1 ){
            console.log(1);
            this.setEggTragectory(this.eggCoordinates1);
            //$("#egg").addClass("div-top-left")
        }   
        if (this.startingPoint === 2 ){
            console.log(2)
            $("#egg").addClass("div-top-right")
        }   
        if (this.startingPoint === 3 ){
            console.log(3)
            $("#egg").addClass("div-bottom-right")
        }   
        if (this.startingPoint === 4){
            console.log(4)
            $("#egg").addClass("div-bottom-left")
        }   
     }

     setEggTragectory(coordinates) {
         //create egg div block at coordinate

         let counter = 0;
         //move egg along the coordinates 
         let interval1 = setInterval(() => {
            //draw egg at coordinates[counter];
            counter ++;
            if(counter === 4) {
                //if player is in position 1
                //add point to player 

            }
            //remove egg div from html
            //close interval
            interval1.clearInterval();
         }, 2000);
     }

    }
