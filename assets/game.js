    

    //Decalaring Global Variables

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
    var wins = [0];
    var losses = [0];
    var guesses = 9;
    var guessedLetters = ["_"];
    var gameElement = document.getElementById("game");
    var guessElement = document.getElementById("yourGuesses");
    var compGuessedLetters = ["_"];

    //iterator for "compGuessedLetters" array
    var letter = 1;

    //iterator for "guessedLetters" array
    var i = 1;

    var afterRepeat = 0;



  


   //On key function, waits for user to type input 
    document.onkeyup = function(event) {


        
         //Determines which key was pressed
         var userGuess = event.key;



         // Randomly chooses a choice from the options array.  This is the Computer's guess.
         var computerGuess = options[Math.floor(Math.random() * options.length)];

         //store computer guess to array so that user input(s)
         //is compared to the only 1st random letter that was guessed

         compGuessedLetters.push(computerGuess);





       



        //if user guessed the computer's chosen letter

        if(userGuess === compGuessedLetters[letter]){


             // Alerts the key the user pressed (userGuess).
             alert("Your guess: " + userGuess);

             // Alerts the Computer's guess.
             alert("Computer Guess: " + compGuessedLetters[letter]);


             //Increment wins by 1
             wins[0]++;

             //resets guesses to 9
             guesses = 9;

             //go to next index 
             letter++;

             
            //Prints Score    
            gameElement.innerHTML="<h4>" + "Wins: " + wins + "<h4>"+"<h4>" + "losses: "  + losses + "<h4>" + "<h4>" + "Guesses: " + guesses  + "<h4>" + "<p>" + "" + "</p>"; 
             

             //Clear List of guesses
             document.getElementById("guessElement").innerHTML = "<p>" + " " + "</p>";

             


             //add guessed letter to the "guessedLetters" array.
             guessedLetters.push(userGuess);



       
        }


        
        //if "guesses" variable is less than 2.

        else if (guesses < 2 ){

           //increases number of losses
           losses[0]++;

           //reset guesses to 9
           guesses = 9;


            // Alerts the key the user pressed (userGuess).
            alert("Your guess: " + userGuess);

            // Alerts the Computer's guess.
            alert("Computer Guess: " + compGuessedLetters[letter]);

            letter++;

            //Prints Score    
            gameElement.innerHTML="<h4>" + "Wins: " + wins + "<h4>"+"<h4>" + "Losses: "  + losses + "<h4>" + "<h4>" + "Guesses: " + guesses  + "<h4>" + "<p>" + "" + "</p>"; 

            //Clear List of guesses
            document.getElementById("guessElement").innerHTML = "<p>" + " " + "</p>";

           

        }


        else{

             //Goes through "guessesLetters" aray.

             for (var i = 1; i<guessedLetters.length; i++){

                    //if user input is in the "guessedLetters" array...

                    if (userGuess === guessedLetters[i]){


                        //Display alert message

                        alert("You've already guessed that letter!");



                        //increase guess if previous guess was already made 

                        if(afterRepeat === 0 || guesses === (afterRepeat - 1) || guesses === (afterRepeat + 1)){
                            
                            guesses++;
                            afterRepeat = guesses;
                            
                        }

        
                    }

                    else{

                        //do nothing
                         

                        }


                

                }

            // Alerts the key the user pressed (userGuess).
            alert("Your guess: " + userGuess);

            // Alerts the Computer's guess.
            alert("Computer Guess: " + compGuessedLetters[letter]);

            guesses--;

           

            //add guessed letter to the "guessedLetters" array.
            guessedLetters.push(userGuess);



          
                    
        }

        
         

    //Prints Score    
    gameElement.innerHTML="<h4>" + "Wins: " + wins + "<h4>"+"<h4>" + "Losses: "  + losses + "<h4>" + "<h4>" + "Guesses: " + guesses  + "<h4>" + "<p>" + "" + "</p>";



    //if guesses have not restarted
    if (guesses === 9){

    
        //do nothing 

     
    }

    else{

        //print guessed letters

         var text = "Your Guesses So Far: " + "<p>";

            for (i = 1; i < guessedLetters.length; i++) {
            
            text += " " + guessedLetters[i] + " ";
            
            }

        text += "</p>";
        document.getElementById("guessElement").innerHTML = text;
    }

};
        
