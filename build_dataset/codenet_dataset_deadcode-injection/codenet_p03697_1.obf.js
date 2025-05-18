'use strict';
const a0_0x1a191e = a0_0x34ff;
function a0_0x34ff(yeyHdn, key) {
    const stringArray = a0_0x42f2();
    a0_0x34ff = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x34ff(yeyHdn, key);
}
function Main(INPUT) {
    const _0x51a6c5 = a0_0x34ff;
    const input = INPUT[_0x51a6c5(0x0)]('\x0a')[0x0]['split']('\x20');
    const A = parseInt(input[0x0], 0xa);
    const B = parseInt(input[0x1], 0xa);
    console[_0x51a6c5(0x1)](A + B >= 0xa ? _0x51a6c5(0x2) : A + B);
}
Main(require('fs')['readFileSync'](a0_0x1a191e(0x3), a0_0x1a191e(0x4)));
function a0_0x42f2() {
    const _0x3a7377 = [
        'split',
        'log',
        'error',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x42f2 = function () {
        return _0x3a7377;
    };
    return a0_0x42f2();
}