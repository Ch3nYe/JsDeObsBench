'use strict';
function a0_0x19e6() {
    const _0x39f131 = [
        'split',
        'map',
        'abs',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x19e6 = function () {
        return _0x39f131;
    };
    return a0_0x19e6();
}
const a0_0xa0e95f = a0_0x58ef;
function a0_0x58ef(blDvaK, key) {
    const stringArray = a0_0x19e6();
    a0_0x58ef = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x58ef(blDvaK, key);
}
function main(stdin) {
    const _0x4d831e = a0_0x58ef;
    const input = stdin[_0x4d831e(0x0)]('\x20')[_0x4d831e(0x1)](v => parseInt(v, 0xa));
    const N = input[0x0];
    const L = input[0x1];
    let sum = 0x0;
    let min = Infinity;
    for (let i = L; i < L + N; ++i) {
        sum += i;
        if (Math[_0x4d831e(0x2)](i) < Math['abs'](min))
            min = i;
    }
    console[_0x4d831e(0x3)](sum - min);
}
main(require('fs')[a0_0xa0e95f(0x4)](a0_0xa0e95f(0x5), a0_0xa0e95f(0x6)));