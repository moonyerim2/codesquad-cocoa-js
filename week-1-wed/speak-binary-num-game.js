const solution = (n, t, m, p) => {
    const binNumArr = Array.from({ length: t * m }, (v, i) => i.toString(n));
    const result = binNumArr.join("").split("");
    const myNumArr = findNumOnMyTurn(result, p);
    return `모든 숫자 : ${result}\np번째 사람이 말하게 될 숫자 : ${myNumArr}`;
};

const findNumOnMyTurn = (result, p) => {
    const myNumArr = [];

    for (let i = 0; i < result.length; i++) {
        if (i % p === 0) myNumArr.push(result[i]);
    }

    return myNumArr;
};
