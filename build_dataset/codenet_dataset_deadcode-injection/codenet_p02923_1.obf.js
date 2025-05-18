'use strict';
function a0_0x522b(cmVEUt, key) {
    const stringArray = a0_0x43d2();
    a0_0x522b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x522b(cmVEUt, key);
}
const a0_0x3a6102 = a0_0x522b;
function a0_0x43d2() {
    const _0x3063bd = [
        'trim',
        'split',
        'max',
        'log',
        '/dev/stdin'
    ];
    a0_0x43d2 = function () {
        return _0x3063bd;
    };
    return a0_0x43d2();
}
function Main(input) {
    const _0x27df88 = a0_0x522b;
    input = input[_0x27df88(0x0)]()[_0x27df88(0x1)]('\x0a');
    const N = Number(input[0x0]);
    const H = input[0x1][_0x27df88(0x0)]()['split']('\x20')['map'](Number);
    let ret = 0x0;
    let move = 0x0;
    for (let i = 0x0; i < N; i++) {
        if (H[i] >= H[i + 0x1]) {
            move += 0x1;
        } else {
            ret = Math[_0x27df88(0x2)](ret, move);
            move = 0x0;
        }
    }
    console[_0x27df88(0x3)](ret);
}
Main(require('fs')['readFileSync'](a0_0x3a6102(0x4), 'utf8'));