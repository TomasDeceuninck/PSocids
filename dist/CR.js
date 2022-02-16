class CR {
    constructor() {
    }

    static recruite(profile) {
        console.log('We hire all the resources!')
        global.hq.spawnCreep(profile, "My First Creep");
    }

    // static allignResourcePlan(strategy){
    //     console.log('Alliging resource plan to strategy: ' + strategy)
    //     this.recruite([WORK,CARRY,MOVE,MOVE])
    // }

    // static assignResources(strategy, teams, resources) {
    //     prioritizedTeams = CR.getPrioritizedTeams(strategy, teams)
    //     console.log('We assign all the resources!')
    // }

    // static getPrioritizedTeams(strategy, teams) {
    //     return teams
    // }
}
