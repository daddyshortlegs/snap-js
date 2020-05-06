function makeOutputter() {

    function display(text) {
        console.log(text);
    }

    return {
        display
    }
}

module.exports = { makeOutputter };