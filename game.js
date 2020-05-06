const makeSnappy = require("./snappy").makeSnappy;
const makeDeck = require("./deck").makeDeck;
const makeOutputter = require("./outputter").makeOutputter;
const makePlayer = require("./player").makePlayer;

let deck = makeDeck();
let snappy = makeSnappy(deck,
    makeOutputter(),
    makePlayer("Bob", deck),
    makePlayer("Alice", deck));
snappy.play();
