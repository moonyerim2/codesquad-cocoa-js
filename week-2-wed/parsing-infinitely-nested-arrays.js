//스택 만들기
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

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

const run = () => {
    //const data = "[1,2,[3,4,[5,[6]]";
    const data = "[1,2,[3,4,[5,[6]]]]";
    //const data = "[1,[2,3],[4,5],[6,7]]";

    const checkDepth = (data) => {
        const splitData = data.split("");
        let depth = 0;
        let maxDepth = 0;
        let count = 0;

        for (token of splitData) {
            if (token === "[") {
                stack.push(token);
                depth++;
                if (maxDepth < depth) maxDepth = depth;
            } else if (token === "]") {
                if (stack.isEmpty()) throw "닫는 괄호가 일치하지 않습니다";
                stack.pop();
                depth--;
            } else if (token === ",") {
                count++;
            }
        }

        if (!stack.isEmpty()) throw "닫는 괄호가 일치하지 않습니다";

        return `배열의 중첩된 깊이 수준은 ${maxDepth}이며, 총 ${count}개의 원소가 포함되어 있습니다.`;
    };

    const toJsonObj = (node, child) => {
        this.obj = new Object();
        //맨 처음 루트노드 생성
        if (node === undefined) {
            this.obj.type = "root";
            this.obj.child = [];
            return this.obj;
        }

        //현재 노드가 배열이라면
        if (Array.isArray(node)) {
            this.obj.type = "array";
            if (child === undefined) {
                this.obj.child = [];
            } else this.obj.child = child;
        } else {
            //배열이 아니라면
            this.obj.type = typeof node;
            this.obj.value = node;
            this.obj.child = [];
        }

        return this.obj;
    };

    const getNodes = (prevArr, array) => {
        const curArr = prevArr;

        for (i in array) {
            console.log("-------------------------");
            console.log("prevArr", prevArr);
            console.log("array[i]", array[i]);

            const currentNode = toJsonObj(array[i]);
            console.log("currentNode", currentNode);

            curArr.push(currentNode);
            console.log("curArr", curArr);

            if (Array.isArray(array[i])) {
                getNodes(curArr, array[i]);
            }
        }
        return curArr;
    };

    const makeJsonformat = (data) => {
        const dataArr = JSON.parse(data);
        const resultJson = toJsonObj();
        //console.log("resultJson\n", resultJson);

        const nodes = [toJsonObj([])];
        getNodes(nodes, dataArr);
        //console.log("nodes\n", nodes);

        let restNodes = nodes;
        let i = nodes.length - 1;

        //뒤에서부터 돌면서
        while (restNodes.length !== 1) {
            let currentNode = nodes[i];

            //타입이 array인걸 만난다면
            if (currentNode.type === "array") {
                //그 array전까지의 인덱스들을 slice해서

                //console.log(i);
                const childNodes = restNodes.slice(i + 1);
                //console.log("childNodes", childNodes);

                //그 array.child에 푸시
                currentNode.child.push(childNodes);
                //console.log("currentNode", JSON.stringify(currentNode));

                //slice당한 요소들은 nodes에서 제거해주기
                restNodes = nodes.slice(0, i + 1);
                //console.log("restNodes\n", restNodes);
            }
            i--;
        }

        resultJson.child = restNodes;

        console.log(JSON.stringify(resultJson, null, 4));
    };

    console.log(makeJsonformat(data));
};

run();
