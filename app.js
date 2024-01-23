let userchoice=0;
let compchoice=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genCompChoice=()=>{

    const options=["rock","paper","scissor"];
    randomnum=Math.floor(Math.random()*3);
    return options[randomnum];
}

const drawGame=()=>{
console.log("Match Draw");
msg.innerText="Match Draws!";
msg.style.backgroundColor = "#081b31";
 
}

const showWinner=(userWin)=>{
    if(userWin){
        userchoice++;
        userScore.innerText=userchoice;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        

    }
    else{
        compchoice++;
        compScore.innerText=compchoice;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;  
        msg.style.backgroundColor = "red";
        
    }
}


const playGame=(userChoice) =>{
    console.log("Your choice",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer's Choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //computer will choose scissor,paper
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //computer will choose scissor,paper
            userWin = compChoice==="scissor"?false:true;
        }

        else if(userChoice==="scissor"){
            //computer will choose scissor,paper
            userWin = compChoice==="rock"?false:true;
        }

        showWinner(userWin);


    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});