const Mathmatics = require("./mathmatics-module");
const ZTable = require("./z-table");

module.exports = class Statistics {
    constructor(dataset) {
        this.dataset = dataset;
        this.length = dataset.length;
    }

    getMean() {
        const dataSum = this.dataset.reduce((prev, cur) => prev + cur);
        return dataSum / this.length;
    }

    getDeviation() {
        const mean = this.getMean();
        return this.dataset.map((data) => data - mean);
    }

    getVariance() {
        const deviations = this.getDeviation();
        const squares = deviations.map((deviation) => deviation ** 2);
        const sumSquares = squares.reduce((prev, cur) => prev + cur);
        return sumSquares / this.length;
    }

    getStandardDeviation() {
        const variance = this.getVariance();
        return Math.sqrt(variance);
    }

    getNormalizedData(data) {
        const mean = this.getMean();
        let standardDeviation = this.getStandardDeviation();
        return Number(((data - mean) / standardDeviation).toFixed(2));
    }

    getProbability(x) {
        const zTable = ZTable();
        const z = this.getNormalizedData(x);

        const zAbs = Math.abs(z);
        const rowName = Mathmatics.floor(zAbs, 1);
        const columnName = Number((zAbs - rowName).toFixed(2));

        let row = 0;
        let column = 0;

        const rows = Object.keys(zTable);
        for (let i in rows) {
            if (Number(rows[i]) === rowName) row = rows[i];
        }

        const columns = zTable.z;
        for (let j in columns) {
            if (columns[j] === columnName) column = j;
        }

        if (Math.sign(z) === -1) return 1 - zTable[row][column];

        return zTable[row][column];
    }

    getProbabilityBetweenRange(x, y) {
        const result = (this.getProbability(y) - this.getProbability(x)) * 100;
        return Mathmatics.floor(result, 2);
    }
};
