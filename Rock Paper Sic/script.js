let myscore=0;
let oppscore=0;

//track current playertrue for Player 1, false for Player 2
let myTurn=true;


//store choices
let myChoice='';
let oppChoice='';


// Select all elements with the class "choice"
const choices=document.querySelectorAll(".choice");
const messageBox = document.getElementById("msg");

const playGame=()=>{
    if(myTurn){
        console.log("my choice=",myChoice);
    }else{
        console.log("opposition Choice= ",oppChoice);
        Winner();
    }
    //switch
   
    myTurn = !myTurn;

};

const Winner=()=>{
    let result='';
    if(myChoice==oppChoice){
        result="Its a tie-ow!!!";
    }else if(
        (myChoice==="rock" && oppChoice==="scissors")||
        (myChoice=== "paper" && oppChoice==="rock")||
        (myChoice==="scissors" && oppChoice==="paper")  
          ){
            result="congratulation ME-OW won the match!!";
            myscore++;
          }else{
            result="congratulation YOU-OW won the match!!!";
            oppscore++;
          }
          messageBox.textContent=result;


//display updated score
document.getElementById("user-score").textContent=myscore;
document.getElementById("opp-score").textContent=oppscore;

//reset choice
myChoice='';
oppChoice='';
};

// Add event listener to each choice
choices.forEach((choice)=>{
    console.log(choice);

    const userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
     console.log("choice was clicked",userchoice);

     if(myTurn){
        myChoice=userchoice;
     }else{
        oppChoice=userchoice;
     }
     playGame();
    } );
});


