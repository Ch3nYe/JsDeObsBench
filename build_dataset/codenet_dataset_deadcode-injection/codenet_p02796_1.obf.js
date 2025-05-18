'use strict';
function a0_0x5d0f() {
    const _0xd9c337 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'map',
        'split',
        'sort',
        'length',
        'log'
    ];
    a0_0x5d0f = function () {
        return _0xd9c337;
    };
    return a0_0x5d0f();
}
const a0_0x276ac2 = a0_0x1fa4;
let a = require('fs')[a0_0x276ac2(0x0)](a0_0x276ac2(0x1), a0_0x276ac2(0x2))['trim']()['split']('\x0a');
function a0_0x1fa4(uWjrAQ, key) {
    const stringArray = a0_0x5d0f();
    a0_0x1fa4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1fa4(uWjrAQ, key);
}
a[a0_0x276ac2(0x3)]();
let d = a[a0_0x276ac2(0x4)](e => {
    const _0x1b0ac6 = a0_0x1fa4;
    let r = e[_0x1b0ac6(0x5)]('\x20')[_0x1b0ac6(0x4)](Number);
    return [
        r[0x0] - r[0x1],
        r[0x1] + r[0x0]
    ];
})[a0_0x276ac2(0x6)]((a, b) => {
    return a[0x1] - b[0x1];
});
let s = 0x0;
let P = Number['MIN_SAFE_INTEGER'];
for (let i = 0x0; i < d[a0_0x276ac2(0x7)]; i++) {
    if (P <= d[i][0x0]) {
        s++;
        P = d[i][0x1];
    }
}
console[a0_0x276ac2(0x8)](s);