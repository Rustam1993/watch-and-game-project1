class Player{
    constructor(){
        this.name = name;
        this.score = 0;
        this.life = 10;
        
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
        this.x1= 154;
        this.y1=  220;
        // 
        this.x2= 142;
        this.y2=  1020;

        // 
        this.x3 = 260;
        this.y3=  1020;
        // 
        this.x4= 270;
        this.y4=  215;
        

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
        
        let timer1 = 900;
        let newThing = $('<img>')

            newThing.prop('src', "images/egg1.png")
            newThing.addClass("fifty")
            $("#parentDiv").append(newThing)
            

        if (this.startingPoint === 1 ){
           let  a =  setInterval(()=>{   
               
              
                if (this.counter < 8){
                    this.x1 +=24;
                    this.y1 +=35;
                    this.counter++
                    newThing.animate({
                        'top': this.x1+"px",
                        'left': this.y1+"px"
                    },500)
            
                
                    
               
              }
               else 
                {
                    this.updateScoreForOne();
                    clearInterval(a);
                    newThing.remove();
                }
                if (currentGame.currentPlayer.score > 10 && currentGame.currentPlayer.score < 25 ){
                           
                    timer1=300;
                }
                if (currentGame.currentPlayer.score > 25){
                   
                    timer1=200;
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
                         newThing.animate({
                            'top': this.x2+"px",
                            'left': this.y2+"px"
                        },500)
                        
                     } else {
                     
                        this.updateScoreForTwo()
                         clearInterval(a);
                      
                        newThing.remove();
                     }
                     if(document.getElementById("lifes").innerHTML < 1){
                        clearInterval(a);
                    }
                    if (currentGame.currentPlayer.score > 10 && currentGame.currentPlayer.score < 25 ){
                           
                        timer1=300;
                    }
                    if (currentGame.currentPlayer.score > 25){
                   
                        timer1=200;
                    }
                },timer1)
                        
          
                 } 

                 if (this.startingPoint === 3 ){
                    let  a =  setInterval(()=>{   
                        
                        if (this.counter < 7){
                            this.x3 += 30;
                            this.y3 -= 44;
                            this.counter++
                            newThing.animate({
                                'top': this.x3+"px",
                                'left': this.y3+"px"
                            },500)
                             
                             
                         } else {
                            newThing.remove();
                             this.updateScoreForThree()
                             clearInterval(a);
                           
                         }
                         if(document.getElementById("lifes").innerHTML < 1){
                            clearInterval(a);
                        }
                        if (currentGame.currentPlayer.score > 10 && currentGame.currentPlayer.score < 25 ){
                           
                            timer1=300;
                        }
                        if (currentGame.currentPlayer.score > 25 ){
                   
                            timer1=200;
                        }
                    },timer1)
                            
                   
                     
                     }       
           
                if (this.startingPoint === 4 ){
                    let  a =  setInterval(()=>{   
                        
                        if (this.counter < 8){
                            this.x4 += 24;
                            this.y4 += 35;
                            this.counter++
                            newThing.animate({
                                'top': this.x4+"px",
                                'left': this.y4+"px"
                            },500)

                         } 
                         else {
                            newThing.remove();
                            this.updateScoreForFour()
                             clearInterval(a);
                            
                         }
                         if(document.getElementById("lifes").innerHTML < 1){
                            clearInterval(a);
                        }
                        if (currentGame.currentPlayer.score > 10 && currentGame.currentPlayer.score < 25 ){
                           
                            timer1=300;
                        }
                        if (currentGame.currentPlayer.score > 25){
                   
                            timer1=200;
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
