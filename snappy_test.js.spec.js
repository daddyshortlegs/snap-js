const makeSnappy = require("./snappy").makeSnappy;
const makeDeck = require("./deck").makeDeck;
const makeOutputter = require("./outputter").makeOutputter;

describe("Snappy", () => {
    let deck;
    let snappy;
    let outputter;

    beforeEach(() => {
        deck = makeDeck();
        deck.takeCard = jest.fn();
        outputter = makeOutputter();
        outputter.display = jest.fn();

        snappy = makeSnappy(deck, outputter, "Desmond", "Derek");
    });

    it("desmond should turn a card", () => {
        deck.takeCard.mockReturnValueOnce("AS");
        snappy.play();
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card 'AS'");
        expect(outputter.display).toHaveBeenCalledWith("Draw. Game Over :-(");
    });

    it("desmond should turn a different card", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H");
        snappy.play();
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card 'AS'");
        expect(outputter.display).toHaveBeenCalledWith("Derek turned card '8H'");
        expect(outputter.display).toHaveBeenCalledWith("Draw. Game Over :-(");
    });

    it("should turn a 3rd different card", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("2D");
        snappy.play();
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card 'AS'");
        expect(outputter.display).toHaveBeenCalledWith("Derek turned card '8H'");
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card '2D'");
        expect(outputter.display).toHaveBeenCalledWith("Draw. Game Over :-(");
    });

    it("should turn a 4th different card", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("2D")
            .mockReturnValueOnce("7C");
        snappy.play();
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card 'AS'");
        expect(outputter.display).toHaveBeenCalledWith("Derek turned card '8H'");
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card '2D'");
        expect(outputter.display).toHaveBeenCalledWith("Derek turned card '7C'");
        expect(outputter.display).toHaveBeenCalledWith("Draw. Game Over :-(");
    });

});