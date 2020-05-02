function makeDeck() {
    const cards = [];

    makeSuit("H");
    makeSuit("D");
    makeSuit("S");
    makeSuit("C");

    function makeSuit(suit) {
        cards.push("A" + suit);
        cards.push("K" + suit);
        cards.push("Q" + suit);

        cards.push("J" + suit);
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