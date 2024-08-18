//always use let as we will change it

//object
let direction={x:0,y:0};

//initialize audio
let foodmusic=new Audio('music/food.mp3');
let gameovermusic=new Audio('music/gameover.mp3');
let musicsound=new Audio('music/music.mp3');
let movemusic=new Audio('music/move.mp3');

let speed=2;
let lastPaintTime=0;
let snakeArray=[
    {x:13,y:15}
]
food={x:6,y:7};


//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);  
   // console.log(ctime);-->this is too fast
   
   //changing frequency
   if((ctime -lastPaintTime)/1000 < 1/speed){
    return;
   }else{
    lastPaintTime=ctime;
   }
   gameEngine();

}

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}
function gameEngine(){
    //1.update the snake array & food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0; 
    }

    // If you have eaten the food, increment the score and regenerate the food
if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
    foodSound.play();
    score += 1;
    if(score>hiscoreval){
        hiscoreval = score;
        localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
        hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
    }
    scoreBox.innerHTML = "Score: " + score;
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
    let a = 2;
    let b = 16;
    food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
}
    //2.display the snake 
     board.innerHTML="";
     snakeArray.forEach((e,index)=>{
      ///create new element-->div
       snakeElement=document.createElement('div');
       //adding css through js
       snakeElement.style.gridRowStart=e.y;
       snakeElement.style.gridColumnStart=e.x;
       //adding class 
       snakeElement.classList.add('snake');

       if(index===0){
        snakeElement.classList.add('head');
       }
       //putting inside board
       board.appendChild(snakeElement);
     });
     
     // Moving the snake
for (let i = snakeArr.length - 2; i>=0; i--) { 
    snakeArr[i+1] = {...snakeArr[i]};
}
 
snakeArr[0].x += inputDir.x;
snakeArr[0].y += inputDir.y

     //3.display the food

     //create new element-->
     foodElement=document.createElement('div');
     foodElement.style.gridRowStart=food.y;
     foodElement.style.gridColumnStart=food.x;
     foodElement.classList.add('food');
     board.appendChild(foodElement);

}





//main logic start here
//game loop 
//set interval used for this but animation use
window.requestAnimationFrame(main);






