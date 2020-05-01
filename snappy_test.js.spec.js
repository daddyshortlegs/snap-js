const makeSnappy = require("./snappy").makeSnappy;
const makeDeck = require("./deck").makeDeck;
const makeOutputter = require("./outputter").makeOutputter;
const makePlayer = require("./player").makePlayer;

describe("Snappy", () => {
    let deck;
    let snappy;
    let outputter;
    let player1;
    let player2;

    beforeEach(() => {
        deck = makeDeck();
        deck.takeCard = jest.fn();
        outputter = makeOutputter();
        outputter.display = jest.fn();
        player1 = makePlayer("Desmond");
        player1.reactionTime = jest.fn();
        player2 = makePlayer("Derek");
        player2.reactionTime = jest.fn();

        snappy = makeSnappy(deck, outputter, player1, player2);
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

    it("Desmond should win as he's quicker", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("8C");
        snappy.play();
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card 'AS'");
        expect(outputter.display).toHaveBeenCalledWith("Derek turned card '8H'");
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card '8C'");
        expect(outputter.display).toHaveBeenCalledWith("SNAP! Desmond wins!");
    });

    it("Derek should win as he's quicker", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("8C");
        player1.reactionTime.mockReturnValue(10);
        player2.reactionTime.mockReturnValue(20);
        snappy.play();
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card 'AS'");
        expect(outputter.display).toHaveBeenCalledWith("Derek turned card '8H'");
        expect(outputter.display).toHaveBeenCalledWith("Desmond turned card '8C'");
        expect(outputter.display).toHaveBeenCalledWith("SNAP! Derek wins!");
    });

});