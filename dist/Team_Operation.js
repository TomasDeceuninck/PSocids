var Team = require('Team');

class Team_Operation extends Team {
    constructor(name) {
        super('Operation-' + name);
    }
}

module.exports = Team_Operation;
