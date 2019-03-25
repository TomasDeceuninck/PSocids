'use strict';
require('globals');


// require('CR');
// require('Team');

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
    } else if (iteration.isEvaluationStep()) {
        // console.log('Evaluation Step');
        const Report = require('Report');
        let report = new Report;
        console.log(report);
    }

    // if (strategy){
    //     let teams = Team.loadFromMemory()
    //     let resources = Game.creeps
    //     CR.assignResources(strategy,teams,resources)
    // }

    // for(let team in cr.getPrioritizedTeams(teams)){
    //     team.act()
    // }
}