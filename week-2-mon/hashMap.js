function HashMap(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashMap.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full';

    const hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != null) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
}

HashMap.prototype.put = function(key, value) {

}
//HashMap.prototype.remove = function() {...}