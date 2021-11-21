(function( $ ) { //
console.log("hello");

var userScore=0;
var compScore=0;
const userScore_span=document.getElementById("user-score")
const computerScore_span=document.getElementById("computer-score")
const scoreBoard_div=document.querySelector('.score-board')
const result_p = document.querySelector(".result p")
const rock_div = document.querySelector('#r')
const paper_div = document.querySelector('#p')
const scissors_div = document.querySelector('#s')



function getComputerChoice(user, computer) {
    const choices=['r','p','s'];
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber]
    
}
function convertToWord(letter) {
    if (letter==="r") return "Rock"
    if (letter==="p") return "Paper"
    if (letter==="s") return "Scissors"
    
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML=`${convertToWord(userChoice)} beats  ${convertToWord(computerChoice)}. You win! 🔥`;

    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow')
    }, 500);


    //console.log(user);
    //console.log(computer);
    
}
function lose(userChoice,computerChoice) {

    compScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML=`${convertToWord(userChoice)} loses to  ${convertToWord(computerChoice)}. You Lose! 💩`

    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow')
    }, 500);

    
}

function draw(userChoice,computerChoice) {
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML=`${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('grey-glow')
    }, 500);

    
}


function game(userChoice) {
    const computerChoice=getComputerChoice();
    // console.log(computerChoice);
    //console.log("poop "+ userChoice);
    switch (userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            //console.log("WiNS")
            break;
        case "rp":
        case "ps":
        case "sr":
            lose (userChoice,computerChoice)
            //console.log("LOSE");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw (userChoice,computerChoice)
            //console.log("DRAW");
            break;
    }

}

rock_div.addEventListener('click', function(){
    //console.log('you clicked on rock');
    game("r");
});


paper_div.addEventListener('click', function(){
    //console.log('you clicked on rock');
    game("p");
});

scissors_div.addEventListener('click', function(){
    //console.log('you clicked on rock');
    game("s");
});


})( jQuery );//