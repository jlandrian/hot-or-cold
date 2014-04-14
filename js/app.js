$(document).ready(function(){
    /*---Function to start a  new game---*/
    /*---function newGame(){
        Clone the input field for use later
        var feedbackClone = $("#feedback").clone();
        Clone the Count for later use
        var countClone = $("#count").clone();
        Clone the list of guesses for later use
        var guessClone = $("#guessList").clone();
    }---*/
    
    /*---Run New Game Function
    newGame();---*/
    
    /*---Generate a random number---*/
     var rando = Math.floor((Math.random()*100)+1);
    
    /*---Function to determine guesses---*/
    var theGuess = function(){
        var myNumber = $("#userGuess").val();    
        if(myNumber === rando) {
            $("#feedback").text("yes");
        } else {
            $("#feedback").text("nope!");
        }
    }
      
    $("#guessButton").on("click", theGuess);
    
    

    
    /*---Run New Game on clicking .new button---*/
    $(".new").on("click", newGame);
    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	
    /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    
});


