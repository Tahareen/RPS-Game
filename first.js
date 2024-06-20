let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".img");
const msg = document.querySelector("#msg_p");
const usp = document.querySelector("#usp");
const csp = document.querySelector("#csp");
const message = document.querySelector(".msg");
const button = document.querySelector(".btn");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const heading = document.querySelector("h1");
const score = document.querySelector(".score-board");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * options.length);
    return options[randidx];
}

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin === null) {
        console.log("game was draw");
        msg.innerText = `It's a draw! You both chose ${userchoice}`;
        message.style.backgroundColor = "blue";
    } else if (userwin) {
        userscore++;
        console.log("user wins");
        msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green";
        usp.innerText = userscore;
    } else {
        computerscore++;
        console.log("comp wins");
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        csp.innerText = computerscore;
        message.style.backgroundColor = "red";
    }
}

const play = (userchoice) => {
    console.log("userchoice", userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice", compchoice);
    let userwin = null;

    if (userchoice === compchoice) {
        console.log("game was draw");
        showWinner(null, userchoice, compchoice);
    } else {
        if (userchoice === "rock") {
            userwin = compchoice === "scissor";
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock";
        } else {
            userwin = compchoice === "paper";
        }
        showWinner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.id;
        play(userchoice);
    });
});

let isToggled = false; // Flag to track toggle state

button.addEventListener("click", () => {
    if (!isToggled) {
        // Apply styles when button is clicked (toggled on)
        main.style.backgroundColor = "black";
        header.style.backgroundColor = "white";
        heading.style.color = "black";
        score.style.color = "white";
        message.style.backgroundColor = "white";
        message.style.color = "black";
        button.style.backgroundColor = "black";
        button.style.color = "white";

    } else {
        // Reset styles when button is clicked again (toggled off)
        main.style.backgroundColor = ""; // Reset to default (CSS or inherited)
        header.style.backgroundColor = "";
        heading.style.color = "";
        score.style.color = "";
        message.style.backgroundColor = "";
        message.style.color = "";
        button.style.backgroundColor = ""; // Reset button background color
        button.style.color = ""; // Reset button text color
    }
    
    // Toggle the flag
    isToggled = !isToggled;
});
