let [computer_score,user_score, draw]=[0,0,0];

let result = document.getElementById('result');

let choices_object = {
    'rock':{
        'rock':'draw',
        'paper':'lose',
        'scissor':'win'
    },

    'paper':{
        'rock':'win',
        'paper':'draw',
        'scissor':'lose'
    },

    'scissor':{
        'rock':'lose',
        'paper':'win',
        'scissor':'draw'
    }
}

function checker(input){
    // console.log(input);
    var choices = ['rock','paper','scissor'];
    var num = Math.floor(Math.random()*3);

    document.getElementById('user_choice').innerHTML = `You Choose <span> ${input.toUpperCase()} </span>`

    document.getElementById('computer_choice').innerHTML = `Computer Choose <span> ${choices[num].toUpperCase()} </span>`

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result.style.cssText = "background-color: rgb(175, 247, 175); color:green";
            result.innerHTML = 'YOU WIN';
            user_score++;
            console.log("User Score : ", user_score);
            break;
        case 'lose':
            result.style.cssText = "background-color: rgb(241, 151, 151); color:red;"; 
            result.innerHTML = "YOU LOSE";
            computer_score++;
            console.log("Computer Scores : ",computer_score);
            break;
        default:
            result.style.cssText = "background-color: rgb(219, 219, 219); color:grey;"; 
            result.innerHTML = "DRAW";
            draw++;
            console.log("Draw : ", draw);
            break;
    }
    document.getElementById("user_score").innerHTML = user_score;
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("draw").innerHTML = draw;
}


// Event listeners for button clicks
const buttons = document.querySelectorAll('.weapons button');

buttons.forEach(button=>{
    button.addEventListener('click', function(){
        const userChoice = button.getAttribute('data-choice')
        checker(userChoice);
    })
})