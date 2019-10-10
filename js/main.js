// Create an array of objects with all of the cards
var deck = [
    {
        rank: "ace",
        suit: "hearts",
        cardImage: "images/ace_of_hearts.png",
        flipped: false,
        player: 0,
        points: 14
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king_of_hearts.png",
        flipped: false,
        player: 0,
        points: 13
    },
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen_of_hearts.png",
        flipped: false,
        player: 0,
        points: 12
    },
    {
        rank: "jack",
        suit: "hearts",
        cardImage: "images/jack_of_hearts.png",
        flipped: false,
        player: 0,
        points: 11
    },
    {
        rank: "ten",
        suit: "hearts",
        cardImage: "images/10_of_hearts.png",
        flipped: false,
        player: 0,
        points: 10
    },
    {
        rank: "nine",
        suit: "hearts",
        cardImage: "images/9_of_hearts.png",
        flipped: false,
        player: 0,
        points: 9
    },
    {
        rank: "eight",
        suit: "hearts",
        cardImage: "images/8_of_hearts.png",
        flipped: false,
        player: 0,
        points: 8
    },
    {
        rank: "seven",
        suit: "hearts",
        cardImage: "images/7_of_hearts.png",
        flipped: false,
        player: 0,
        points: 7
    },
    {
        rank: "six",
        suit: "hearts",
        cardImage: "images/6_of_hearts.png",
        flipped: false,
        player: 0,
        points: 6
    },
    {
        rank: "five",
        suit: "hearts",
        cardImage: "images/5_of_hearts.png",
        flipped: false,
        player: 0,
        points: 5
    },
    {
        rank: "four",
        suit: "hearts",
        cardImage: "images/4_of_hearts.png",
        flipped: false,
        player: 0,
        points: 4
    },
    {
        rank: "three",
        suit: "hearts",
        cardImage: "images/3_of_hearts.png",
        flipped: false,
        player: 0,
        points: 3
    },
    {
        rank: "two",
        suit: "hearts",
        cardImage: "images/2_of_hearts.png",
        flipped: false,
        player: 0,
        points: 2
    },
    {
        rank: "ace",
        suit: "clubs",
        cardImage: "images/ace_of_clubs.png",
        flipped: false,
        player: 0,
        points: 14
    },
    {
        rank: "king",
        suit: "clubs",
        cardImage: "images/king_of_clubs.png",
        flipped: false,
        player: 0,
        points: 13
    },
    {
        rank: "queen",
        suit: "clubs",
        cardImage: "images/queen_of_clubs.png",
        flipped: false,
        player: 0,
        points: 12
    },
    {
        rank: "jack",
        suit: "clubs",
        cardImage: "images/jack_of_clubs.png",
        flipped: false,
        player: 0,
        points: 11
    },
    {
        rank: "ten",
        suit: "clubs",
        cardImage: "images/10_of_clubs.png",
        flipped: false,
        player: 0,
        points: 10
    },
    {
        rank: "nine",
        suit: "clubs",
        cardImage: "images/9_of_clubs.png",
        flipped: false,
        player: 0,
        points: 9
    },
    {
        rank: "eight",
        suit: "clubs",
        cardImage: "images/8_of_clubs.png",
        flipped: false,
        player: 0,
        points: 8
    },
    {
        rank: "seven",
        suit: "clubs",
        cardImage: "images/7_of_clubs.png",
        flipped: false,
        player: 0,
        points: 7
    },
    {
        rank: "six",
        suit: "clubs",
        cardImage: "images/6_of_clubs.png",
        flipped: false,
        player: 0,
        points: 6
    },
    {
        rank: "five",
        suit: "clubs",
        cardImage: "images/5_of_clubs.png",
        flipped: false,
        player: 0,
        points: 5
    },
    {
        rank: "four",
        suit: "clubs",
        cardImage: "images/4_of_clubs.png",
        flipped: false,
        player: 0,
        points: 4
    },
    {
        rank: "three",
        suit: "clubs",
        cardImage: "images/3_of_clubs.png",
        flipped: false,
        player: 0,
        points: 3
    },
    {
        rank: "two",
        suit: "clubs",
        cardImage: "images/2_of_clubs.png",
        flipped: false,
        player: 0,
        points: 2
    },
    {
        rank: "ace",
        suit: "diamonds",
        cardImage: "images/ace_of_diamonds.png",
        flipped: false,
        points: 14
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 13
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 12
    },
    {
        rank: "jack",
        suit: "diamonds",
        cardImage: "images/jack_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 11
    },
    {
        rank: "ten",
        suit: "diamonds",
        cardImage: "images/10_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 10
    },
    {
        rank: "nine",
        suit: "diamonds",
        cardImage: "images/9_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 9
    },
    {
        rank: "eight",
        suit: "diamonds",
        cardImage: "images/8_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 8
    },
    {
        rank: "seven",
        suit: "diamonds",
        cardImage: "images/7_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 7
    },
    {
        rank: "six",
        suit: "diamonds",
        cardImage: "images/6_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 6
    },
    {
        rank: "five",
        suit: "diamonds",
        cardImage: "images/5_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 5
    },
    {
        rank: "four",
        suit: "diamonds",
        cardImage: "images/4_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 4
    },
    {
        rank: "three",
        suit: "diamonds",
        cardImage: "images/3_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 3
    },
    {
        rank: "two",
        suit: "diamonds",
        cardImage: "images/2_of_diamonds.png",
        flipped: false,
        player: 0,
        points: 2
    },
    {
        rank: "ace",
        suit: "spades",
        cardImage: "images/ace_of_spades.png",
        flipped: false,
        player: 0,
        points: 14
    },
    {
        rank: "king",
        suit: "spades",
        cardImage: "images/king_of_spades.png",
        flipped: false,
        player: 0,
        points: 13
    },
    {
        rank: "queen",
        suit: "spades",
        cardImage: "images/queen_of_spades.png",
        flipped: false,
        player: 0,
        points: 12
    },
    {
        rank: "jack",
        suit: "spades",
        cardImage: "images/jack_of_spades.png",
        flipped: false,
        player: 0,
        points: 11
    },
    {
        rank: "ten",
        suit: "spades",
        cardImage: "images/10_of_spades.png",
        flipped: false,
        player: 0,
        points: 10
    },
    {
        rank: "nine",
        suit: "spades",
        cardImage: "images/9_of_spades.png",
        flipped: false,
        player: 0,
        points: 9
    },
    {
        rank: "eight",
        suit: "spades",
        cardImage: "images/8_of_spades.png",
        flipped: false,
        player: 0,
        points: 8
    },
    {
        rank: "seven",
        suit: "spades",
        cardImage: "images/7_of_spades.png",
        flipped: false,
        player: 0,
        points: 7
    },
    {
        rank: "six",
        suit: "spades",
        cardImage: "images/6_of_spades.png",
        flipped: false,
        player: 0,
        points: 6
    },
    {
        rank: "five",
        suit: "spades",
        cardImage: "images/5_of_spades.png",
        flipped: false,
        player: 0,
        points: 5
    },
    {
        rank: "four",
        suit: "spades",
        cardImage: "images/4_of_spades.png",
        flipped: false,
        player: 0,
        points: 4
    },
    {
        rank: "three",
        suit: "spades",
        cardImage: "images/3_of_spades.png",
        flipped: false,
        player: 0,
        points: 3
    },
    {
        rank: "two",
        suit: "spades",
        cardImage: "images/2_of_spades.png",
        flipped: false,
        player: 0,
        points: 2
    }
];
var numberOfPlayers = 2;
var inPlay = [];

//reset the game
rest();

// Give instructions on how to play the game

// Each play clicks on the top card of their deck to flip one over. This should also calculate which card is the highest. If cards are equal, the war function will come in. the game ends when one player is out of cards.

//War function where 3 cards are drawn and a 4th is flipped over and the cards are compared. The winner gets all of the cards. If a player does not have enough cards to finish war, the other player wins.

// Players click next to show back of cards for the next round.


// **These are functions and game logic**
// Function to reset the game - Shuffles deck, etc.
function reset() {
    shuffle(deck);

    // This code will be for setting up player deck arrays.
    // for(let i = 1; i <= numberOfPlayers; i++) {
    //      eval(player + i + " = val[i]");
    // }
}

// Call this when a player clicks on a card to flip it over.
function flipCard() {
    // Pull a card from each players deck and place it in an in play array.
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
