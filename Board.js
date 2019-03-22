const Strategy = require('Strategy')

class Board {
    constructor() {
        console.log('Created Board Instance')
    }

    static Meeting() {
        console.log('Board Meeting started')
        return new Strategy()
    }
}

module.exports = Board;
