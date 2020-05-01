function makeSnappy(deck, outputter, player1, player2) {

    function changePlayer(player) {
        return player === player1 ? player2 : player1;
    }

    function play() {
        let card;
        let player = player1;

        while (card = deck.takeCard()) {
            outputter.display(`${player} turned card '${card}'`);
            player = changePlayer(player);
        }
        outputter.display('Draw. Game Over :-(');
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
