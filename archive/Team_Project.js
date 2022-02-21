var Team = require('Team');

class Team_Project extends Team {
    constructor(name) {
        super('Project-' + name);
    }
}

module.exports = Team_Project;
