function playGame() {
    let playerInput;

window.onload = function() {
    game()
  };

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function getMoveName(argMoveId) {
    if(argMoveId == 1) {
        return 'kamień';
    }
    else if(argMoveId == 2) {
        return 'papier';
    }
    else if(argMoveId == 3) {
        return 'nozyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function game()
{
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    // if(randomNumber == 1) {
    //     computerMove = 'kamień';
    // }
    // else if(randomNumber == 2) {
    //     computerMove = 'papier';
    // }
    // else if(randomNumber == 3) {
    //     computerMove = 'nozyce';
    // }
    printMessage('Komputer: mój ruch to ' + computerMove + '!');

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    // if(playerInput == '1') {
    //     playerMove = 'kamień';
    // }
    // else if(playerInput == '2') {
    //     playerMove = 'papier';
    // }
    // else if(playerInput == '3') {
    //     playerMove = 'nozyce';
    // }
    printMessage('Gracz: zagrałem ' + playerMove + '!');
    displayResult(computerMove, playerMove);
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove + '!');
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
        printMessage('Komputer wygrywa!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
        printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
    }
    else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
    }
    else if( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage('Remis!');
    }
    else if( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if(argPlayerMove == 'nieznany ruch') {
        printMessage('Wpisałeś niepoprawną wartość!');
        return 'nieznany ruch';
    }
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
}

//playGame(3);

document.getElementById('play-rock').addEventListener('click', function(){
    printMessage('Zagrałeś kamień');
});

document.getElementById('play-paper').addEventListener('click', function(){
    printMessage('Zagrałeś papier');
});

document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage('Zagrałeś nozyce');
});