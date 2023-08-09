 // Get score from local storage
 let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove){
    const computerMove = pickComputerMove();

    // chooses a result based on player move and computer move
    let result = '';
    if (playerMove === 'scissors'){
        if(computerMove === 'scissors'){
        result = 'Tie.';
        }
        else if(computerMove === 'rock'){
            result = 'You lose.';
        }
        else if(computerMove === 'paper'){
            result = 'You win.';
        }
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
        result = 'Tie.';
        }
        else if(computerMove === 'paper'){
            result = 'You lose.';
        }
        else if(computerMove === 'scissors'){
            result = 'You win.';
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'paper'){
        result = 'Tie.';
        }
        else if(computerMove === 'scissors'){
            result = 'You lose.';
        }
        else if(computerMove === 'rock'){
            result = 'You win.';
        }
    }
    
    // keeps the score
    if(result === 'You win.'){
        score.wins += 1;
    }
    else if(result === 'You lose.'){
        score.losses += 1;
    }
    else if(result === 'Tie.'){
        score.ties += 1;
    }

    // saves score in local storage
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    // updates p elements in html with the necessary values
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> computer`;
}

// updates the p tag in html with the score
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// picks a computer move based on a random number
function pickComputerMove(){
    let computerMove = '';
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';
    } 
    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'paper';
    }
    else if(randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors';
    }

    return computerMove;
}