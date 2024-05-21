/**
 * Setting up 
 */
let conkers;
let attacker;  // player 0, computer 1
let conkerBroken;

/**
 * create min and max values for conker strength and durability
 */
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
/**
 * create conker objects with random strength and durability
 * if enough time add special attribute like stun, string snap etc.
 */
function createConker(name, strength, durability) {
    return {
        name: name, 
        strength: randomNumbers(7, 10),
        durability: randomNumbers(60, 100)
        // strength: Math.floor(Math.random()* 10) +1,
        // durability: Math.floor(Math.random()* 100) +1
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
 * Hide/show buttons
 * 
 */
function startGame() {
    attacker = 0;  // player 0, computer 1
    conkerBroken = false;
    document.getElementById("attackButton").style.backgroundColor = "#ffffff";
    conkers = prepareGame();
    displayConkerStats(conkers);

    document.getElementById("startButton").style.display = "none";
    document.getElementById("attackButton").style.display = "block";
  
    document.getElementById("winner").innerHTML = "";

    document.getElementById("playerConkerImg").style.width =  conkers[0].durability * 2 + "px";
    document.getElementById("computerConkerImg").style.width =  conkers[1].durability * 2 + "px";

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
        document.getElementById("attackButton").style.backgroundColor = "#f3c7c7";
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
    console.log("conker status: " + conkerBroken);
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
        defender.durability = 0;
        conkerBroken = true;
        displayConkerStats(attacker, defender);
        
        document.getElementById("winner").innerHTML = `<h3>${attacker.name}  wins! </h3>`;
        
        document.getElementById("startButton").style.display = "block";
        document.getElementById("attackButton").style.display = "none";
    } 
    document.getElementById("playerConkerImg").style.width =  conkers[0].durability * 2 + "px";
    document.getElementById("computerConkerImg").style.width =  conkers[1].durability * 2 + "px";
    displayConkerStats(attacker, defender);
    
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