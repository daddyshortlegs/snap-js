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
        verifyCardIs("J", suit);
        verifyCardIs("Q", suit);
        verifyCardIs("K", suit);
        verifyCardIs("A", suit);
    }

    function verifyCardIs(card, suit) {
        expect(deck.takeCard()).toEqual(card + suit);
    }

});