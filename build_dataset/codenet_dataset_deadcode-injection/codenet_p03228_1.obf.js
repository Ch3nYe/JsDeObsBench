'use strict';
const a0_0x2159cc = a0_0x1c6d;
function a0_0x1c6d(ABiIHO, key) {
    const stringArray = a0_0x3033();
    a0_0x1c6d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1c6d(ABiIHO, key);
}
function Main(input) {
    const _0x11aac5 = a0_0x1c6d;
    const tmp = input[_0x11aac5(0x0)]('\x20');
    let A = parseInt(tmp[0x0], 0xa);
    let B = parseInt(tmp[0x1], 0xa);
    const K = tmp[0x2];
    for (let i = 0x0; i < K; i++) {
        if (i % 0x2 == 0x0) {
            if (A % 0x2 == 0x1) {
                A--;
            }
            B += A / 0x2;
            A /= 0x2;
        } else {
            if (B % 0x2 == 0x1) {
                B--;
            }
            A += B / 0x2;
            B /= 0x2;
        }
    }
    console[_0x11aac5(0x1)](A, B);
}
Main(require('fs')[a0_0x2159cc(0x2)](a0_0x2159cc(0x3), a0_0x2159cc(0x4)));
function a0_0x3033() {
    const _0x46f5ea = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3033 = function () {
        return _0x46f5ea;
    };
    return a0_0x3033();
}