'use strict';
require('globals');


require('Team');

module.exports.loop = function () {
    const Iteration = require('Iteration');
    let iteration = Iteration.loadFromMemory();
    console.log(iteration);
    // console.log('Iteration defined: ' + iteration);

    require('global_information');

    if (iteration.isPlanningStep()) {
        // console.log('Planning Step');
        const Board = require('Board');
        let strategy = Board.Meeting();
        const CR = require('CR');
        console.log('We hire all the resources!')
        global.hq.spawnCreep([WORK,CARRY,MOVE,MOVE], "My First Creep");
    } else if (iteration.isEvaluationStep()) {
        // console.log('Evaluation Step');
        const Report = require('Report');
        let report = new Report;
        console.log(report);
    } else if (strategy){
        let teams = Team.loadFromMemory()
        for (let team in teams) {
            team.act()
        }
    }

    // for(let team in cr.getPrioritizedTeams(teams)){
    //     team.act()
    // }
}