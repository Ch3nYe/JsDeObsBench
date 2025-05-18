'use strict';
const a0_0x36fc9b = a0_0x53ee;
(function (stringArrayFunction, comparisonValue) {
    const _0xec3fd0 = a0_0x53ee;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xec3fd0(0xfb)) / 0x1 + parseInt(_0xec3fd0(0xfa)) / 0x2 + -parseInt(_0xec3fd0(0xf9)) / 0x3 + parseInt(_0xec3fd0(0xf7)) / 0x4 + parseInt(_0xec3fd0(0xf5)) / 0x5 * (-parseInt(_0xec3fd0(0xf8)) / 0x6) + -parseInt(_0xec3fd0(0xfe)) / 0x7 + -parseInt(_0xec3fd0(0xf0)) / 0x8 * (parseInt(_0xec3fd0(0xf3)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x16e4, 0x18e76));
function a0_0x16e4() {
    const _0x4325fb = [
        '133799iWzFkO',
        '/dev/stdin',
        'MIN_SAFE_INTEGER',
        '34062ybQGuI',
        'trim',
        'shift',
        'readFileSync',
        'length',
        '389384GMpMyO',
        'map',
        'log',
        '9IDMZHw',
        'sort',
        '2855YpbmAw',
        'split',
        '417856nhrgxE',
        '822IopvSp',
        '188649kSIgsR',
        '116784cNgwUW'
    ];
    a0_0x16e4 = function () {
        return _0x4325fb;
    };
    return a0_0x16e4();
}
let a = require('fs')[a0_0x36fc9b(0x101)](a0_0x36fc9b(0xfc), 'utf8')[a0_0x36fc9b(0xff)]()[a0_0x36fc9b(0xf6)]('\x0a');
a[a0_0x36fc9b(0x100)]();
function a0_0x53ee(ENRdcA, key) {
    const stringArray = a0_0x16e4();
    a0_0x53ee = function (index, key) {
        index = index - 0xef;
        let value = stringArray[index];
        return value;
    };
    return a0_0x53ee(ENRdcA, key);
}
let d = a[a0_0x36fc9b(0xf1)](e => {
    const _0x56dd52 = a0_0x36fc9b;
    let r = e[_0x56dd52(0xf6)]('\x20')[_0x56dd52(0xf1)](Number);
    return [
        r[0x0] - r[0x1],
        r[0x1] + r[0x0]
    ];
})[a0_0x36fc9b(0xf4)]((a, b) => {
    return a[0x1] - b[0x1];
});
let s = 0x0;
let P = Number[a0_0x36fc9b(0xfd)];
for (let i = 0x0; i < d[a0_0x36fc9b(0xef)]; i++) {
    if (P <= d[i][0x0]) {
        s++;
        P = d[i][0x1];
    }
}
console[a0_0x36fc9b(0xf2)](s);