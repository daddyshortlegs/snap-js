function makeDeck() {
    const cards = [];

    ["H", "D", "S", "C"].forEach(suit => makeSuit(suit));

    function makeSuit(suit) {
        ["A", "K", "Q", "J"].forEach(value => cards.push(value + suit));
        for (let i = 10; i > 1; i--) {
            cards.push(`${i}${suit}`);
        }
    }

    function takeCard() {
        return cards.pop();
    }

    function shuffle() {
        let newDeck = [];
        while (newDeck.length < 52) {
            let pos = getRandomInt(52);
            let card = cards[pos];
            if (card != null) {
                cards[pos] = null;
                newDeck.push(card);
            }
        }

        return newDeck;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    return {
        takeCard,
        shuffle,
        cards
    }
}

module.exports = { makeDeck };