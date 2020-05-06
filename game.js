const makeSnappy = require("./src/snappy").makeSnappy;
const makeDeck = require("./src/deck").makeDeck;
const makeOutputter = require("./src/outputter").makeOutputter;
const makePlayer = require("./src/player").makePlayer;

let deck = makeDeck();
let snappy = makeSnappy(deck,
    makeOutputter(),
    makePlayer("Bob", deck),
    makePlayer("Alice", deck));
snappy.play();
