
### To do:
modify random numbers for conkers
    strength should be between 4 - 10
    durability between 30 - 100

 Need to add some other element that makes the game more interesting. Just having the strength and durability mekes it quite obvious which conker is going to win... perhaps add random strength to the hit!

hide attack button on game over

Refine displayConkerStats
  read in data from html instead on update!
  move the the current display data to prepareGame funktion as it is an initial data display. during the turns maybe i can read from the dom instead of fiddeling with arrays...?
    Or create an updateConkerStats to handel the data.

Find suitable concer images
   Images that can easily be "shrunken" based on the remaining durability from each turn to illustrate the progress of the game.


### Game play
 create conker objects with random strength and durability.

  if enough time add special attribute like stun, string snap etc.


assign conkers to players (player and computer)


print the conker stats through out the game.


 game loop
  keep track of th game turns computer or player's turn to hit.
Start new game on request when round has ended. Call quitGame on request

Player and computer takes turns to hit conker untile one conker breakes.

calculate damage hit (strength)/durabillity until one player conker breaks i.e. durability = 0 

keep track of total score, first to take 10 wins wins the full game 

Quit game

Display thanks for a food game and welcome back.

### difficulties
I had a bit of struggle with the play game loop as i built it, it was playing out the game in one go. i had to rethink this and split it to use event handler for players turn and create new function for computers turn.

### sources
How to set time out and then call computers turn.
https://codedamn.com/news/javascript/what-is-settimeout-in-javascript

maybe show/hide player attack button? ot sure yet.
 https://stackoverflow.com/questions/71147262/how-can-i-hide-this-button-onclick-with-javascript


### bug fix
attack button acts up.
when computers looses attack button stays red when game starts,
set attack color button to white in start game