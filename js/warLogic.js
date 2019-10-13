class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.createDeck()
        this.shuffle(this.cards)
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
