const array1 = ["a", "b", "c"];

//array1.forEach(element => console.log(element));

function forEach(arr, fn) {
    //배열을 돌면서 모든 요소를 print()하라

    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }

    return;
}

const print = (element) => console.log(element);
forEach(array1, print);
