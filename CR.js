class CR {
    constructor() {
    }

    recruite(profile) {
        console.log('We hire all the resources!')
        global.hq.spawnCreep(profile, "My First Creep");
    }

    static allignResourcePlan(strategy){
        console.log('Alliging resource plan to strategy: ' + strategy)
        recruite([WORK,CARRY,MOVE,MOVE])
    }

    // static assignResources(strategy, teams, resources) {
    //     prioritizedTeams = CR.getPrioritizedTeams(strategy, teams)
    //     console.log('We assign all the resources!')
    // }

    // static getPrioritizedTeams(strategy, teams) {
    //     return teams
    // }
}
