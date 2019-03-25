const indicators = require('indicators');

class Report {
    constructor(){
        this.conclusion = ('Energy gained since start of the iteration: ' + indicators.energyInceaseSinceStartOfIteration);
        // console.log(this.conclusion);
    }

    toString(){
        return this.conclusion;
    }
}

module.exports = Report;