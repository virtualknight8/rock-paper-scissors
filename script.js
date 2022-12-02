const arr=["ROCK", "PAPER", "SCISSORS"];
var yourScore=0;
var computerScore=0;

function computerChoice() {
    const r = Math.floor(Math.random()*arr.length);
    /*console.log(arr[r]);*/
    return arr[r];
}



function playerChoice() {
    let ps = prompt();
    let pc = ps.toUpperCase();
    /*console.log(pc);*/
    return pc;
}
    
        
function playRound(playerSelection, computerSelection) {
    if(playerSelection==computerSelection)
        console.log("Game Tied");
    else if(playerSelection=="PAPER" && computerSelection=="SCISSORS"){
        console.log("You Lose! Scissors beat Paper");
        computerScore++;
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="PAPER"){
        console.log("You win! Scissors beat paper");
        yourScore++;
    }
    else if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        console.log("You win! Paper beats Rock");
        yourScore++;
    }
    else if(playerSelection=="ROCK" && computerSelection=="SCISSORS"){
        console.log("You win! Rock beats Scissors"); 
        yourScore++;
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="ROCK"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else
        console.log("wrong entry");
    
}



function game() {
   for (let i = 0; i < 5; i++) {
     playRound(playerChoice(), computerChoice());
      console.log("Your score:", yourScore);
   }
}

game();