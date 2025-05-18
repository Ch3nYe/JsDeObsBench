'use strict';
const a0_0x47b4c2 = a0_0x1edb;
function a0_0x1edb(sMNvta, key) {
    const stringArray = a0_0x8e29();
    a0_0x1edb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1edb(sMNvta, key);
}
function a0_0x8e29() {
    const _0x2f9edb = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'toString',
        'shift',
        'sort'
    ];
    a0_0x8e29 = function () {
        return _0x2f9edb;
    };
    return a0_0x8e29();
}
var input = require('fs')[a0_0x47b4c2(0x0)](a0_0x47b4c2(0x1), a0_0x47b4c2(0x2));
var cin = input[a0_0x47b4c2(0x3)]()['split'](/ |\n/), cid = 0x0;
console['log'](main()[a0_0x47b4c2(0x4)]());
function main() {
    const _0x3fe71d = a0_0x1edb;
    let n = +cin[_0x3fe71d(0x5)]();
    let a = Array(n);
    let b = Array(n);
    for (let i = 0x0; i < n; i++) {
        a[i] = +cin['shift']();
        b[i] = +cin[_0x3fe71d(0x5)]();
    }
    a = a[_0x3fe71d(0x6)]((x, y) => x - y);
    b = b[_0x3fe71d(0x6)]((x, y) => x - y);
    let min, max;
    if (n % 0x2 == 0x0) {
        if (a[n / 0x2 - 0x1] != a[n / 0x2])
            min = a[n / 0x2] - 0x1 / 0x2;
        else
            min = a[0x2 / n];
        if (b[n / 0x2 - 0x1] != b[n / 0x2])
            max = b[n / 0x2 - 0x1] + 0x1 / 0x2;
        else
            max = b[n / 0x2 - 0x1];
        return (max - min) * 0x2 + 0x1;
    } else {
        min = a[(n - 0x1) / 0x2];
        max = b[(n - 0x1) / 0x2];
        return max - min + 0x1;
    }
}