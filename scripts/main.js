var userScore=0;
var compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const user_hand=document.querySelector(".user_hand");
const comp_hand=document.querySelector(".comp_hand");


const refreshButton = document.querySelector('.refresh-button');
const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)

function compChoice(){
	const choices= ['r','p','s'];
	const randomNumber= Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convert(x){
if(x=="r") return "Rock";
if(x=="p") return "Paper";
if(x=="s") return "Scissor";
}

function userwin(user_choice,comp_choice){
	userScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML=convert(user_choice)+" beats "+convert(comp_choice)+". You win!";
}

function userlose(user_choice,comp_choice){
	compScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML=convert(user_choice)+" loses to "+convert(comp_choice)+". You lost!";
}

function userdraw(user_choice,comp_choice){
	result_p.innerHTML=convert(user_choice)+" equals "+convert(comp_choice)+". It's a draw!";
}

function game(userChoice){
 	const computerChoice=compChoice();
	switch(userChoice + computerChoice){
	case "rs":
	case "pr":
	case "sp":
		console.log("User Wins");
		userwin(userChoice,computerChoice);
		break;
	case "rp":
	case "ps":
	case "sr":
		console.log("User Loses");
		userlose(userChoice,computerChoice);
		break;
	case "rr":
	case "pp":
	case "ss":
		console.log("It's a draw");
		userdraw(userChoice,computerChoice);
		break;	
	}
	user_hand.src= `images/${userChoice}.png`;
	comp_hand.src= `images/${computerChoice}.png`;
}

function main(){
	rock_div.addEventListener('click',function(){
	game("r");
	console.log("clicked on rock");
	})

	paper_div.addEventListener('click',function(){
	game("p");
	console.log("clicked on paper");
	})

	scissor_div.addEventListener('click',function(){
	game("s");
	console.log("clicked on scissor");
	})
       }

main();
