var a0_0x2ac6ea = a0_0x1ccb;
(function (stringArrayFunction, comparisonValue) {
    var _0x3c783d = a0_0x1ccb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3c783d(0xf1)) / 0x1 + parseInt(_0x3c783d(0xeb)) / 0x2 * (parseInt(_0x3c783d(0xf5)) / 0x3) + parseInt(_0x3c783d(0xf4)) / 0x4 * (-parseInt(_0x3c783d(0xe6)) / 0x5) + parseInt(_0x3c783d(0xe7)) / 0x6 * (parseInt(_0x3c783d(0xf3)) / 0x7) + -parseInt(_0x3c783d(0xec)) / 0x8 + parseInt(_0x3c783d(0xf8)) / 0x9 * (-parseInt(_0x3c783d(0xe5)) / 0xa) + parseInt(_0x3c783d(0xed)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3c09, 0x92d8d));
inp = require('fs')[a0_0x2ac6ea(0xe9)](a0_0x2ac6ea(0xf2), a0_0x2ac6ea(0xf7))[a0_0x2ac6ea(0xea)]('\x0a');
function a0_0x1ccb(IGaZYb, key) {
    var stringArray = a0_0x3c09();
    a0_0x1ccb = function (index, key) {
        index = index - 0xe5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ccb(IGaZYb, key);
}
l = inp[a0_0x2ac6ea(0xf6)]()[a0_0x2ac6ea(0xea)]('\x20');
N = l[0x0];
K = l[0x1];
A = inp[a0_0x2ac6ea(0xf6)]()['split']('\x20');
function a0_0x3c09() {
    var _0x15e966 = [
        'utf8',
        '17523EWamaw',
        '4930bGcoxv',
        '5991590osjKLE',
        '6RAUGrj',
        'keys',
        'readFileSync',
        'split',
        '414214CZiOvQ',
        '3374976PKpVyx',
        '28256547QEvSip',
        'log',
        'length',
        'sort',
        '688045qJnKKL',
        '/dev/stdin',
        '1856953WkZCGx',
        '4kAmZjT',
        '15DEcLmO',
        'shift'
    ];
    a0_0x3c09 = function () {
        return _0x15e966;
    };
    return a0_0x3c09();
}
o = {};
a = [];
for (i = 0x0; i < N; i++) {
    a[A[i]] = (a[A[i]] || 0x0) + 0x1;
    o[A[i]] = 0x1;
}
keys = Object[a0_0x2ac6ea(0xe8)](o);
c = keys[a0_0x2ac6ea(0xef)] - K;
if (c > 0x0) {
    a[a0_0x2ac6ea(0xf0)]();
    cnt = 0x0;
    for (k of a) {
        cnt += k;
        c--;
        if (c === 0x0) {
            break;
        }
    }
    console[a0_0x2ac6ea(0xee)](cnt);
} else {
    console[a0_0x2ac6ea(0xee)](0x0);
}