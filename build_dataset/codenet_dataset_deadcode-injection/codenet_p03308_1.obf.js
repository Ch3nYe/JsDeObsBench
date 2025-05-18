'use strict';
const a0_0x1876d7 = a0_0x2094;
function Main(input) {
    const _0x593d32 = a0_0x2094;
    const params = input[_0x593d32(0x0)]('\x0a');
    const n = Number(params[0x0]);
    let max = 0x0;
    let min = Math['pow'](0xa, 0xa);
    params[0x1][_0x593d32(0x0)]('\x20')['forEach'](val => {
        const _0x406dca = a0_0x2094;
        max = Math['max'](max, Number(val));
        min = Math[_0x406dca(0x1)](min, Number(val));
    });
    console[_0x593d32(0x2)](max - min);
}
function a0_0x2094(lsFNtO, key) {
    const stringArray = a0_0x4524();
    a0_0x2094 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2094(lsFNtO, key);
}
function a0_0x4524() {
    const _0x1fff64 = [
        'split',
        'min',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4524 = function () {
        return _0x1fff64;
    };
    return a0_0x4524();
}
Main(require('fs')['readFileSync'](a0_0x1876d7(0x3), a0_0x1876d7(0x4)));