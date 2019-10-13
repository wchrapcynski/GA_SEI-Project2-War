class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
        this.shuffle(this.cards);
    }

    // This creates the full deck of 52 cards.
    createDeck() {
        const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
        const ranks = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace' ]

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                const card = new Card(suits[i], ranks[j], j+2);
                this.cards.push(card);
            }
        }
    }

    // Fisher-Yates Shuffle
    shuffle(array) {
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

    reset() {
        this.shuffle(this.cards)
    }
}

class Players {
    constructor(numberOfPlayers, deckName) {
        this.deckName = deckName;
        this.setPlayers(numberOfPlayers)
    }

    // Splits full deck into a deck for each player based on setting for number of players.
    setPlayers(numberOfPlayers) {
        let numberOfCards = Math.floor(52 / numberOfPlayers);
        let minCards = 0; let maxCards = numberOfCards

        for(let i = 1; i <= numberOfPlayers; i++) {
            this[i] = this.deckName.cards.slice(minCards, maxCards)
            minCards += numberOfCards; maxCards += numberOfCards;
        }
    }
}

class Game {
    constructor(numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
        this.instructions();
    }

    instructions() {
        console.log("Welcome to the game of War! Each player will start off with an equel share of the full deck. With two players, that means you each get 26 cards. Each player fips over one card from the top of their deck during each round. The player with the highest card (Aces high) takes all of the cards in play and put it at the bottom of their deck. If there is a tie, you enter the 'War' phase. During a War round, each player will draw 3 cards from their deck and flip over the 4th. The player with the highest of that card gets all of the cards in play. If there is yet another tie, you enter another 'War' phase and repeat the process. A player loses if they run out of cards or if they do not have enough cards to complete a 'War' phase.");
        console.log("Let's start the game! Use the game.flip() command to have each player flip over a card.")
    }

    flip(x = this.numberOfPlayers) {
        for(let i = 1; i <= x; i++) {
            console.log("Player " + i + " flips over a card!");
        }
    }
}
