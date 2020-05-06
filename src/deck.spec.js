const makeDeck = require("./deck").makeDeck;

describe("Deck of cards", () => {
    let deck = makeDeck();

    it("should contain all the standard playing cards", () => {
        verifySuit("C");
        verifySuit("S");
        verifySuit("D");
        verifySuit("H");
    });

    function verifySuit(suit) {
        verifyCardIs("2", suit);
        verifyCardIs("3", suit);
        verifyCardIs("4", suit);
        verifyCardIs("5", suit);
        verifyCardIs("6", suit);
        verifyCardIs("7", suit);
        verifyCardIs("8", suit);
        verifyCardIs("9", suit);
        verifyCardIs("10", suit);
        verifyCardIs("J", suit);
        verifyCardIs("Q", suit);
        verifyCardIs("K", suit);
        verifyCardIs("A", suit);
    }

    function verifyCardIs(card, suit) {
        expect(deck.takeCard()).toEqual(card + suit);
    }

    it("should shuffle the deck", () => {
        let unshuffledDeck = makeDeck();
        let shuffledDeck = unshuffledDeck.shuffle();

        verifyShuffledCardsPresent(shuffledDeck, "C");
        verifyShuffledCardsPresent(shuffledDeck, "S");
        verifyShuffledCardsPresent(shuffledDeck, "H");
        verifyShuffledCardsPresent(shuffledDeck, "D");
    });

});

function verifyShuffledCardsPresent(shuffledDeck, suit) {
    [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"].forEach(i => {
        let result = shuffledDeck.includes(`${i}${suit}`);
        expect(result).toEqual(true);
    });
}
