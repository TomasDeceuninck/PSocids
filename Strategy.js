class Strategy {
    constructor(name,kpis){
        if(!name){
            this.name = 'We know what to do!'
        } else {
            this.name = name
        }
        if(!kpis) {
            this.kpis = []
        }
        else {
            this.kpis = kpis
        }
        console.log('Created Strategy: ' + this)
    }

    toString(){
        return ( '"' + this.name + '" based on ' + kpis.length + ' KPIs')
    }
}

module.exports = Strategy;
