/**
 * Setting up 
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

function buttonVisibilityStates(elementId, hide) {
    console.log(elementId);

    if (hide) {
        document.getElementById(elementId).classList.remove("show");
        document.getElementById(elementId).classList.add("hide");
    } else {
        document.getElementById(elementId).classList.remove("hide");
    }

}

/**
 * Start game, add conkers to players
 * Hide/show buttons
 */
function startGame() {
    attacker = 0;  // player 0, computer 1
    conkerBroken = false;
    document.getElementById("attackButton").style.backgroundColor = "#ffffff";
    conkers = prepareGame();
    displayConkerStats(conkers);

    buttonVisibilityStates("gameInfo", true);
    buttonVisibilityStates("startButton", true);
    buttonVisibilityStates("attackButton", false);

    // document.getElementById("startButton").style.display = "none";
    // document.getElementById("attackButton").style.display = "block";
  
    document.getElementById("winner").innerHTML = "";

    document.getElementById("playerConkerImg").style.width =  conkers[0].durability * 2 + "px";
    document.getElementById("computerConkerImg").style.width =  conkers[1].durability * 2 + "px";
}

/**
 * Add event listener for players attack button, call play turn
 * and then hand over to computers turn after short timeout.
 */


function playerTurn() {

    if (conkerBroken != true && attacker === 0) {
        playTurn(conkers[0], conkers[1]);

        attacker = 1; // next turn computer
        document.getElementById("attackButton").style.backgroundColor = "#f3c7c7";
        setTimeout(computerTurn, 1000); // wait 1 seconds and then call computers turn.
    }
}

function initializeTurn() {
    document.getElementById("attackButton").addEventListener("click", playerTurn);
}

addEventListener("DOMContentLoaded", initializeTurn);


/**
 * Computers turn
 */
function computerTurn() {
    
    if (conkerBroken != true && attacker === 1){
        playTurn(conkers[1], conkers[0]);

        attacker = 0; // next turn player
        document.getElementById("attackButton").style.backgroundColor = "#ffffff";
    }
}

/**
 * print the conker stats through out the game
 * 
 */ 
function displayConkerStats() {
    
    document.getElementById("playerConkerStrength").textContent = conkers[0].strength;
    document.getElementById("playerConkerDurability").textContent = conkers[0].durability;

    document.getElementById("computerConkerStrength").textContent = conkers[1].strength;
    document.getElementById("computerConkerDurability").textContent = conkers[1].durability;

}

/**
 * Player and computer takes turns to hit conker untile one conker breakes
 * calculate damage hit (strength)/durabillity until one player conker breaks i.e. durability = 0 
 */
function playTurn(attacker, defender) {
    //Add some random strength to the attack
    let hitStrength = Math.floor(Math.random() * attacker.strength) + attacker.strength;
    let damage = hitStrength;

    defender.durability -= damage;

    if (defender.durability <= 0) {
        defender.durability = 0;
        conkerBroken = true;

        displayConkerStats(attacker, defender);
        playerScore(attacker.name);
        document.getElementById("winner").innerHTML = `<h3>${attacker.name}  wins! </h3>`;
        
        buttonVisibilityStates("gameInfo", false);
        buttonVisibilityStates("startButton", false);
        buttonVisibilityStates("attackButton", true);

        // document.getElementById("startButton").style.display = "block";
        // document.getElementById("attackButton").style.display = "none";
    } 

    document.getElementById("playerConkerImg").style.width =  conkers[0].durability * 2 + "px";
    document.getElementById("computerConkerImg").style.width =  conkers[1].durability * 2 + "px";
    displayConkerStats(attacker, defender);

}

/**
 * Keep track of total score, first to take 10 wins wins the full game 
 */
function playerScore(name) {
    name = name.toLowerCase();
    document.getElementById(name).innerHTML = parseInt(document.getElementById(name).innerHTML) + 1;
}

/**
 * Quit game
 */
function gameQuit() {
    //Display thanks for a food game and welcome back.
}