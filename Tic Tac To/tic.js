// Access elements
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
const newGameBtn = document.querySelector("#renew");
const winnerDisplay = document.querySelector(".printwinner");
const winMessage = document.querySelector("#win");

// We have 2 players, taking turns
// Player O and Player X
let isPlayerOTurn = true; // Start with Player O

// 2D array for win patterns
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

// Reset the game
const resetGame = () => {
    isPlayerOTurn = true; 
    enableButtons();
    winnerDisplay.classList.add("hide");
}

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        
        // Toggle the player
        if (isPlayerOTurn) {
            box.innerText = "O";
            isPlayerOTurn = false;
        } else {
            box.innerText = "X";
            isPlayerOTurn = true;
        }

        // Once marked, a box can't be changed
        box.disabled = true;
        checkWin();
    });
});

// Disable all boxes
const disableButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
    }  
}

// Enable all boxes
const enableButtons = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }  
}

// Display the winner
const showWinner = (winner) => {
    winnerDisplay.innerText = `Congratulations, the winner is ${winner}`;
    winnerDisplay.classList.remove("hide");
    disableButtons();
}

// Check for a win
const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

// Add event listeners for reset and new game buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
