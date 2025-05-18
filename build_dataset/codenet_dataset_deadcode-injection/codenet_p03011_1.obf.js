'use strict';
const a0_0x174256 = a0_0x2156;
function Main(input) {
    const _0x1d7fa3 = a0_0x2156;
    const P = Number(input[_0x1d7fa3(0x0)]('\x0a')[0x0]['split']('\x20')[0x0]);
    const Q = Number(input[_0x1d7fa3(0x0)]('\x0a')[0x0][_0x1d7fa3(0x0)]('\x20')[0x1]);
    const R = Number(input[_0x1d7fa3(0x0)]('\x0a')[0x0][_0x1d7fa3(0x0)]('\x20')[0x2]);
    const max = Math[_0x1d7fa3(0x1)](P, Q, R);
    console[_0x1d7fa3(0x2)](P + Q + R - max);
}
function a0_0x2156(VIzdBD, key) {
    const stringArray = a0_0x411e();
    a0_0x2156 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2156(VIzdBD, key);
}
Main(require('fs')[a0_0x174256(0x3)](a0_0x174256(0x4), 'utf8')[a0_0x174256(0x5)]());
function a0_0x411e() {
    const _0x23ddb9 = [
        'split',
        'max',
        'log',
        'readFileSync',
        '/dev/stdin',
        'trim'
    ];
    a0_0x411e = function () {
        return _0x23ddb9;
    };
    return a0_0x411e();
}