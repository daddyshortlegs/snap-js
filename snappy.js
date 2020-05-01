function makeSnappy(deck, outputter, player1) {

    function play() {
        outputter.display(`$player1 turned card 'AS'`);
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
