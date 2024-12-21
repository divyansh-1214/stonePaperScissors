let way=0;

const ymove = document.getElementById("ymove");
const cmove = document.getElementById("cmove");
function move(input, id){

    let Cmove = dmove();
    decide(Cmove, input);
    display(Cmove, 'COMPUTER');
    display(input,id);
}
function display(input,id){
    ymove.style.fontSize = "7rem"
    cmove.style.fontSize = "7rem"

// console.log(id);

    switch(input){
        case 'rock':
            if(id=='COMPUTER')
                cmove.textContent = "👊";
            else
                ymove.textContent = "👊";
            break;
        case "paper":
            if(id=='COMPUTER')
                cmove.textContent = "✋";
            else
                ymove.textContent = "✋";
            break;
        case "scissors":
            if(id=='COMPUTER')
                cmove.textContent = "✌️";
            else
                ymove.textContent = "✌️";
            break;

    }

}
function dmove(){
    let pmove = ['rock' , 'paper', 'scissors'];
    let M = Math.floor(Math.random()*3);
    // console.log(M);
    return pmove[M];
    // console.log( pmove[M])
}

function decide(computer, player){
    // console.log((computer == "rock" && player =="paper") || (computer == "scissors" && player =="rock") || (computer == "scissors" && player =="paper"));
    console.log(computer);
    console.log(player);
    
    
    if(computer == player){
        document.getElementById("result").textContent = `RESULT: TIE`;
    }else if ( (computer == "rock" && player =="paper") || (computer == "scissors" && player =="rock") || (computer == "paper" && player =="paper") )
        document.getElementById("result").textContent = `RESULT: YOU LOSE `;
    else{
        document.getElementById("result").textContent = `RESULT: you WIN `;
    }
}
//COMPUTER  -> YOU
//STONE -> PAPER(YOU LOSE)
//scissors ->  STONE (YOU LOSE)
//paper -> scissors (YOU LOSE)