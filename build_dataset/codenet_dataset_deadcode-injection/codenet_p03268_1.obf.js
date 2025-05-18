'use strict';
const a0_0x48c373 = a0_0x3b7f;
function a0_0x4109() {
    const _0x219598 = [
        'split',
        'log',
        'floor',
        '/dev/stdin'
    ];
    a0_0x4109 = function () {
        return _0x219598;
    };
    return a0_0x4109();
}
function a0_0x3b7f(nWzvxo, key) {
    const stringArray = a0_0x4109();
    a0_0x3b7f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b7f(nWzvxo, key);
}
function Main(input) {
    const _0x597148 = a0_0x3b7f;
    input = input[_0x597148(0x0)]('\x0a');
    const line0 = input[0x0]['split']('\x20');
    let N = parseInt(line0[0x0]);
    let K = parseInt(line0[0x1]);
    if (K % 0x2 === 0x0) {
        console[_0x597148(0x1)](Math['floor'](N / K) ** 0x3 + Math[_0x597148(0x2)]((N + K / 0x2) / K) ** 0x3);
    } else {
        console['log'](Math[_0x597148(0x2)](N / K) ** 0x3);
    }
}
Main(require('fs')['readFileSync'](a0_0x48c373(0x3), 'utf8'));