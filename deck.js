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

    return {
        takeCard
    }
}

module.exports = { makeDeck };