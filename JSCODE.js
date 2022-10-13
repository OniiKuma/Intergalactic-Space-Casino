//todo: enhance the code to make it better 
//let's get it working first
//comment above each line of code to explain what it does

function displayWelcome() {
    //this writes the welcome message to the page
    document.write("<h2>Welcome to the Casino</h2>");
}

function displayInstructions() {
    //this writes the instructions to play the game
    document.write("<br/><p>This is how you play... <br>Refresh the page to roll the dice and have a change to win big or die!<br/>Don't be afraid, test your luck and possibly have some intergalactic winnings... or <em>demise!</em></p>");
}

function displayLaughMeme() {
    document.URL("https://www.youtube.com/watch?v=pVY1-v97Mic")
}

//THIS IS THE MAIN FUNCTION THAT RUNS THE GAME
//THIS FUNCTION ROLLS DICE AND DISPLAYS RESULTS
function play(){
    //THIS ROLLS THE FIRST DIE AND USED A RANDOM NUMBER
    //GENERATOR TO GET A NUMBER BETWEEN 1 AND 6
    var die1 = Math.ceil(Math.random() *6);
    //THIS ROLLS THE SECOND DIE AND USED A RANDOM NUMBER
    //GENERATOR TO GET A NUMBER BETWEEN 1 AND 6
    var die2 = Math.ceil(Math.random() *6);
//THIS ADDS THE TWO DICE TOGETHER
    var sum = die1 + die2
    //THIS WRITES THE RESULTS ON THE PAGE
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 =" + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>") 
    //THIS CHECKS TO SEE IF THE USER WON, LOST OR TIED
    //HERE THE USER LOST
    if (sum == 7 || sum == 11) {
        document.write("You lose Space Cadet!")
        document.write("<br/>")
    }
    //HERE THE USER WON
    else if (die1 == die2 && die1 % 20) {
        document.write("DOUBLES you win Space Ranger!") 
        document.write("<br/>")
    }
    //HERE THE USER TIED
    else {
        document.write("Roll again Space Cadet!") 
        document.write("<br/>")
    }
}