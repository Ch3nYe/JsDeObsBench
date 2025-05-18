'use strict';
const a0_0x219210 = a0_0x4cbf;
function a0_0x4cbf(avBUqb, key) {
    const stringArray = a0_0x3cd8();
    a0_0x4cbf = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4cbf(avBUqb, key);
}
function a0_0x3cd8() {
    const _0x5d40d2 = [
        'split',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3cd8 = function () {
        return _0x5d40d2;
    };
    return a0_0x3cd8();
}
function Main(INPUT) {
    const _0x1101df = a0_0x4cbf;
    const N = INPUT[_0x1101df(0x0)]('\x0a')[0x0];
    if (N == 0x7 || N == 0x5 || N == 0x3) {
        console[_0x1101df(0x1)]('YES');
    } else {
        console[_0x1101df(0x1)]('NO');
    }
}
Main(require('fs')[a0_0x219210(0x2)]('/dev/stdin', a0_0x219210(0x3)));