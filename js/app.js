    /*---Generate a random number b/t 1 - 100---*/
    var rando = Math.floor((Math.random()*100)+1);
    /*---Number of guesses---*/
    var startingCount = 0;
    /*---Put focus on input field---*/
    $("#userGuess").focus();
    /*---Compare the guess with the randomly generated number---*/
    
    
    
    /*---Function to determine guesses---*/
    function theGuess(){
        var myNumber = $("#userGuess").val();
        var countUp = $("#count").text(startingCount ++ );
        var difference = Math.abs(myNumber - rando);
        if(myNumber == rando) {
            $("#feedback").text("you got it");
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
        countUp;
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


