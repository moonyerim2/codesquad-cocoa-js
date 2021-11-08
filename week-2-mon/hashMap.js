function HashMap(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashMap.prototype.initArray = function (size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(null);
    }

    return arr;
};

HashMap.prototype.hash = function (key) {
    const intKey = Number(key);

    if (isNaN(intKey)) {
        let sumAsciiNum = 0;

        for (let i = 0; i < key.length; i++) {
            sumAsciiNum += key.charCodeAt(i);
        }
        return sumAsciiNum % this.size;
    }

    return intKey % this.size;
};

HashMap.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw "hash table is full";

    let index = this.hash(key);
    //선형 탐사
    while (this.keys[index] !== null) {
        //이미 값이 있다면
        if (index === this.size - 1) index = 0;
        //마지막 인덱스라면
        else index++; //다음 인덱스로
    }

    this.keys[index] = key;
    this.values[index] = value;
    this.limit++;
};

HashMap.prototype.remove = function (key) {
    let index = this.hash(key);

    while (this.keys[index] !== key) {
        if (index === this.size - 1) index = 0;
        else index++;
    }

    this.keys[index] = null;
    this.values[index] = null;
};

HashMap.prototype.containsKey = function (key) {
    return this.keys.includes(key);
};

HashMap.prototype.get = function (key) {
    let index = this.hash(key);

    while (this.keys[index] !== key) {
        if (index === this.size - 1) index = 0;
        else index++;
    }

    return this.values[index];
};

HashMap.prototype.isEmpty = function () {
    for (let i = 0; i < this.size; i++) {
        if (this.keys[i] !== null) return false;
    }

    return true;
};

HashMap.prototype.returnKeys = function () {
    return this.keys;
};

HashMap.prototype.replace = function (key, value) {
    let index = this.hash(key);

    while (this.keys[index] !== key) {
        if (index === this.size - 1) index = 0;
        else index++;
    }

    this.keys[index] = key;
    this.values[index] = value;
};

HashMap.prototype.sizeOf = function () {
    return this.size;
};

HashMap.prototype.clear = function () {
    for (let i = 0; i < this.size; i++) {
        this.keys[i] = null;
        this.values[i] = null;
    }
};

