///computer choices array
var compNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//initial var settings
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerPick = null;

//computer picks random letter from compNum array
var updateLetter = function(){
	computerPick = compNum[Math.floor(Math.random() * compNum.length)];
	console.log(computerPick);
}

updateLetter();

document.onkeypress = function(event) {
    var userGuess = event.key;
    guessesSoFar.push(userGuess);

    if(userGuess === computerPick){
        wins++;
        guessesLeft = 9;
        updateLetter();
        guessesSoFar = [];
        alert("You\'re a WINNER!!")
    }else{
        guessesLeft--;
    }

    if(guessesLeft === 0){
        losses++;
        guessesLeft = 9;
        updateLetter();
        guessesSoFar = [];
        alert("You\'re out of guesses. Better luck next time")
    }

    document.getElementById('wins').innerHTML = "Wins : " + wins;
    document.getElementById('losses').innerHTML = "Losses : " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left : " + guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = "Your guesses so far : " + guessesSoFar;

} 