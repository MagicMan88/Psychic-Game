// What are we doing?

// Prompt user and ask them to guess a letter between A and Z.

alert("Guess which letter I'm thinking of, I dare you!")

// Create variables to hold guessed letters, guesses left and wins.

    var lettersGuessed = [];
    var guessesLeft = 10;
    var wins = 0;

// Generate a random letter and store it in a variable for later.

    var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);

    console.log(computerGuess);

// Create a function to capture the user's keyboard input and make the input lowercase.

    document.onkeydown = function(event) {
        var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

        // document.getElementByID('guess').innerHTML = keyPress;
        addLetter(keyPress);
    };

// Check to see if letter is correct or a repeat guess.

    function addLetter (usersKeypress) {

        var repeatGuess = lettersGuessed.some(function(item){
            return item === usersKeypress;
        })

        // Alert the user if they've already guessed that letter.
        if (repeatGuess) {
            alert(usersKeypress + " you've already guessed that letter silly. Try again!");

            // If not a repeat guess check if it's in word
            } else {
                lettersGuessed.push(usersKeypress);
                console.log(lettersGuessed);

                // Show the user's input in browser
                showLettersGuessed();
                // Does user's input match computers?
                guessMatch(usersKeypress);
            }
        }

// Functions to show the letters that have been guessed.
    function showLettersGuessed() {
        var tempStr = lettersGuessed.join(", ");

    document.getElementById("playersGuess").innerHTML = tempStr;
    }

    function guessMatch (character) {

        console.log(character);
        console.log(computerGuess);

        if (character === computerGuess) {

            alert("You've chosen wisely!");
            wins = wins + 1;
            showWins();
            //


        } else if (guessesLeft == 0) {
            alert("Ha Ha Ha you've run out of guesses you fool!");
            resetVariables ();


        } else {
            guessesLeft = guessesLeft - 1;
            showGuessesRemaining();
        }
    }

    // Function to show count of wins
        function showWins() {
            document.getElementById("numWins").innerHTML = wins;
        }
    
    // Function to show guesses remaining
        function showGuessesRemaining() {
            document.getElementById("numGuesses").innerHTML = guessesLeft;
        }

    // Function resetting variables
        function resetVariables() {
            lettersGuessed = [];
            showWins();
        }

    // Function starting game
        function startGame() {
            showGuessesRemaining();
            showWins();
        }

    startGame();

// Program complete!