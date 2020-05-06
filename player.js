function makePlayer(name, deck) {

    function takeCard() {

    }

    function reactionTime(lower = 100, upper = 1000) {
        let min = Math.ceil(lower);
        let max = Math.floor(upper + 1);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return {
        takeCard,
        name,
        reactionTime
    };
}

module.exports = { makePlayer };