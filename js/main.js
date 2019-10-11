// Create an array of objects with all of the cards
let deck = new Deck();
let numberOfPlayers = 3;

// Adds player key pair to objects
for(i = 0; i < deck.cards.length; i++) {
    deck.cards[i].player = 0;
}

//reset the game
reset();

// Give instructions on how to play the game

// Each play clicks on the top card of their deck to flip one over. This should also calculate which card is the highest. If cards are equal, the war function will come in. the game ends when one player is out of cards.

//War function where 3 cards are drawn and a 4th is flipped over and the cards are compared. The winner gets all of the cards. If a player does not have enough cards to finish war, the other player wins.

// Players click next to show back of cards for the next round.


// **These are functions and game logic**
// Function to reset the game - Shuffles deck, etc.
function reset() {
    shuffle(deck.cards);
    setPlayers()
}

// Call this when a player clicks on a card to flip it over.
function flipCard() {
    // Pull a card from each players deck and place it in an in play array.
}

function setPlayers() {
    let numberOfCards = Math.floor(52 / numberOfPlayers);
    let minCards = 0; let maxCards = numberOfCards

    for(i = 1; i <= numberOfPlayers; i++) {
        for(j = minCards; j < maxCards; j++) {
            deck.cards[j].player = i;
        }
        minCards += numberOfCards; maxCards += numberOfCards;
    }
}

// Fisher-Yates Shuffle
function shuffle(array) {
    var counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
