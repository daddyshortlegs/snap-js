function makeDeck() {
    const cards = [];

    makeSuit("H");
    makeSuit("D");
    makeSuit("S");
    makeSuit("C");

    function makeSuit(suit) {
        ["A", "K", "Q", "J"].forEach(value => cards.push(value + suit));

        for (let i = 10; i > 1; i--) {
            cards.push(`${i}${suit}`);
        }
    }

    function takeCard() {
        return cards.pop();
    }

    return {
        takeCard
    }
}

module.exports = { makeDeck };