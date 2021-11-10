//스택 만들기
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
    return this.array.slice();
};

Stack.prototype.push = function (value) {
    this.array.push(value);
};

Stack.prototype.pop = function () {
    return this.array.pop();

};

Stack.prototype.isEmpty = function () {
    return this.array.length === 0;
};

const stack = new Stack();

const App = () => {
    const data = "[1,2,[3,4,[5,[6]]]]"
    let depth = 0;
    let count = 0;
    
    const splitData = data.split("");

    //스택의 깊이를 분석하는 함수
    const checkDepth = (data) => {
        for (token of data) {
            if (token === "[") {
                stack.push(token);
                depth++;
            }
            else if (token === "]") {
                stack.pop();
            } else if (token !== ',') {
                count++;
            }
        }

        if (!stack.isEmpty()) throw "닫는 괄호가 일치하지 않습니다";

        return `배열의 중첩된 깊이 수준은 ${depth}이며, 총 ${count}개의 원소가 포함되어 있습니다.`
    };
};

App();
