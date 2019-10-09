// Create an array of objects with all of the cards
var deck = [
    {
        rank: "ace",
        suit: "hearts",
        cardImage: "images/ace_of_hearts.png",
        flipped: false,
        points: 14
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king_of_hearts.png",
        flipped: false,
        points: 13
    },
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen_of_hearts.png",
        flipped: false,
        points: 12
    },
    {
        rank: "jack",
        suit: "hearts",
        cardImage: "images/jack_of_hearts.png",
        flipped: false,
        points: 11
    },
    {
        rank: "ten",
        suit: "hearts",
        cardImage: "images/10_of_hearts.png",
        flipped: false,
        points: 10
    },
    {
        rank: "nine",
        suit: "hearts",
        cardImage: "images/9_of_hearts.png",
        flipped: false,
        points: 9
    },
    {
        rank: "eight",
        suit: "hearts",
        cardImage: "images/8_of_hearts.png",
        flipped: false,
        points: 8
    },
    {
        rank: "seven",
        suit: "hearts",
        cardImage: "images/7_of_hearts.png",
        flipped: false,
        points: 7
    },
    {
        rank: "six",
        suit: "hearts",
        cardImage: "images/6_of_hearts.png",
        flipped: false,
        points: 6
    },
    {
        rank: "five",
        suit: "hearts",
        cardImage: "images/5_of_hearts.png",
        flipped: false,
        points: 5
    },
    {
        rank: "four",
        suit: "hearts",
        cardImage: "images/4_of_hearts.png",
        flipped: false,
        points: 4
    },
    {
        rank: "three",
        suit: "hearts",
        cardImage: "images/3_of_hearts.png",
        flipped: false,
        points: 3
    },
    {
        rank: "two",
        suit: "hearts",
        cardImage: "images/2_of_hearts.png",
        flipped: false,
        points: 2
    },
    {
        rank: "one",
        suit: "hearts",
        cardImage: "images/1_of_hearts.png",
        flipped: false,
        points: 1
    },
];

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
