let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    const msg = document.getElementById('msg');
    msg.innerText = "It's a Draw!";
};

const showWinner = (userWin) => {
    if(userWin) {
        console.log("User won");
        msg.innerText = "You Win!";
    } else {
        console.log("Computer won");
        msg.innerText = "Computer Wins!";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = getComputerChoice();
    console.log("Com Choice = ", compChoice);

    if (userChoice === compChoice) {
    drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else if (userChoice === 'scissors') {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});