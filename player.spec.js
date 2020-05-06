const player = require("./player");
const makeDeck = require("./deck").makeDeck;

describe("Player", () => {
    let deck = makeDeck();

    it("should get a random reaction time", () => {
        let alice = player.makePlayer("Alice", deck);

        let times = [];

        for (let i = 0; i < 100; i++) {
            let time = alice.reactionTime(1, 3);
            times.push(time);
        }

        hasNumberBeenPicked(times, 1);
        hasNumberBeenPicked(times, 2);
        hasNumberBeenPicked(times, 3);
    });
});

function hasNumberBeenPicked(times, number) {
    let value = times.find(i => i === number);

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(3);
}
