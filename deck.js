function makeDeck() {
    const cards = [];

    cards.push("AC");
    cards.push("KC");
    cards.push("QC");
    cards.push("JC");
    cards.push("9C");
    cards.push("8C");
    cards.push("7C");
    cards.push("6C");
    cards.push("5C");
    cards.push("4C");
    cards.push("3C");
    cards.push("2C");

    function takeCard() {
        return cards.pop();
    }

    return {
        takeCard
    }
}

module.exports = { makeDeck };