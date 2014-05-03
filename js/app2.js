//generates the random number between 1 - 100
var rando = Math.floor((Math.random()*100)+1);
//sets the starting count to 0
var startingCount = 0;
//sets the previous comparing guess to 0
var prevGuess = 0;

//the function for comparing guesses
function compareGuess(guessedNum) {
    var difference = Math.abs(guessedNum - rando);
    if(guessedNum == rando) {
        $("#feedback").text("You got it!");
        $("#feedback").css("background-color", "#EA00FF") 
    } else if (difference >= 50) {
            $("#feedback").text("cold...");
            $("#feedback").css("background-color", "#3FAAF2");
    } else if (difference >= 30 && difference < 50) {
            $("#feedback").text("warm");
            $("#feedback").css("background-color", "#FFC812"); 
    } else if (difference >= 20 && difference < 30) {
            $("#feedback").text("warmer");
            $("#feedback").css("background-color", "#FF7B08");
    } else if (difference >=10 && difference < 20) {
            $("#feedback").text("HOT!");
            $("#feedback").css("background-color", "#FF1408")
    } else {
            $("#feedback").text("REALLY HOT!");
            $("#feedback").css("background-color", "#F20000")      
    }
    prevGuess = guessedNum;
}

//the new game function - resets everything
function startNewGame() {
    rando = Math.floor((Math.random()*100)+1);
    startingCount = 0;
    prevGuess = 0;
    $("#feedback").text("Make your guess!");
    $("#feedback").css("background-color", "#cc324b");
    $("#count").text(startingCount);
    $("#guessList").empty();
    $("#userGuess").val(" ").focus();    
}

//function to tell user if they're getting closer or further away
function theDistance(guessedNum) {
    var newDistance = Math.abs(guessedNum - rando);
    var lastDistance = Math.abs(prevGuess - rando);
    if (guessedNum == rando) {
        $("#feedback").text("You got it!");
        $("#feedback").css("background-color", "#EA00FF") 
    } else if (newDistance >= lastDistance) {
        $("#feedback").text("cooling down...");
        $("#feedback").css("background-color", "#3FAAF2");
    } else {
        $("#feedback").text("warming up!");
        $("#feedback").css("background-color", "#FF7B08");
    }
    prevGuess = guessedNum;
};

//buttonPress function
function buttonPress() {
    var myNumber = $("#userGuess").val();
    var countUp = $("#count").text(startingCount ++);
    if (myNumber >= 1 && myNumber <=100) {
        if (startingCount == 1) {
            compareGuess(myNumber);
          } else {
            theDistance(myNumber);
            } 
        countUp;
        $("#userGuess").focus(); 
        $("#guessList").append("<li>" + myNumber + "</li>");    
    }   else {
              alert("Pick a number between 1 and 100");
        }
    if (myNumber == rando) {
        alert ("Please start a new game!")
    }
        
    };



$(document).ready(function(){
    
    //---This function handles the events that happen when the guess button is clicked---//
    $("#guessButton").on("click", buttonPress);
    
    //---Run the buttonPress function when Enter is pressed too---//
    
        
    
    //---This starts the New Game when clicked---//
    $(".new").on("click", startNewGame);
	
    /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	
    /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    
});