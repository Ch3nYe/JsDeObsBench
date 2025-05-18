'use strict';
const a0_0x15528c = a0_0x250a;
function a0_0xe8f2() {
    const _0x32c3e9 = [
        'split',
        'slice',
        'map',
        'sort',
        'push',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xe8f2 = function () {
        return _0x32c3e9;
    };
    return a0_0xe8f2();
}
function a0_0x250a(KrISzR, key) {
    const stringArray = a0_0xe8f2();
    a0_0x250a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x250a(KrISzR, key);
}
function main(arg) {
    const _0x2a25d9 = a0_0x250a;
    const inputs = arg[_0x2a25d9(0x0)]('\x0a');
    const N = parseInt(inputs[0x0][_0x2a25d9(0x0)]('\x20')[0x0]);
    const K = parseInt(inputs[0x0][_0x2a25d9(0x0)]('\x20')[0x1]);
    const list = inputs[_0x2a25d9(0x1)](0x1, N + 0x1)[_0x2a25d9(0x2)](x => parseInt(x))[_0x2a25d9(0x3)]((a, b) => {
        return a - b;
    });
    let i, sa = [];
    for (i = 0x0; i < N - K + 0x1; ++i)
        sa[_0x2a25d9(0x4)](list[i + K - 0x1] - list[i]);
    console[_0x2a25d9(0x5)](Math['min'](...sa));
}
main(require('fs')[a0_0x15528c(0x6)](a0_0x15528c(0x7), a0_0x15528c(0x8)));