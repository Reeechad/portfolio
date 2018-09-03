var secretNumber = 4;

var guess = Number(prompt("Guess a number"));
//var stringGuess = prompt()//
  //var guess = Number(stringGuess)//
if(guess === secretNumber){
    alert("Yay!");
}
else if(guess > secretNumber){
    alert("Too high. Guess again")
}
else {
    alert("Too low")
}