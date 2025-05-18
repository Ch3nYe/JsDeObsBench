'use strict';
const a0_0x3ab41c = a0_0x5bd9;
function a0_0x5bd9(ghvDyg, key) {
    const stringArray = a0_0x199c();
    a0_0x5bd9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5bd9(ghvDyg, key);
}
function main(input) {
    const _0x4b1272 = a0_0x5bd9;
    const args = input['split']('\x0a');
    const N = parseInt(args[0x0]);
    const A = parseInt(args[0x1]);
    const B = parseInt(args[0x2]);
    const C = parseInt(args[0x3]);
    const D = parseInt(args[0x4]);
    const E = parseInt(args[0x5]);
    const station = [
        A,
        B,
        C,
        D,
        E
    ];
    let max_traf = Math[_0x4b1272(0x0)](...station);
    console[_0x4b1272(0x1)](Math[_0x4b1272(0x2)](N / max_traf) + 0x4);
}
main(require('fs')['readFileSync'](a0_0x3ab41c(0x3), a0_0x3ab41c(0x4)));
function a0_0x199c() {
    const _0x5bfa31 = [
        'min',
        'log',
        'ceil',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x199c = function () {
        return _0x5bfa31;
    };
    return a0_0x199c();
}