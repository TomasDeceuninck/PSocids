'use strict';
require('globals');

const Iteration = require('Iteration');
const Board = require('Board');
// const Report = require('Report');

// require('CR');
// require('Team');

module.exports.loop = function () {
    // console.log('tick ' + Game.time);
    let iteration = Iteration.loadFromMemory();
    console.log(iteration);
    // console.log('Iteration defined: ' + iteration);

    if (iteration.isPlanningStep()){
        console.log('Planning Step');
        let strategy = Board.Meeting();
    } else if (iteration.isEvaluationStep()){
        console.log('Evaluation Step');
        // global.Report = new Report()
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
