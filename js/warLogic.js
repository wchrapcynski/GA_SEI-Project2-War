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
    constructor(numberOfPlayers, deckName, playerArray) {
        this.numberOfPlayers = numberOfPlayers;
        this.deckName = deckName;
        this.playerArray = playerArray
        this.currentPlayer = 1
        this.playerDeckSize = 52 / numberOfPlayers;
        this.instructions();
    }

    instructions() {
        console.log("Welcome to the game of War! Each player will start off with an equel share of the full deck. With two players, that means you each get 26 cards. Each player fips over one card from the top of their deck during each round. The player with the highest card (Aces high) takes all of the cards in play and put it at the bottom of their deck. If there is a tie, you enter the 'War' phase. During a War round, each player will draw 3 cards from their deck and flip over the 4th. The player with the highest of that card gets all of the cards in play. If there is yet another tie, you enter another 'War' phase and repeat the process. A player loses if they run out of cards or if they do not have enough cards to complete a 'War' phase.");
        console.log("Let's start the game! Use the game.flip() a player flip over a card(starting with Player 1).")
    }

    // Flips over a card of the current player. If both players have flipped over a card, there will be a comparison. To make this game for 3+ players, this function would have to expanded upon.
    flip(x = this.currentPlayer, y = this.playerArray) {
        console.log("Player " + x + " flipped over this " + y[x][0].rank + " of " + y[x][0].suit + "!")
        if(x < this.numberOfPlayers) {
            this.currentPlayer += 1;
        } else if (this.currentPlayer === this.numberOfPlayers) {
            if(y[1][0].score > y[2][0].score) {
                console.log("Player 1 has the highest card!")
                y[1].push(y[2][0]);
                y[2].shift();
                this.displayCardCount();
                this.currentPlayer = 1;
            } else if (y[2][0].score > y[1][0].score){
                console.log("Player 2 has the highest card!")
                y[2].push(y[1][0]);
                y[1].shift();
                this.displayCardCount();
                this.currentPlayer = 1;
            } else {
                console.log("Let's get it on!");
                console.log("It's time for War!")
                console.log("Each player is forced to draw three cards face down  and then flip over the fourth!")
                console.log("One, two, three, four!")
                console.log("Player 1 flips over the " + y[1][4) + "!");
                console.log("Player 2 flips over the " + y[2][4) + "!");
                let warCount = 0;
                if(y[1][4 + warCount].score > y[2][4 + warCount].score) {
                    console.log("Player 1 has the highest card!")
                    for (let i = 0; i <= warCount; i ++) {
                        y[1].push(y[2][0]);
                        y[2].shift();
                    }
                    this.displayCardCount();
                    this.currentPlayer = 1;
                } else if (y[2][4 + warCount].score > y[1][4 + warCount].score){
                    console.log("Player 2 has the highest card!")
                    for (let i = 0; i <= warCount; i ++) {
                        y[2].push(y[1][0]);
                        y[1].shift();
                    }
                    this.displayCardCount();
                    this.currentPlayer = 1;
                } else {
                    console.log("The War rages on!");
                }
            }
        }
    }

    displayCardCount(x = this.numberOfPlayers, y = this.playerArray) {
        for(let i = 1; i <= x; i ++) {
            console.log("Player " + i + " has " + y[i].length + " cards.")
        }
    }

}
