function makeSnappy(deck, outputter, player1, player2) {

    function play() {
        let card;
        let player = player1;

        card = deck.takeCard();
        outputter.display(`${player} turned card '${card}'`);
        player = player === player1 ? player2: player1;

        card = deck.takeCard();
        outputter.display(`${player} turned card '${card}'`);
        player = player === player1 ? player2: player1;

        card = deck.takeCard();
        outputter.display(`${player} turned card '${card}'`);
        player = player === player1 ? player2: player1;

    }

    return {
        play
    }
}

module.exports = { makeSnappy };
