class Strategy {

    name = 'We know what to do!'
    kpis = []

    constructor(name, kpis) {
        if (name) {
            this.name = name
        }
        if (kpis) {
            this.kpis = kpis
        }
        // console.log('Created Strategy instance: ' + this);
    }

    toString() {
        return ('"' + this.name + '" based on ' + this.kpis.length + ' KPIs')
    }
}

module.exports = Strategy;
