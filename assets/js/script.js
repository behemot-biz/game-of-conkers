/**
 * Setting up 
 */
let conkers;
let attacker = 0;  // player 0, computer 1
let conkerBroken = false;

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
 * Start game, add conkers to players
 */
function startGame() {
    conkers = prepareGame();
}
/**
 * Add event listener for players attack button, call play turn
 * and then hand over to computers turn after short timeout.
 */
document.getElementById("attackButton").addEventListener("click", function() {
    console.log("players turn");
    if (conkerBroken != true && attacker === 0) {
        playTurn(conkers[0], conkers[1]);

        attacker = 1; // next turn computer
        setTimeout(computersTurn, 2000); // wait 2 seconds and then call computers turn.
    }
});

/**
 * Computers turn
 */
function computersTurn() {
    console.log("computers turn");
    if (conkerBroken != true && attacker === 1){
        playTurn(conkers[1], conkers[0]);

        attacker = 0; // next turn player
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


    // let playerStats = conkers[0].name + "<br>";
    // playerStats += "Strength: " + conkers[0].strength + "<br>";
    // playerStats += "Durability: " + conkers[0].durability;

    // let computerStats = conkers[1].name + "<br>";
    // computerStats += "Strength:" + conkers[1].strength + "<br>";
    // computerStats += "Durability: " + conkers[1].durability;

    // let playerStrength = conkers[0].strength;
    
    // document.getElementById('playerConker').innerHTML = playerStats;
    // document.getElementById('computerConker').innerHTML = computerStats;
}

// let conkers = prepareGame();
// displayConkerStats(conkers);

/**
 * game loop
 * keep track of th game turns computer or player's turn to hit
 * Start new game on request when round has ended
 * call quitGame on request
 */
function playGame() {
    displayConkerStats(conkers);
    // player starts by default
    // player = 0 computer = 1
    let attacker = 0;

    if (attacker === 0) {
        playTurn(conkers[0], conkers[1]);
        attacker = 1; // computers turn
    } else {
        playTurn(conkers[1], conkers[0]);
        attacker = 9; // players turn
    }

}

/**
 * Player and computer takes turns to hit conker untile one conker breakes
 * calculate damage hit (strength)/durabillity until one player conker breaks i.e. durability = 0 
 */
function playTurn(attacker, defender) {
    
    //Add some random strength to the attack
    let hitStrength = Math.floor(Math.random() * attacker.strength) + attacker.strength;

    let damage = hitStrength;
            console.log("hitStrength: " + hitStrength);
            console.log("attacker strength: " + attacker.strength + " | " + attacker.name);
            console.log("defender durability: " + defender.durability + " | " + defender.name);
            console.log("damage: " + damage);

    defender.durability -= damage;
            console.log("defender durability: " + defender.durability + " | " + defender.name);

    if (defender.durability <= 0) {
        console.log(defender.name + "'s conker is broken");
        displayConkerStats(attacker, defender);
        return //
    } 
    displayConkerStats(attacker, defender);
    return //
}



// playGame(conkers);



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