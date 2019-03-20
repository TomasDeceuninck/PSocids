var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for (var s in Game.spawns) {
        if (!Game.spawns[s].spawning && Game.spawns[s].energy >= 150) {
            var p = Object.keys(Game.creeps).length
            if (p < 5) {
                console.log('making new creep')
                console.log(s)
                Game.spawns[s].spawnCreep([WORK, CARRY, MOVE], 'Worker' + (p + 1), {
                    memory: { role: 'harvester' }
                })
            }
        }
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
