const calculate = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};

const recursionCalculate = (n) => {
    if (n === 1 || n === 0) return 1;

    return n * recursionCalculate(n - 1);
};

const filterId = (peoples) => {
    for (let i = 0; i < peoples.length; i++) {
        let name = peoples[i];
        if (name.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi)) {
            peoples.splice(i, 1);
        }
    }

    for (let i = 0; i < peoples.length; i++) {
        let name = peoples[i];
        if (name.match(/[0-9]/g)) {
            peoples[i] = name.replace(/[0-9]/g, "");
        }
    }

    return peoples;
};

const highOrderFilterId = (peoples) => {
    peoples.forEach((name, i) => {
        if (name.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi)) {
            peoples.splice(i, 1);
        }
    });

    peoples.forEach((name, i) => {
        peoples[i] = name.replace(/[0-9]/g, "");
    });
    return peoples;
    //map은 원래 배열은 수정하지 않고 새로운 배열을 반환 함
};

const getAvg = (grades) => {
    let personalAvgs = [];
    let avgMaxGrade = 0;
    let sumMaxGrade = 0;

    grades.forEach((grade) => {
        maxGrade = grade.reduce((prev, cur) => Math.max(prev, cur));
        sumMaxGrade += maxGrade;

        const sumGrade = grade.reduce((prev, cur) => prev + cur);
        personalAvgs.push((sumGrade / grade.length).toFixed(2));
    });
    avgMaxGrade = (sumMaxGrade / grades.length).toFixed(2);

    return `각 학생의 평균점수 : ${personalAvgs}\n 모든 학생의 최고점수의 평균점수 : ${avgMaxGrade}`;
};

const parseNumKey = (data) => {
    const result = [];
    const values = Object.values(data);

    values.forEach((value, i) => {
        const keys = values.map((value) => Object.keys(value));

        keys[i].forEach((k) => {
            if (Number(value[k]) === parseInt(value[k])) {
                result.push(k);
            }
        });
    });

    return result;
};

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

const grades = [
    [88, 76, 77],
    [33, 44, 44],
    [90, 100, 94],
    [30, 44, 98],
];

const data = {
    debug: "on",
    window: {
        title: "Sample Konfabulator Widget",
        name: "main_window",
        width: 500,
        height: 500,
    },
    image: {
        src: "Images/Sun.png",
        name: "sun1",
        hOffset: 250,
        vOffset: 250,
        alignment: "center",
    },
    text: {
        data: "Click Here",
        size: 36,
        style: "bold",
        name: "text1",
        hOffset: 250,
        vOffset: 100,
        alignment: "center",
        onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
    },
};