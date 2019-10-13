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
        this.gameOver = false;
        this.instructions();
    }

    instructions() {
        console.log("Welcome to the game of War! Each player will start off with an equel share of the full deck. With two players, that means you each get 26 cards. Each player fips over one card from the top of their deck during each round. The player with the highest card (Aces high) takes all of the cards in play and put it at the bottom of their deck. If there is a tie, you enter the 'War' phase. During a War round, each player will draw 3 cards from their deck and flip over the 4th. The player with the highest of that card gets all of the cards in play. If there is yet another tie, you enter another 'War' phase and repeat the process. A player loses if they run out of cards or if they do not have enough cards to complete a 'War' phase.");
        console.log("Let's start the game! Use the game.flip() a player flip over a card(starting with Player 1).")
    }

    // Flips over a card of the current player. If both players have flipped over a card, there will be a comparison. To make this game for 3+ players, this function would have to expanded upon. This is really the heart of the game.
    flip(x = this.currentPlayer, y = this.playerArray) {
        if(this.gameOver === true) {
            console.log("The game is over! Refresh the page to start a new game!")
        } else {
            console.log("Player " + x + " flipped over this " + y[x][0].rank + " of " + y[x][0].suit + "!")
            if(x < this.numberOfPlayers) {
                this.currentPlayer += 1;
            } else if (this.currentPlayer === this.numberOfPlayers) {
                // Player one wins the round
                if(y[1][0].score > y[2][0].score) {
                    console.log("Player 1 has the highest card!")
                    this.playerOneRoundWin(y);
                    this.displayCardCount();
                    this.currentPlayer = 1;
                    this.isGameOver();
                // Plalyer two wins the round
                } else if (y[2][0].score > y[1][0].score){
                    console.log("Player 2 has the highest card!")
                    this.playerTwoRoundWin(y)
                    this.displayCardCount();
                    this.currentPlayer = 1;
                    this.isGameOver();
                // Runs through a War scenario
                } else {
                    console.log("Let's get it on!");
                    console.log("It's time for War!");
                    console.log("Each player is forced to draw three cards face down  and then flip over the fourth");
                    this.enoughForWar();
                    // War count is here in case a tie happens in War itself. This will let the process loop properly and moving around the correct amount of cards.
                    let warCount = 0;
                    let warIsOver = false;
                    while (this.gameOver === false && warIsOver === false ) {
                        console.log("One, two, three, four!");
                        console.log("Player 1 flips over the " + y[1][4 + warCount].rank + " of " + y[1][4 + warCount].suit + "!");
                        console.log("Player 2 flips over the " + y[2][4 + warCount].rank + " of " + y[2][4 + warCount].suit + "!");
                        if(y[1][4 + warCount].score > y[2][4 + warCount].score) {
                            // Player one wins the round
                            console.log("Player 1 has the highest card!")
                            for (let i = 0; i <= 4 + warCount; i ++) {
                                this.playerOneRoundWin(y);
                            }
                            this.displayCardCount();
                            this.currentPlayer = 1;
                            warIsOver = true;
                            this.isGameOver();
                        } else if (y[2][4 + warCount].score > y[1][4 + warCount].score){
                            // Runs through a War scenario
                            console.log("Player 2 has the highest card!")
                            for (let i = 0; i <= 4 + warCount; i ++) {
                                this.playerTwoRoundWin(y)
                            }
                            this.displayCardCount();
                            this.currentPlayer = 1;
                            warIsOver = true;
                            this.isGameOver();
                        } else {
                            // If a tie again, War loops
                            console.log("The War rages on!");
                            warCount += 4;
                            this.enoughForWar();
                        }
                    }
                }
            }
        }
    }

    // Displays how many cards each player has left
    displayCardCount(x = this.numberOfPlayers, y = this.playerArray) {
        for(let i = 1; i <= x; i ++) {
            console.log("Player " + i + " has " + y[i].length + " cards.")
        }
    }

    // If a player does not have enough cards for War, the game ends
    enoughForWar(x = this.numberOfPlayers, y = this.playerArray) {
        for(let i = 1; i <= x; i++) {
            if(y[i].length < 4) {
                console.log("Player " + i + " can not continue and loses the game! The game is over!");
                this.gameOver = true;
            }
        }
    }

    // Checks to see if a player has run out of cards
    isGameOver(x = this.numberOfPlayers, y = this.playerArray) {
        if(this.playerArray[1].length === 0) {
            console.log("Player 2 Wins!")
            this.gameOver = true;
        } else if(this.playerArray[2].length === 0) {
            console.log("Player 1 Wins!")
            this.gameOver = true;
        }
    }

    // Moving of cards if player one wins
    playerOneRoundWin(y) {
        y[1].push(y[2][0]);
        y[2].shift();
        y[1].push(y[1][0]);
        y[1].shift();
    }
    // Moving of cards if player two wins
    playerTwoRoundWin(y) {
        y[2].push(y[1][0]);
        y[1].shift();
        y[2].push(y[2][0]);
        y[2].shift();
    }
}
