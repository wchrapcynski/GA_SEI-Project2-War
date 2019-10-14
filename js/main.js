// This sets up the game and pulls everything from the necessary classes
// The game logic is all in warLogic.js
let deck = new Deck();
// Some parts of the logic will work with 3+ players but most of the game is hard coded for just 2
let numberOfPlayers = 2;
// Creates player decks
let player = new Players(numberOfPlayers, deck);
// Starts the game itself
let game = new Game(numberOfPlayers, deck, player);
// This will autoplay the game. Uncomment to use.
// game.autoPlay();
