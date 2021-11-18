const Statistics = require("./statistics-module");

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

class GradeManager {
    constructor(dataSet) {
        this.dataSet = {};
    }

    inputSubject(subject) {
        this.dataSet[subject] = [];
    }

    inputScore(subject, scoreArr) {
        this.dataSet[subject] = scoreArr;
    }
}

const App = () => {
    const grades = new GradeManager();

    const inputToArr = (input) => {
        const inputArr = input.split(",");
        return inputArr.map((el) => Number(el));
    };

    const userInputSubject = () => {
        return new Promise((resolve) => {
            rl.question("과목을 입력해 주세요\n", (subject) => {
                grades.inputSubject(subject);
            });
            resolve();
        });
    };

    const userInputGrade = () => {
        return new Promise((resolve) => {
            rl.question("성적을 입력해 주세요\n", (scores) => {
                const scoreArr = inputToArr(scores);
                grades.inputScore(subject, scoreArr);
            });
            resolve();
        });
    };

    //userInputSubject().then(function() {return userInputGrade()});

    const userInputOtherSubject = () => {
        rl.question("다른 과목을 입력하시겠습니까?", (answer) => {
            if (answer === "네") inputGrade();
            else if (answer === "아니오") rl.close();
        });
    };
};

App();
// const App = () => {
//     const dataset = [89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25, 67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01];

//     const grades = new Statistics(dataset);
//     console.log("grades", grades);

//     const mean = grades.getMean();
//     console.log("mean", mean);

//     const standardDeviation = grades.getStandardDeviation();
//     console.log("standardDeviation", standardDeviation);

//     const probability = grades.getProbabilityBetweenRange(70, 80);
//     console.log("probability", probability);
// };

// App();
