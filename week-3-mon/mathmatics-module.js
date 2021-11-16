export class Mathmatics {
    static floor(x, digits) {
        const temp1 = x * 10 ** digits;
        const temp2 = Math.floor(temp1);
        return temp2 / 10 ** digits;
    }
}
