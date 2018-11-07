class Player{
    constructor(){
        this.name = name;
        this.score = 0;
        this.life = 1020;
        
        this.startingPoints = [1,2,3,4];
        this.location = 0;
    }

    startingPoint(){    
        return this.startingPoints[(Math.floor(Math.random()*4))];
   } 
}

class Egg{
    constructor(position){
        this.startingPoint = position;
        this.counter = 1;
        
        // this.score = 0;
        // this.lifes = 5

        this.image = "/images/egg.jpg"
       
        // 
        this.x1= 164;
        this.y1=  230;
        // 
        this.x2= 142;
        this.y2=  1020;

        // 
        this.x3 = 280;
        this.y3=  987;
        // 
        this.x4= 270;
        this.y4=  225;
        

    }
    removeEggs(){
        // $('#egg').hide();
    }
    updateScoreForOne(){

           
            if ($("#topLeft").hasClass("change-blue-to-white")){
                
                currentGame.currentPlayer.score++
                $("#score").text(currentGame.currentPlayer.score)
                
            }
            else{
                currentGame.currentPlayer.life--
                $("#lifes").text(currentGame.currentPlayer.life)
            }
        
    }
    updateScoreForTwo(){

           
        if ($("#topRight").hasClass("change-blue-to-white")){
            
            currentGame.currentPlayer.score++
            $("#score").text(currentGame.currentPlayer.score)
            
        }
        else{
            currentGame.currentPlayer.life--
            $("#lifes").text(currentGame.currentPlayer.life)
        }
    
}
updateScoreForThree(){

           
    if ($("#bottomRight").hasClass("change-blue-to-white")){
        
        currentGame.currentPlayer.score++
        $("#score").text(currentGame.currentPlayer.score)
        
    }
    else{
        currentGame.currentPlayer.life--
        $("#lifes").text(currentGame.currentPlayer.life)
    }

}
updateScoreForFour(){

           
    if ($("#bottomLeft").hasClass("change-blue-to-white")){
        
        currentGame.currentPlayer.score++
        $("#score").text(currentGame.currentPlayer.score)
        
    }
    else{
        currentGame.currentPlayer.life--
        $("#lifes").text(currentGame.currentPlayer.life)
    }

}

    move(){
        console.log(document.getElementById("lifes").innerHTML)
        var timer1 = 500;
        let newThing = document.createElement('img')
            newThing.src = "images/egg1.png"
            newThing.className = "fifty"
            document.getElementById("parentDiv").appendChild(newThing)
        let parentDiv = document.getElementById("parentDiv");

        if (this.startingPoint === 1 ){
           let  a =  setInterval(()=>{   
               
              
                if (this.counter < 9){
                    this.x1 +=20;
                    this.y1 +=32;
                    this.counter++
                    newThing.style.top = this.x1 + "px";
                    // newThing.style.display = "unset!important"
                    newThing.style.left  = this.y1 + "px";
                    
               
              } else 
                 {
                    this.updateScoreForOne();
                    clearInterval(a);
                    this.removeEggs();  
                    parentDiv.removeChild(newThing);
                }
                },timer1)
                if(Number(document.getElementById("lifes").innerHTML) < 1){
                    clearInterval(a);
                }
            
            }
            if (this.startingPoint === 2 ){
                let  a =  setInterval(()=>{   
                    
                         if (this.counter < 8){
                         this.x2 += 27;
                         this.y2 -= 45;
                         this.counter++
                        newThing.style.top = this.x2 + "px";
                        newThing.style.left  = this.y2 + "px";
                        
                     } else {
                     
                        this.updateScoreForTwo()
                         clearInterval(a);
                         this.removeEggs();  
                         parentDiv.removeChild(newThing)
                     }
                     if(document.getElementById("lifes").innerHTML < 1){
                        clearInterval(a);
                    }
                     },timer1)
          
                 } 

                 if (this.startingPoint === 3 ){
                    let  a =  setInterval(()=>{   
                        
                        if (this.counter < 6){
                            this.x3 += 35;
                            this.y3 -= 45;
                            this.counter++
                           newThing.style.top = this.x3 + "px";
                           newThing.style.left  = this.y3 + "px";
                             
                             
                         } else {
                            parentDiv.removeChild(newThing)
                             this.updateScoreForThree()
                             clearInterval(a);
                             this.removeEggs();  
                         }
                         if(document.getElementById("lifes").innerHTML < 1){
                            clearInterval(a);
                        }
                         },timer1)
                   
                     
                     }       
           
                if (this.startingPoint === 4 ){
                    let  a =  setInterval(()=>{   
                        
                        if (this.counter < 8){
                            this.x4 += 24;
                            this.y4 += 35;
                            this.counter++
                           newThing.style.top = this.x4 + "px";
                           newThing.style.left  = this.y4 + "px";

                         } 
                         else {
                            parentDiv.removeChild(newThing)
                            this.updateScoreForFour()
                             clearInterval(a);
                             this.removeEggs();  
                         }
                         if(document.getElementById("lifes").innerHTML < 1){
                            clearInterval(a);
                        }
                         
                         },timer1)
                         

                     
                     } 
                 
    
     }

     setEggTragectory(x,y) {
        
         let interval1 = setInterval(() => {
    
            this.counter ++;
            if(this.counter === 4) {
               
            }
           
            clearInterval(interval1);
         }, 2000);
     }


    }
