function makeSnappy(deck, outputter) {

    function play() {
        outputter.display("Player 1 turned card 'AS'");
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
