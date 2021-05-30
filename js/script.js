function printMessage(msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}


let computerPoint = 0;
let playerPoint = 0;

function getLossMove(move) {
    if(move === 'kamień') {
        return 'papier';
    } else if(move === 'papier') {
        return 'nozyce';
    } else if(move === 'nozyce') {
        return 'kamień';
    }
}

function playGame(playerInput) {
    clearMessages()

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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (computerPoint !== 0) {
        const sumPoint = computerPoint+playerPoint;
        const percent = computerPoint / sumPoint;

        if(percent > 0.75) {
            getLossMove();
        }
    }
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);

    printMessage('Komputer: mój ruch to ' + computerMove + '!');

    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);

    printMessage('Gracz: zagrałem ' + playerMove + '!');
    displayResult(computerMove, playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove + '!');
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
            playerPoint++;
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage('Komputer wygrywa!');
            computerPoint++;
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Ty wygrywasz!');
            playerPoint++;
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Komputer wygrywa!');
            computerPoint++;
        }
        else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
            printMessage('Komputer wygrywa!');
            computerPoint++;
        }
        else if( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
            playerPoint++;
        }
        else if(argPlayerMove == 'nieznany ruch') {
            printMessage('Wpisałeś niepoprawną wartość!');
            return 'nieznany ruch';
        }
        printMessage('Komputer: ' + computerPoint + ', player: ' + playerPoint);
    }
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
    printMessage('Zagrałeś kamień');
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
    printMessage('Zagrałeś papier');
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
    printMessage('Zagrałeś nozyce');
});