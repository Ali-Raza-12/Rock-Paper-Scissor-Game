let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")


let userScore = 0;
let compScore = 0;

const gameWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    }
    else {
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    }
}

const genCompChoice = () => {
    const options = ["rock" , "paper", "scissor"];
    const compIndx = Math.floor(Math.random() * 3 );
    return options[compIndx];
}

const drawGame = () => {
    msg.style.backgroundColor = "yellow";
    msg.innerText = "Draw Game. Play Again"
}

const playerGame = (userChoice) => {
    console.log("User Choice is", userChoice)
    let compChoice = genCompChoice();
    console.log("Computer choice is", compChoice)

    if(userChoice === compChoice) {
        drawGame();
    }
    
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }

        gameWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach( (choice, compChoice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playerGame(userChoice);
    });
})