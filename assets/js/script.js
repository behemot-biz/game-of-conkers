/**
 * Setting up basic variables
 */
let conkers = null;
let attacker = null;  // player 0, computer 1
let conkerBroken = null;

/**
 * Create min and max values for conker strength and durability
 */
function randomNumbers(min, max){

    return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * Create conker objects with random strength and durability
 * if enough time add special attribute like stun, string snap etc.
 */
function createConker(name, strength, durability) {

    return {
        name: name, 
        strength: randomNumbers(7, 10),
        durability: randomNumbers(60, 100)
    };
}

/**
 * Assign conkers to players (player and computer)
 */
function prepareGame() {

    let playerConker = createConker("Player");
    let computerConker = createConker("Computer");

    return  [playerConker, computerConker]; 
}

/**
 * Show or hide elements through the game  
 */
function buttonVisibilityStates(elementId, hide) {

    if (hide) {
        document.getElementById(elementId).classList.remove("show");
        document.getElementById(elementId).classList.add("hide");
    } else {
        document.getElementById(elementId).classList.remove("hide");
    }
}

/**
 * Update conkers size during the game
 * from setup to conker broken
 */
function conkerResize(elementId, conkerSize) {

    document.getElementById(elementId).style.width = conkerSize;
}

/**
 * Start game, add conkers to players
 * Set visibility on elements
 */
function startGame() {

    attacker = 0;  // player 0, computer 1
    conkerBroken = false;
    document.getElementById("attackButton").style.backgroundColor = "#ffffff";
    conkers = prepareGame();

    buttonVisibilityStates("gameInfo", true);
    buttonVisibilityStates("startButton", true);
    buttonVisibilityStates("attackButton", false);

    document.getElementById("winner").innerHTML = "";

    conkerResize("playerConkerImg", conkers[0].durability * 2 + "px");
    conkerResize("computerConkerImg", conkers[1].durability * 2 + "px");
}

/**
 * Players turn, call play turn
 * Change status on attack button
 * Hand over to computers turn after short timeout.
 */
function playerTurn() {

    if (conkerBroken != true && attacker === 0) {
        
        playTurn(conkers[0], conkers[1]);

        attacker = 1; // next turn computer
        document.getElementById("attackButton").style.backgroundColor = "#f3c7c7";
        setTimeout(computerTurn, 1000); // wait 1 seconds and then call computers turn.
    }
}

/**
 * Initialize turn
 */
function initializeTurn() {

    document.getElementById("attackButton").addEventListener("click", playerTurn);
}

/**
 * Add event listener 
 */
addEventListener("DOMContentLoaded", initializeTurn);

/**
 * Computers turn
 * Change status on attack button
 * Hand over to players turn 
 */
function computerTurn() {
    
    if (conkerBroken != true && attacker === 1){
        playTurn(conkers[1], conkers[0]);

        attacker = 0; // next turn player
        document.getElementById("attackButton").style.backgroundColor = "#ffffff";
    }
}

/**
 * Player and computer takes turns to hit conker until one conker breakes.
 * calculate damage hit (strength)/durabillity until one player conker breaks i.e. durability = 0 
 * Resize the conkers after each turn to show durability lost.
 * When conker breaks show game info elements and hide attack button.
 */
function playTurn(attacker, defender) {

    //Add some random extra strength to the attack
    let hitStrength = Math.floor(Math.random() * attacker.strength) + attacker.strength;
    let damage = hitStrength;

    defender.durability -= damage;

    if (defender.durability <= 0) {
        defender.durability = 0;
        conkerBroken = true;

        playerScore(attacker.name);
        checkWinScore(attacker.name);
        
     
    } 

    conkerResize("playerConkerImg", conkers[0].durability * 2 + "px");
    conkerResize("computerConkerImg", conkers[1].durability * 2 + "px");
}

/**
 * Show the about element, holding the how to plah text.
 */
function showAbout() {
    buttonVisibilityStates("about", false)
}

/**
 * Hide the about element, holding the how to plah text.
 */
function hideAbout() {
    buttonVisibilityStates("about", true)
}

/**
 * Keep track of total score, first to take 10 wins wins the full game 
 */
function playerScore(name) {

    name = name.toLowerCase();
    document.getElementById(name).innerHTML = parseInt(document.getElementById(name).innerHTML) + 1;
}

/**
 * Check score for win game
 */
function checkWinScore(name) {
    let nameString = name.toLowerCase();

    if (parseInt(document.getElementById(nameString).innerHTML) >= 2) {
        document.getElementById("winner").innerHTML = `<h3>The new conker champion is ${name}!</h3>`;
        buttonVisibilityStates("gameInfo", false);
        buttonVisibilityStates("attackButton", true);
        buttonVisibilityStates("newRoundButton", true);
        buttonVisibilityStates("quitButton", false);
    } else {
        document.getElementById("winner").innerHTML = `<h3>${name} wins this round! </h3>`;
        buttonVisibilityStates("gameInfo", false);
        buttonVisibilityStates("newRoundButton", false);
        buttonVisibilityStates("attackButton", true);
        buttonVisibilityStates("quitButton", false);

    }
}

/**
 * Quit game
 */
function gameQuit() {
    //Display thanks for a food game and welcome back.
}