const Strategy = require('Strategy')

class Board {
    constructor() {
        this.strategy = new Strategy()
        console.log('Created Board with Strategy: ' + this.strategy)
    }

    Meeting() {
        console.log('Board Meeting started')
        return this.strategy
    }
}

module.exports = Board;
