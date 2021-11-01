function getCircleArea(r, ...n) {
    const PI = 3.14;

    if (arguments[1] === undefined) {
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

function getArea(figure) {
    switch (figure) {
        case "circle":
            return getCircleArea(arguments[1], arguments[2]);
        case "rect":
            return getRectArea(arguments[1], arguments[2]);
        case "trapezoid":
            return getTrapezoidArea(arguments[1], arguments[2], arguments[3]);
        default:
            break;
    }
    console.log(arguments);
}
