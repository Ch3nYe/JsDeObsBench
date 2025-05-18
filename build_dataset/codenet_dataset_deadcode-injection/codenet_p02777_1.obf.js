function a0_0x3e87() {
    const _0x42e7dd = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3e87 = function () {
        return _0x42e7dd;
    };
    return a0_0x3e87();
}
function a0_0x543c(YBUZwM, key) {
    const stringArray = a0_0x3e87();
    a0_0x543c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x543c(YBUZwM, key);
}
const a0_0x8c2fb0 = a0_0x543c;
function Main(impu) {
    const _0x435afb = a0_0x543c;
    let imput = impu[_0x435afb(0x0)]('\x0a');
    let name = imput[0x0][_0x435afb(0x0)]('\x20');
    let count = imput[0x1][_0x435afb(0x0)]('\x20');
    if (name[0x0] === imput[0x2])
        count[0x0]--;
    else
        count[0x1]--;
    console[_0x435afb(0x1)](count[0x0] + '\x20' + count[0x1]);
}
Main(require('fs')[a0_0x8c2fb0(0x2)](a0_0x8c2fb0(0x3), a0_0x8c2fb0(0x4)));