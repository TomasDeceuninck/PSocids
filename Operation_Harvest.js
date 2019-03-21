var Team_Operation = require('Team_Operation');

class Operation_Harvest extends Team_Operation {
    constructor() {
        super('Harvest');
        // Settings
        this.moveColor = 'blue';
    }
}

module.exports = Operation_Harvest;
