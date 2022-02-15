'use strict';
require('globals');


require('CR');
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
        CR.allignResourcePlan(strategy);
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