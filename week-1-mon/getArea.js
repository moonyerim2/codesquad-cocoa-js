function getCircleArea(r) {
    const PI = 3.14;

    if (arguments[1] === undefined) {
        return r * r * PI;
    } else {
        const n = arguments[1];
        const start = arguments[0];
        let sum = 0;

        for (let r = start; r <= n; r++) {
            sum += r * r * PI;
        }
        return sum;
    }
}
