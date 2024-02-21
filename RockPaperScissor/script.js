let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

 let userscorepara = document.querySelector("#user-score");

let compscorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    // Math.random() * 3
    const index = Math.floor(Math.random() * 3);
    return options[index];


};

const drawGame = () => {
    console.log("game was drawn");
    msg.innerText = "it was a draw.play again ";
    msg.style.backgroundColor = "rgb(73, 73, 172)";
};

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {       
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `you won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
         
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `you lost.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    // console.log("user choice ",userchoice);
    const compchoice = genCompChoice();
    // console.log("comp choice",compchoice);

    if(userchoice == compchoice) {
        drawGame();

    } else{
        let userwin = true;
        if (userchoice == "rock") {
            // compchoice can be sicssor,paper.
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper"){
            // compchoice can be rock,scissor.
            userwin = compchoice === "scissor" ? false : true;
        }else{
            // userchoice is scissor.
            // compchoice can be rock ,paper.
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        // console.log(`${userchoice} was clicked`);
        playGame(userchoice);
    })
});