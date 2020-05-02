const makeDeck = require("./deck").makeDeck;

describe("Deck of cards", () => {
    it("should contain all the standard playing cards", () => {
        let deck = makeDeck();

        expect(deck.takeCard()).toEqual("2C");
        expect(deck.takeCard()).toEqual("3C");
        expect(deck.takeCard()).toEqual("4C");
        expect(deck.takeCard()).toEqual("5C");
        expect(deck.takeCard()).toEqual("6C");
        expect(deck.takeCard()).toEqual("7C");
        expect(deck.takeCard()).toEqual("8C");
        expect(deck.takeCard()).toEqual("9C");
        expect(deck.takeCard()).toEqual("JC");
        expect(deck.takeCard()).toEqual("QC");
        expect(deck.takeCard()).toEqual("KC");
        expect(deck.takeCard()).toEqual("AC");
    });

});