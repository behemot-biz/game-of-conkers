
# Game of Conkers
## Introduction

### Project Description
[Game of Conkers](https://behemot-biz.github.io/game-of-conkers/)
is a simple browser-based game where you play the traditional playground game of conkers against a computer opponent. The game tests your luck and strategy as you take turns swinging your conker to break your opponent's conker.

### Project Purpose
The aim of this project is to create an entertaining digital version of the classic conkers game. The game is designed to be easy to understand and play, providing a nostalgic experience for users familiar with the game and introducing it to new players.

### Look and feel on different devices
![Responsive image example](readme-images/amiresponsive.png)

## User Stories
The Game of Conkers is designed to provide an engaging and fun experience for users who want to play a simple, turn-based game.

### Player
**User story:** As a player, I want a clear and easy-to-understand game interface so that I can quickly start playing and enjoy the game.

**End user goal:** I can easily start a new game, understand the gameplay mechanics, and see the results of each turn.

### Design decisions
### Fonts
I selected the Google Fonts "Karma" for headings and "Source Sans 3" for body text to create a visually appealing contrast.

### Colours
I used a clean and simple color scheme to keep the focus on the game.

![Color scheme](readme-images/colors.png)

#### Colour use
- Blue #2b5c8f - Headlines, links, button dark
- Blue #005c93 - Score board background, score numbers
- White #ffffff - Background color
- Dark grey #494949 - Buttons
- Pale red #f3c7c7 - Computer attack button state

### Imagery
I used a computer generated image of a conker on a string.

### Wireframes

I chose to use Figma for wireframe and prototyping. In early stage of my thought process used pen and paper to get an idea where to take the layout.

<details>
<summary>View the early sketch(image of)</summary>

![Prototype](readme-images/early-sketch.png)
</details>

<details>
<summary>View the Prototype document (image of)</summary>

![Prototype](readme-images/figma-prototype.png)
</details>


## Features

### Header and Navigation
- **Logo and Game Title:** Displays the title "Play Conkers" with a simple navigation link to "How to play".
    
    ![Header/Navigation](readme-images/header-nav.png)<br>
    **Header/Navigation**

### Main Game Area
- **Score Area:** Displays the scores for the player and the computer.
- **Game Info:** Shows game messages and buttons to start a new round or quit the game.
- **Game Area:** Contains the conker images for both player and computer and buttons for starting the game and attacking.

    ![Score Area](readme-images/score-area.png)<br>
    **Score Area**

    ![Game Area - start game](readme-images/game-area-start-game.png)<br>
    **Game Area - start game**

    ![Game Area - attack opponent](readme-images/game-area.png)<br>
    **Game Area - attack opponent**

    ![Game Info - winner round](readme-images/win-round.png)<br>
    **Game Info - winner round**

    ![Game Info - winner game](readme-images/conker-champion.png)<br>
    **Game Info - winner game**

    ![Game Info - quit game](readme-images/quit-game.png)<br>
    **Game Info - quit game**

    **A note about playing on small devises**

    When playing the game on a small device, the conkers shrink as the game progresses, resulting in a growing gap between the player's conker and the attack button. This design trade-off is intentional; although it may not be visually appealing, it ensures that the player does not have to adjust their grip, as the button's location remains fixed.

    ![Game Area - mid game on small device](readme-images/game-play-galaxy-fold.png)<br>

### How to Play Section
- Detailed instructions on how to play the game, hidden by default but can be shown by clicking the "How to play" link.

    ![How to play](readme-images/how-to-play.png)<br>
    **How to play**

## JavaScript Functionality

### Core Functions
- **randomNumbers(min, max):** Generates random numbers for conker attributes.
- **createConker(name):** Creates a conker object with random strength and durability.
- **prepareGame():** Prepares the game by assigning conkers to the player and the computer.
- **buttonVisibilityStates(elementId, hide):** Toggles the visibility of HTML elements.
- **resizeConker(elementId, conkerSize):** Resizes the conker images based on durability.
- **startGame():** Initializes the game, setting up the conkers and UI elements.
- **playerTurn() and computerTurn():** Handles the player's and computer's turns respectively.
- **playTurn(attacker, defender):** Executes a turn, calculating damage and updating conker durability.
- **updatePlayerScore(name):** Updates the score for the player or computer.
- **changeWinnerHeading(headingText):** Handels the game info text.
- **checkWinScore(name):** Checks if the player or computer has won the game.
- **newGame() and resetPlayerScore(name):** Resets score board anad starts new game.
- **showAbout() and hideAbout():** Toggles the visibility of the "How to play" section.

### Event Listeners
- **DOMContentLoaded:** Initializes event listeners when the DOM is fully loaded.
- **Button Click Events:** Handlers for starting the game, attacking, and reloading the page.

## Testing

### Functionality Test (Manual Testing)
Tested across different devices and browsers to ensure the game works correctly.

#### Desktop Layout
|Feature|Expected result|Action|Status|
| --- | --- | --- | --- | 
|Start Game Button|Starts a new game|Click start game button|Pass|
|Attack Button|Player attacks computer's conker|Click attack button|Pass|
|Attack Button|Computer attacks players's conker|Attack button disabled|Pass|
|Play Next Round Button|Sets up new round|Click play next round button|Pass|
|Start New Game Button|Starts a new game and resets score|Click start new game button|Pass|
|Quit Game Button|Displays thanks for playing message|Click quit game button|Pass|

#### Mobile Layout
|Feature|Expected result|Action|Status|
| --- | --- | --- | --- | 
|Start Game Button|Starts a new game|Click start game button|Pass|
|Attack Button|Player attacks computer's conker|Click attack button|Pass|
|Attack Button|Computer attacks players's conker|Attack button disabled|Pass|
|Play Next Round Button|Sets up new round|Click play next round button|Pass|
|Start New Game Button|Starts a new game and resets score|Click start new game button|Pass|
|Quit Game Button|Displays thanks for playing message|Click quit game button|Pass|

The test cases were carried out on following devices/browsers: 

MacBook Pro 15-inch, 2017
- Safari Version 17.4.1 
- Firefox 124.0.2 (64-bit)
- Chrome Version 123.0.6312.124 (Official Build) (x86_64)

Ipad pro (12,9 inch IOS 16.7.7)
- Safari
- Firefox
- Chrome 

Iphone SE
- Safari
- Chrome 

Iphone 8 plus (IOS 16.7.7)
- Safari

The tests where carried out on the finalized site, no errors found.

### Code validation
#### Javascript
Passed without errors

<details>
<summary>View html validation of home/start page (image of)</summary>

![Home/start](readme-images/jshint.png)
</details>


#### HTML
Passed without errors

<details>
<summary>View html validation of home/start page (image of)</summary>

![Home/start](readme-images/html-validation-index.png)
</details>

#### CSS
Passed without errors

<details>
<summary>View CSS validation (image of)</summary>

![CSS](readme-images/css-validation.png)
</details>

### Performance test - Lighthouse

#### Desktop

<details>
<summary>Result start/home page (image of)</summary>

![Index page - desktop](readme-images/lighthouse-index-desktop.png)
</details>

#### Mobile

<details>
<summary>Result start/home page (image of)</summary>

![Index page - desktop](readme-images/lighthouse-index-mobile.png)
</details>

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
- Vscode (html, css and javascript)
- Photoshop (edit images)
- Figma (wireframe/prototyping)

**Browsers:**
- Firefox
- Chrome
- Safari

**Languages:**
- HTML 5
- CSS 3
- JavaScript

**Web tools:**
- [GitHub](https://github.com) (repository)
- [Favoicon](https://favicon.io/favicon-converter) (generate favicon)
- [Google fonts](https://fonts.google.com/) (font api for loading fonts)
- [Am i responsive](https://ui.dev/amiresponsive) (generate image on different devices)
- [Markup validation Service](https://validator.w3.org) (html code validation)
- [CSS validation service](https://jigsaw.w3.org/css-validator) (css code validation)
- [JSFiddle - Code Playground](https://jsfiddle.net) (advice from mentor)
- [JSHint](https://jshint.com) (javascript code validation)
- [Dillinger](https://dillinger.io) (Readme editor)

## Ideas for future implementation
- Multi-player
- Configuration options for each round like bake in oven, soak in viniger etc.
- Feature for one-ers, two-ers and a more realistic score count to better mimic the game.
- Leader board.

The list can be made as long as the tradition of the game. 

## Credits

### Code inspiration

[What is setTimeout in JavaScript and how to work with it?](https://codedamn.com/news/javascript/what-is-settimeout-in-javascript)<br>
How to set time out and then call computers turn.
- playerTurn()

[How to transform string to lowercase letters.](https://www.w3schools.com/jsref/jsref_tolowercase.asp) <br>
 Needed to transform name of player/computer to update score (id lowercase, name contains uppercase letter) 
- updatePlayerScore(name)
- checkWinScore(name)
- resetPlayerScore(name)

Header (logo/nav) is very loosley based on the CI project "Love Running"

[Correct use of event listener and show/hide elements](https://jsfiddle.net/rcoyaubq/)<br>
I receved support from my mentor Rohit Sharma on how to better handle show/hide elements.
-  buttonVisibilityStates(elementId, hide)

How to properly set up the event listeners
- DOMContentLoaded
- Button Click Events

**Readme guidance**

[README.md - How, What and When?](https://www.youtube.com/watch?v=l1DE7L-4eKQ) 

[Kera Cudmore's readme examples](https://github.com/kera-cudmore/readme-examples) <br>
I copied the deployment section from this example.

**Thanks to my friends and family for testing the game and providing feedback.**

**Special thanks**
Special thanks to my husband Jimi for patience and support with the copywriting and proofreading of all texts both site and readme.<br>
Fellow students in the Swedish channel<br>
And a very Special thank you goes to Mentor Rohit Sharma for excellent support!

**Enjoy playing the Game of Conkers!**
