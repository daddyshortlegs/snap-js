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
        deck.shuffle = jest.fn();
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
        expect(deck.shuffle).toHaveBeenCalled();
        expect(outputter.display.mock.calls).toEqual([
            ["Desmond turned card 'AS'"],
            ["Draw. Game Over :-("]
        ]);
    });

    it("desmond should turn a different card", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H");
        snappy.play();
        expect(outputter.display.mock.calls).toEqual([
            ["Desmond turned card 'AS'"],
            ["Derek turned card '8H'"],
            ["Draw. Game Over :-("]
        ]);
    });

    it("should turn a 3rd different card", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("2D");
        snappy.play();

        expect(outputter.display.mock.calls).toEqual([
            ["Desmond turned card 'AS'"],
            ["Derek turned card '8H'"],
            ["Desmond turned card '2D'"],
            ["Draw. Game Over :-("]
        ]);
    });

    it("should turn a 4th different card", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("2D")
            .mockReturnValueOnce("7C");
        snappy.play();
        expect(outputter.display.mock.calls).toEqual([
            ["Desmond turned card 'AS'"],
            ["Derek turned card '8H'"],
            ["Desmond turned card '2D'"],
            ["Derek turned card '7C'"],
            ["Draw. Game Over :-("]
        ]);
    });

    it("Desmond should win as he's quicker", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("8C");
        player1.reactionTime.mockReturnValue(10);
        player2.reactionTime.mockReturnValue(20);

        snappy.play();

        expect(outputter.display.mock.calls).toEqual([
            ["Desmond turned card 'AS'"],
            ["Derek turned card '8H'"],
            ["Desmond turned card '8C'"],
            ["SNAP! Desmond wins!"]
        ]);
    });

    it("Derek should win as he's quicker", () => {
        deck.takeCard.mockReturnValueOnce("AS")
            .mockReturnValueOnce("8H")
            .mockReturnValueOnce("8C");
        player1.reactionTime.mockReturnValue(20);
        player2.reactionTime.mockReturnValue(10);
        snappy.play();

        expect(outputter.display.mock.calls).toEqual([
            ["Desmond turned card 'AS'"],
            ["Derek turned card '8H'"],
            ["Desmond turned card '8C'"],
            ["SNAP! Derek wins!"]
        ]);
    });

});