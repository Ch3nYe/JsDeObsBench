'use strict';
const a0_0x1a5927 = a0_0x5013;
function a0_0x5013(HpZYpN, key) {
    const stringArray = a0_0x10e6();
    a0_0x5013 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5013(HpZYpN, key);
}
function Main(input) {
    const _0x3ea3dc = a0_0x5013;
    input = input[_0x3ea3dc(0x0)]('\x0a');
    const arr = input[0x0][_0x3ea3dc(0x0)]('\x20');
    if (arr[0x0] % 0x3 === 0x0 || arr[0x1] % 0x3 === 0x0 || (arr[0x0] + arr[0x1]) % 0x3 === 0x0) {
        console[_0x3ea3dc(0x1)](_0x3ea3dc(0x2));
    } else {
        console[_0x3ea3dc(0x1)](_0x3ea3dc(0x3));
    }
}
function a0_0x10e6() {
    const _0x52cd66 = [
        'split',
        'log',
        'Possible',
        'Impossible',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x10e6 = function () {
        return _0x52cd66;
    };
    return a0_0x10e6();
}
Main(require('fs')['readFileSync'](a0_0x1a5927(0x4), a0_0x1a5927(0x5)));