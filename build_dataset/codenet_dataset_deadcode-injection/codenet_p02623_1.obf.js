const a0_0x16df57 = a0_0x2574;
function a0_0x4605() {
    const _0x1942a6 = [
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4605 = function () {
        return _0x1942a6;
    };
    return a0_0x4605();
}
function compareFunc(a, b) {
    return a - b;
}
function main(input) {
    const _0x1e6d6c = a0_0x2574;
    let args = input[_0x1e6d6c(0x0)](/\n/);
    let books = [
        ...args[0x1][_0x1e6d6c(0x0)](/\s/),
        ...args[0x2][_0x1e6d6c(0x0)](/\s/)
    ];
    let time = args[0x0][_0x1e6d6c(0x0)](/\s/)[0x2];
    let result = 0x0;
    books['sort'](compareFunc);
    for (let i = 0x0; i < books['length']; i++) {
        if (time >= books[i] * 0x1) {
            time -= books[i];
            result++;
        }
    }
    console['log'](result);
}
function a0_0x2574(zXTAFS, key) {
    const stringArray = a0_0x4605();
    a0_0x2574 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2574(zXTAFS, key);
}
main(require('fs')[a0_0x16df57(0x1)](a0_0x16df57(0x2), a0_0x16df57(0x3)));