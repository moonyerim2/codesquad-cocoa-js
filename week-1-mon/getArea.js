const App = () => {
    const figureLog = [];
    const resultLog = [];

    function getCircleArea(r, n = 0) {
        const PI = 3.14;

        if (n === 0) {
            return r * r * PI;
        } else {
            const startNum = r;
            let sum = 0;

            for (let i = startNum; i <= n; i++) {
                sum += i * i * PI;
            }
            return sum;
        }
    }

    function getRectArea(w, h) {
        return w * h;
    }

    function getTrapezoidArea(upper, lower, h) {
        return ((upper + lower) * h) / 2;
    }

    function printExecutionSequence() {
        let result = "";

        for (let i = 0; i < figureLog.length; i++) {
            result += `${figureLog[i]} : ${resultLog[i]} \n`;
        }

        return result;
    }

    function getArea(figure) {
        let result = 0;
        figureLog.push(figure);

        switch (figure) {
            case "circle":
                result = getCircleArea(arguments[1], arguments[2]);
                resultLog.push(result);
                break;
            case "rect":
                result = getRectArea(arguments[1], arguments[2]);
                resultLog.push(result);
                break;
            case "trapezoid":
                result = getTrapezoidArea(arguments[1], arguments[2], arguments[3]);
                resultLog.push(result);
                break;
            default:
                break;
        }
    }
};

App();
