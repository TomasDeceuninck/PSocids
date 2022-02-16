class Team {
    constructor(name) {
        this.name = name
    }

    act() {
        console.log('${this.name} does the things!')
    }

    static loadFromMemory() {
        try {
            for (let team in Memory.Teams) {
                var TeamClass = require(team.type);
                var teamInstance = new TaskClass;
                return teamInstance;
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    static saveToMemory(teams) {
        for (let team in teams) {
            Memory.Teams.add({
                id: team.id,
                type: team.__proto__
            })
        }
    }
}

module.exports = Team;
