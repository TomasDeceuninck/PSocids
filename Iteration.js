require('global_buildings');

class Iteration {
    
    information = {}

    constructor(startTime, duration, information) {
        this.duration = duration
        if(information){
            this.information = information
        }
        if ((Game.time - startTime) >= duration) {
            this.startTime = Game.time
            this.baseLineInformation()
            this.saveToMemory()
        } else {
            this.startTime = startTime
        }
        // console.log('New Iteration instance created: ' + this)
    }

    isPlanningStep() {
        // is first day of iteration?
        return (this.currentTick() === 0);
    }

    isEvaluationStep() {
        // is last day of iteration?
        return (this.currentTick() === (this.duration - 1));
    }

    currentTick() {
        return (Game.time - this.startTime)
    }

    toString() {
        return ( 'Tick ' + this.currentTick() + ' of ' + this.duration + ' - Iteration, started at ' + this.startTime);
    }

    baseLineInformation(){
        this.information.baseLine_HQ_Energy = global.hq.energy,
        this.information.baseLine_HQ_EnergyCapacity = global.hq.energyCapacity  
    }

    saveToMemory(){
        Memory.Iteration = {
            startTime: this.startTime,
            duration: this.duration,
            information: this.information
        }
    }

    static loadFromMemory(){
        // console.log('Loading from memory');
        if(!Memory.Iteration || !Memory.Iteration.startTime || !Memory.Iteration.duration){
            // console.log('Not found in memory');
            let iteration = new Iteration(Game.time,global.DEFAULT_ITERATION_DURATION);
            iteration.saveToMemory();
            return iteration;
        } else {
            // console.log('Found in memory: ' + Memory.Iteration.startTime + ' ' + Memory.Iteration.duration);
            return (new Iteration(Memory.Iteration.startTime,Memory.Iteration.duration,Iteration.information));
        }
    }
};

module.exports = Iteration;
