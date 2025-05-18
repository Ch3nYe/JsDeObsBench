'use strict';
const a0_0x25448f = a0_0x3d21;
function a0_0x3d21(DGuQYd, key) {
    const stringArray = a0_0x3d9a();
    a0_0x3d21 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3d21(DGuQYd, key);
}
let input = require('fs')[a0_0x25448f(0x0)]('/dev/stdin', a0_0x25448f(0x1));
let N = input[a0_0x25448f(0x2)]('\x20')[0x0] * 0x1;
let A = input[a0_0x25448f(0x2)]('\x20')[0x1] * 0x1;
let B = input[a0_0x25448f(0x2)]('\x20')[0x2] * 0x1;
let dist = Math[a0_0x25448f(0x3)](A - B) % 0x2;
let ans = dist == 0x0 ? a0_0x25448f(0x4) : a0_0x25448f(0x5);
function a0_0x3d9a() {
    const _0x21e48d = [
        'readFileSync',
        'utf8',
        'split',
        'abs',
        'Alice',
        'Borys',
        'log'
    ];
    a0_0x3d9a = function () {
        return _0x21e48d;
    };
    return a0_0x3d9a();
}
console[a0_0x25448f(0x6)](ans);