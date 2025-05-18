'use strict';
function a0_0x2565() {
    const _0x15297d = [
        'trim',
        'split',
        'ABC',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2565 = function () {
        return _0x15297d;
    };
    return a0_0x2565();
}
const a0_0x2155e1 = a0_0x1a75;
function a0_0x1a75(TiLZdh, key) {
    const stringArray = a0_0x2565();
    a0_0x1a75 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1a75(TiLZdh, key);
}
const Main = input => {
    const _0x45dc2e = a0_0x1a75;
    let xs = input[_0x45dc2e(0x0)]()['split']('\x0a');
    let N = Number(xs[0x0]);
    let S = xs[0x1][_0x45dc2e(0x1)]('');
    let ans = 0x0;
    for (let i = 0x0; i <= N - 0x3; i++) {
        if (S[i] + S[i + 0x1] + S[i + 0x2] == _0x45dc2e(0x2)) {
            ans++;
        }
    }
    console[_0x45dc2e(0x3)](ans);
};
Main(require('fs')[a0_0x2155e1(0x4)](a0_0x2155e1(0x5), a0_0x2155e1(0x6)));