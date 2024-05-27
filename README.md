
# Game of Conkers
## Introduction

### Project Description
[Game of Conkers](https://behemot-biz.github.io/game-of-conkers/)
is a simple browser-based game where you play the traditional playground game of conkers against a computer opponent. The game tests your luck and strategy as you take turns swinging your conker to break your opponent's conker.

### Project Purpose
The aim of this project is to create an entertaining digital version of the classic conkers game. The game is designed to be easy to understand and play, providing a nostalgic experience for users familiar with the game and introducing it to new players.

## User Stories
The Game of Conkers is designed to provide an engaging and fun experience for users who want to play a simple, turn-based game.

### Player
**User story:** As a player, I want a clear and easy-to-understand game interface so that I can quickly start playing and enjoy the game.

**End user goal:** I can easily start a new game, understand the gameplay mechanics, and see the results of each turn.

### Design decisions
### Fonts
I selected the Google Fonts "Karma" for headings and "Source Sans 3" for body text to create a visually appealing contrast.

### Colours
I used a clean and simple color scheme to keep the focus on the game:
- Background: White
- Buttons: Neutral colors with slight shades for active/inactive states

## Features

### Header and Navigation
- **Logo and Game Title:** Displays the title "Play Conkers" with a simple navigation link to "How to play".

### Main Game Area
- **Score Area:** Displays the scores for the player and the computer.
- **Game Info:** Shows game messages and buttons to start a new round or quit the game.
- **Game Area:** Contains the conker images for both player and computer and buttons for starting the game and attacking.

### How to Play Section
- Detailed instructions on how to play the game, hidden by default but can be shown by clicking the "How to play" link.

## JavaScript Functionality

### Core Functions
- **randomNumbers(min, max):** Generates random numbers for conker attributes.
- **createConker(name):** Creates a conker object with random strength and durability.
- **prepareGame():** Prepares the game by assigning conkers to the player and the computer.
- **buttonVisibilityStates(elementId, hide):** Toggles the visibility of HTML elements.
- **conkerResize(elementId, conkerSize):** Resizes the conker images based on durability.
- **startGame():** Initializes the game, setting up the conkers and UI elements.
- **playerTurn() and computerTurn():** Handles the player's and computer's turns respectively.
- **playTurn(attacker, defender):** Executes a turn, calculating damage and updating conker durability.
- **updatePlayerScore(name):** Updates the score for the player or computer.
- **checkWinScore(name):** Checks if the player or computer has won the game.
- **newGame() and resetPlayerScore():** Resets score board anad starts new game.
- **showAbout() and hideAbout():** Toggles the visibility of the "How to play" section.

### Event Listeners
- **DOMContentLoaded:** Initializes event listeners when the DOM is fully loaded.
- **Button Click Events:** Handlers for starting the game, attacking, and reloading the page.

## Testing

### Functionality Test (Manual Testing)
Tested across different devices and browsers to ensure the game works correctly.

Need test case about the "how to play" show/hide element

#### Desktop Layout
|Feature|Expected result|Action|Status|
| --- | --- | --- | --- | 
|Start Game Button|Starts a new game|Click start game button|Pass|
|Attack Button|Player attacks computer's conker|Click attack button|Pass|
|Play Next Round Button|Sets up new round|Click play next round button|Pass|
|Quit Game Button|Displays thanks for playing message|Click quit game button|Pass|

#### Mobile Layout
|Feature|Expected result|Action|Status|
| --- | --- | --- | --- | 
|Start Game Button|Starts a new game|Click start game button|Pass|
|Attack Button|Player attacks computer's conker|Click attack button|Pass|
|Play Next Round Button|Sets up new round|Click play next round button|Pass|
|Quit Game Button|Displays thanks for playing message|Click quit game button|Pass|

## Deployment

The game is deployed using GitHub Pages - [behemot-biz/game-of-conkers](https://behemot-biz.github.io/game-of-conkers/)

To Deploy the game using GitHub Pages:

1. Login (or signup) to GitHub.
2. Go to the repository for this project. - [behemot-biz/game-of-conkers](https://github.com/behemot-biz/game-of-conkers)
3. Click the settings button.
4. Select pages in the left-hand navigation menu.
5. From the source dropdown, select the main branch and press save.
6. The game has now been deployed. Please note that this process may take a few minutes before the game goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project. [behemot-biz/game-of-conkers](https://github.com/behemot-biz/game-of-conkers)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project. [behemot-biz/game-of-conkers](https://github.com/behemot-biz/game-of-conkers)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI, and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Technologies


**Programs used:**
- Vscode (html, css)
- Photoshop (edit images and generating webp files)
- Figma (wireframe/prototyping)

**Browsers:**
- Firefox
- Chrome
- Safari

**Languages:**
- HTML 5
- CSS 3
- JavaScript

**Web Tools:**
- [GitHub](https://github.com) (repository)
- [Google Fonts](https://fonts.google.com/) (font API for loading fonts)
- [Markup Validation Service](https://validator.w3.org) (HTML code validation)
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/) (CSS code validation)


**Web tools:**
- [Github](https://behemot-biz.github.io/bokashi/) (repository)
- [Favoicon](https://favicon.io/favicon-generator/#google_vignette) (generate favicon)
- [Google fonts](https://fonts.google.com/) (font api for loading fonts)
- [Am i responsive](https://ui.dev/amiresponsive) (generate image on different devices)
- [Markup validation Service](https://validator.w3.org) (html code validation)
- [CSS validation service](https://jigsaw.w3.org/css-validator/) (css code validation)
- [JsHint](https://jshint.com/) (javascript code validation)
- [Dillinger](https://dillinger.io) (Readme editor)

## Credits

### Code


### Tutorials Used


**Special thanks to my friends and family for testing the game and providing feedback.**

Enjoy playing the Game of Conkers!
