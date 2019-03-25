const indicators = require('indicators');
const KPI = require('KPI');
const Strategy = require('Strategy');

class Board {
    constructor() {
        // console.log('Created Board Instance');
    }

    static Meeting() {
        console.log('Board Meeting started');
        return new Strategy('We think we know what to do',[
            new KPI('energyInceaseSinceStartOfIteration',50)
        ]);
    }
}

module.exports = Board;
