class Player{
    constructor(){
        this.name = name;
        this.score = 0;
        this.life = 5;
        
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
        this.score = 0;
        this.lifes = 5
       
        // 
        this.x1= 134;
        this.y1=  240;
        // 
        this.x2= 134;
        this.y2=  982;

        // 
        this.x3 = 270;
        this.y3=  987;
        // 
        this.x4= 270;
        this.y4=  240;
        

    }
    removeEggs(){
        // $('#egg').hide();
    }
    updateScoreForOne(){

           
            if ($("#topLeft").hasClass("change-blue-to-white")){
                
                currentGame.currentPlayer.score++
                $("#score").text(this.score)
                
            }
            else{
                currentGame.currentPlayer.lifes--
                $("#lifes").text(this.lifes)
            }
        
    }
    updateScoreForTwo(){

           
        if ($("#topRight").hasClass("change-blue-to-white")){
            
            currentGame.currentPlayer.score++
            $("#score").text(this.score)
            
        }
        else{
            currentGame.currentPlayer.lifes--
            $("#lifes").text(this.lifes)
        }
    
}
updateScoreForThree(){

           
    if ($("#bottomRight").hasClass("change-blue-to-white")){
        
        currentGame.currentPlayer.score++
        $("#score").text(this.score)
        
    }
    else{
        currentGame.currentPlayer.lifes--
        $("#lifes").text(this.lifes)
    }

}
updateScoreForFour(){

           
    if ($("#bottomLeft").hasClass("change-blue-to-white")){
        
        currentGame.currentPlayer.score++
        $("#score").text(this.score)
        
    }
    else{
        currentGame.currentPlayer.lifes--
        $("#lifes").text(this.lifes)
    }

}

    move(){
        var timer1 = 1000;
        
        if (this.startingPoint === 1 ){
           let  a =  setInterval(()=>{   
               
                if (this.counter < 10){
                    this.x1 += 20;
                    this.y1 += 25;
                    this.counter++
                    
                $("#egg").css({top: this.x1, left: this.y1, position:'relative'})
            } else 
            {
                    this.updateScoreForOne();
                    clearInterval(a);
                    this.removeEggs();  
                }
                },timer1)
          
            
            }
            if (this.startingPoint === 2 ){
                let  a =  setInterval(()=>{   
                    
                         if (this.counter < 10){
                         this.x2 += 20;
                         this.y2 -= 25;
                         this.counter++
                         
                         $("#egg").css({top: this.x2, left: this.y2, position:'relative'})
                     } else {
                     
                        this.updateScoreForTwo()
                         clearInterval(a);
                         this.removeEggs();  
                         
                     }
                     },timer1)
          
                 } 

                 if (this.startingPoint === 3 ){
                    let  a =  setInterval(()=>{   
                        
                             if (this.counter < 10){
                             this.x3 += 20;
                             this.y3 -= 25;
                             this.counter++
                             
                             $("#egg").css({top: this.x3, left: this.y3, position:'relative'})
                         } else {
                           
                             this.updateScoreForThree()
                             clearInterval(a);
                             this.removeEggs();  
                         }
                         },timer1)
                   
                     
                     }       
           
                if (this.startingPoint === 4 ){
                    let  a =  setInterval(()=>{   
                        
                             if (this.counter < 10){
                             this.x4 += 20;
                             this.y4 += 25;
                             this.counter++
                             
                             $("#egg").css({top: this.x4, left: this.y4, position:'relative'})

                         } 
                         else {

                            this.updateScoreForFour()
                             clearInterval(a);
                             this.removeEggs();  
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
