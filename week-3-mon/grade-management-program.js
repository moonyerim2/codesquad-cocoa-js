import { Statistics } from "./statistics-module.js";

const App = () => {
    const dataset = [89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25, 67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01];

    const grades = new Statistics(dataset);
    console.log("grades", grades);

    const mean = grades.getMean();
    console.log("mean", mean);

    const standardDeviation = grades.getStandardDeviation();
    console.log("standardDeviation", standardDeviation);

    const probability = grades.getProbabilityBetweenRange(70, 80);
    console.log("probability", probability);
};

App();
