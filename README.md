# Memory Game

[Memory Game](https://ahmedaboujeeb.github.io/milestone2/) is a very cool and simple game that tests your memory, its is also known as Match Up. Memory Game is a card game that consists of 16 cards and 8 colors, each 2 cards have a unique color and your job is to remember where they are and match them. Cards will be shuffled ever new game, so it's a new challenge vereytime.

## UX

Link to [wireframes](https://github.com/ahmedaboujeeb/milestone2/blob/master/assets/wireframes/Milestone%202%20WF.pdf) designed with Balsamiq.

### User story

#### As a new user

- Have fun playing the game.
- Restart the game.
- Navigate through the website.
- Learn more about the game.
- Learn the rules of the game.
- Find top players on the map.
- Follow Memory Game on social media. 

#### As a returning user

- Beat your old recored.
- Get better at the game.
- Become one of the top players.

## Features

### Existing Features

 - Navbar: allows you to navigate around the webpage and move to the section you want. It also collapses on small devices e.g mobile and tuen into a toggle that you can click on to expand.
 - Game
   - Start button: click the button to start the timer and be able to click on the cards, and play the game.
   - Reset button: click to restart the timer, hide and shuffle all cards.
   - Clickable cards that show color when clicked. 
- Google maps: 
   - Allows you to find where the top players are located on a map.
   - Have a cluster button.
   - Zoom in and zoom out buttons.
   - Navigate and move the maps around.

### Future Features

 - Score counter: to keep score of your game. 


## Technologies Used

 - HTML, CSS
   - Used for the main website structure and styling.
 - JavaScript
   - The game was designed using JavaScript.
 - Visual Studio Code
   - This whole project is done using VS Code.
 - Google Maps
   - The map (JavaScript code) was taken from https://developers.google.com/maps/documentation/javascript/marker-clustering and connected to Google maps using JavaScript API.
 - Balsamiq
   - Wireframes were created using Balasmaiq.
 - Google fonts
   - The fonts were taken from fonts.google.com
 - Font awesome
   - Social media icons were taken from fontawesome.com 
 - GitHub
   - Used to host the whole project. 



## Testing

### Game 

 - Click on cards before click start button is not possilbe, cards won't show color.
 - Reset button doesn't work before click start button.
 - Click start button starts timer, cards are clickable and show color when clicked.
 - Start button is disabled if timer is running or if game is over. 
 - Click on card shows card color, click on another card shows card color, if:
    - Card colors match, both cards will show color until restart.
    - Card colors match, can click on another card immidiatly.
    - Card colors don't match, both cards will hide color. 
    - Card colors don't match, can't click on another card for 0.5 second. 
 - If all cards matched and game is complete:
    - message says "WELL DONE!".
    - Timer stops.
    - Cards unclickable.
    - Start button disabled. 
    - Click reset button to start a new game. 
 - If time is up and game is not complete:
    - Message shows "TRY AGAIN!".
    - Cards unclickable. 
    - Start button disabled.
    - Click on reset button to start a new game. 


### Maps 

 - Zoom in, Zoom out.
 - Satellite veiw.
 - Click on Google logo to open Google maps in a new tab. 
 - Full screen.
 - Cluster buttons (all 3).
 - Navigate and move the map around.


### Responsivity 

The website was tested using Google Chrome developer tools, and is responsive on the following devices:

 - Moto G4
 - Galaxy S5
 - Pixel 2
 - Pixel 2 XL
 - iPhone 5/SE
 - iPhone 6/7/8
 - iPhone 6/7/8 Plus
 - iPhone X
 - iPad
 - iPad Pro
 - Surface Dou

The game breaks on Galaxy Fold. 

The webiste was tested on the following browsers:
 - Google Chrome
 - Safari

### Navbar 

 - Click on Play takes you to the game section.
 - Click on Information takes you to the information section.
 - Click on Top Players takes to Google Maps find top players section.
 - Navbar collaps on mobile screens and some devices with limited width. 
 - Navbar exapnds when clicked on toggler. 


### Footer Icons

 - Hover over the Facebook icon changes icon color. 
 - Hover over the Twitter icon changes icon color.
 - Hover over the Instagram icon changes icon color.
 - Hover over the LinkedIn icon changes icon color.
 - Click on the Facebook icon, link opens in a new tab. 
 - Click on the Twitter icon, link opens in a new tab.
 - Click on the Instagram icon, link opens in a new tab.
 - Click on the LinkedIn icon, link opens in a new tab.

### Programming Language Validation

 - HTML passed the w3schools vaildation vaildator.w3.org without any erros. 
 - CSS passed the w3schools vaildation jigsaw.w3.org without any erros.
 - JavaScript passed the jshint.com validation without any errors. 

### Bugs

  - Fixed:
    - Game breaks on mobile devices.
    - Start button can be clicked again while timer is running, which starts a new timer over the running one. 
    - The game is functional without clicking the start button.
    - The game is still finctional after clicking the reset button.

  - To be fixed:
    - When the reset button clicked while timer is running, the "TRY AGAIN!" message doesn't disapear. 


## Deployment

### Deployed Vesrion

The project is hosted on GitHub in a repository called [milestone2](https://github.com/ahmedaboujeeb/milestone2), and was developed using VS Code where the code was uploaded to GitHub on the master branch using clear commit messages. Here are the command messages used:

 - Git add
 - Git commit -m ""
 - Git push

The live website is hosted on GitGub Pages, the deployement process is as follows:

  - Login to GitHub.
  - Go to repository ahmedaboujeeb/milestone2.
  - Click on settings.
  - Scroll down to GitHub Pages - source - select branch - save.
  - The site is now published at https://ahmedaboujeeb.github.io/milestone2/

### Development Version

The development vesrion was developed on VS Code, and stored locally on a hard drive. The development version is identical to the live version, and uploaded using clear commits.


## Credits

 ### Acknowledgment 

  - The game was inspired by and a part of the code was learned from Web Dev Junkie. 
  - Google Maps were taken from developres.google.com

 ### Media

  - Hero image was taken from pexels.com
  - Social media icons were taken from fontawesome.com
  - Color coordination taken from coolors.co
  - Font taken from fonts.google.com