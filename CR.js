class CR {
    constructor() {
    }

    static assignResources(strategy, teams, resources) {
        prioritizedTeams = CR.getPrioritizedTeams(teams)
        console.log('We assign all the resources!')
    }

    static getPrioritizedTeams(strategy, teams) {
        return teams
    }
}
