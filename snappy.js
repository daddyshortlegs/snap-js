function makeSnappy(deck, outputter, player1, player2) {

    function play() {
        outputter.display(`${player1} turned card 'AS'`);
        outputter.display(`${player2} turned card '9C'`);
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
