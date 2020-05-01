function makeSnappy(deck, outputter, player1, player2) {

    function changePlayer(player) {
        return player === player1 ? player2 : player1;
    }

    function play() {
        let card, previousCard = "";
        let player = player1;

        while (card = deck.takeCard()) {
            outputter.display(`${player.name} turned card '${card}'`);
            if (doesCardMatch(previousCard, card)) {

                if (player1.reactionTime() < player2.reactionTime()) {
                    outputter.display("SNAP! Derek wins!");
                } else {
                    outputter.display("SNAP! Desmond wins!");
                }
            }

            previousCard = card;
            player = changePlayer(player);
        }
        outputter.display('Draw. Game Over :-(');
    }

    function doesCardMatch(previousCard, card) {
        return previousCard[0] === card[0];
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
