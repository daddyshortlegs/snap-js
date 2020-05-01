function makeSnappy(deck, outputter, player1, player2) {

    function play() {
        let card1 = deck.takeCard();
        outputter.display(`${player1} turned card '${card1}'`);
        let card2 = deck.takeCard();
        outputter.display(`${player2} turned card '${card2}'`);
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
