    /*---Generate a random number b/t 1 - 100---*/
    var rando = Math.floor((Math.random()*100)+1);
    /*---Number of guesses---*/
    var startingCount = 0;
    /*---Put focus on input field---*/
    $("#userGuess").focus();
    /*---Compare the guess with the randomly generated number---*/
    
    
    
    /*---Function to determine guesses---*/
    var theGuess = function(){
        var myNumber = $("#userGuess").val();
        var countUp = $("#count").text(startingCount += 1);
        var difference = Math.abs(myNumber - rando);
        if(myNumber === rando) {
            $("#feedback").text("you got it");
        } else if (difference >= 50) {
            $("#feedback").text("cold...");
            $("#feedback").css("background-color: #00FFFF");
        } else if (difference >= 30 && difference < 50) {
            $("#feedback").text("warming up");
        } else if (difference >= 20 && difference < 30) {
            $("#feedback").text("warmer still...");
        } else if (difference >=10 && difference < 20) {
            $("feedback").text("so dang hot!!!");
        } else {
            $("#feedback").text("FROZEN");
            countUp;
        }
        
        $("#userGuess").focus();
    }
    
$(document).ready(function(){    
    
    /*---Run guessing function when the button is clicked---*/
    $("#guessButton").on("click", theGuess);

    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	
    /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    
});


