function makeSnappy(deck, outputter, player1, player2) {

    function play() {
        deck.shuffle();
        let card, previousCard = "";
        let player = player1;

        while (card = deck.takeCard()) {
            outputter.display(`${player.name} turned card '${card}'`);
            if (doesCardMatch(previousCard, card)) {
                let winner = decideWinner();
                outputter.display(`SNAP! ${winner.name} wins!`);
                return;
            }

            previousCard = card;
            player = changePlayer(player);
        }
        outputter.display('Draw. Game Over :-(');
    }

    function changePlayer(player) {
        return player === player1 ? player2 : player1;
    }

    function decideWinner() {
        return player1.reactionTime() < player2.reactionTime() ? player1 : player2;
    }

    function doesCardMatch(previousCard, card) {
        return previousCard[0] === card[0];
    }

    return {
        play
    }
}

module.exports = { makeSnappy };
