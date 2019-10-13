let deck = new Deck();
let numberOfPlayers = 2;
let player = new Players(numberOfPlayers, deck);
let game = new Game(numberOfPlayers);

// Give instructions on how to play the game

// Each play clicks on the top card of their deck to flip one over. This should also calculate which card is the highest. If cards are equal, the war function will come in. the game ends when one player is out of cards.

//War function where 3 cards are drawn and a 4th is flipped over and the cards are compared. The winner gets all of the cards. If a player does not have enough cards to finish war, the other player wins.

// Players click next to show back of cards for the next round.

// Call this when a player clicks on a card to flip it over.
function flipCard() {
    // Pull a card from each players deck and place it in an in play array.
}
