const Indicator = require('indicators');
const Strategy = require('Strategy');

class Board {
    constructor() {
        console.log('Created Board Instance')
    }

    static Meeting() {
        console.log('Board Meeting started')
        console.log(Indicator.testIndicator)
        return new Strategy()
    }
}

module.exports = Board;
