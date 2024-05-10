
/**
 * create conker objects with random strength and durability
 * if enough time add special attribute like stun, string snap etc.
 */
function createConker(name, strength, durability) {
    return {
        name: name, 
        strength: strength,
        durability: durability
    };
}

/**
 * assign conkers to players (player and computer)
 */
function prepareGame() {
    let playerConker = createConker("Player", 10, 100);
    let computerConker = createConker("Computer", 10, 100);
    return  playerConker, computerConker;
    
}
/**
 * print the conker stats through out the game
 * 
 */
function displayConkerStats(playerConker) {
    //

}

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