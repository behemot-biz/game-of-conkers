
/**
 * create conker objects with random strength and durability
 * if enough time add special attribute like stun, string snap etc.
 */
function createConker(name, strength, durability) {
    return {
        name: name, 
        strength: Math.floor(Math.random()* 10) +1,
        durability: Math.floor(Math.random()* 100) +1
    };
}

/**
 * assign conkers to players (player and computer)
 */
function prepareGame() {
    let playerConker = createConker("Player");
    let computerConker = createConker("Computer");
    return  [playerConker, computerConker];
    
}



/**
 * print the conker stats through out the game
 * 
 */ 
function displayConkerStats() {
    let playerStats = conkers[0].name + "<br>";
    playerStats += "Strength: " + conkers[0].strength + "<br>";
    playerStats += "Durability: " + conkers[0].durability;

    let computerStats = conkers[1].name + "<br>";
    computerStats += "Strength:" + conkers[1].strength + "<br>";
    computerStats += "Durability: " + conkers[1].durability;

    // let playerStrength = conkers[0].strength;
    document.getElementById('playerConker').innerHTML = playerStats;
    document.getElementById('computerConker').innerHTML = computerStats;

    //

}
let conkers = prepareGame();
displayConkerStats(conkers);

/**
 * game loop
 * keep track of th game turns computer or player's turn to hit
 * Start new game on request when round has ended
 * call quitGame on request
 */
function playGame() {

    
}

/**
 * Player and computer takes turns to hit conker untile one conker breakes
 * calculate damage hit (strength)/durabillity until one player conker breaks i.e. durability = 0 
 */
function playTurn() {
  
}

/**
 * keep track of total score, first to take 10 wins wins the full game 
 */
function playerScore() {
    //
}

/**
 * Quit game
 */
function gameQuit() {
    //Display thanks for a food game and welcome back.
}