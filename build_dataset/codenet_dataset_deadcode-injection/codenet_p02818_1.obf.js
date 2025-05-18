'use strict';
const a0_0x2be728 = a0_0x4081;
function a0_0x4bc8() {
    const _0x18f704 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4bc8 = function () {
        return _0x18f704;
    };
    return a0_0x4bc8();
}
function Main(inputs) {
    const _0x4b00d7 = a0_0x4081;
    const input = inputs[_0x4b00d7(0x0)]('\x0a');
    const a = Number(input[0x0]['split']('\x20')[0x0]);
    const b = Number(input[0x0]['split']('\x20')[0x1]);
    const k = Number(input[0x0][_0x4b00d7(0x0)]('\x20')[0x2]);
    console[_0x4b00d7(0x1)](a > k ? a - k : 0x0, a + b > k ? a + b - k : 0x0);
}
function a0_0x4081(EHsoKf, key) {
    const stringArray = a0_0x4bc8();
    a0_0x4081 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4081(EHsoKf, key);
}
Main(require('fs')[a0_0x2be728(0x2)](a0_0x2be728(0x3), a0_0x2be728(0x4)));