var a0_0x3673bf = a0_0x124f;
function a0_0x124f(AbzanC, key) {
    var stringArray = a0_0x2999();
    a0_0x124f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x124f(AbzanC, key);
}
var input = require('fs')[a0_0x3673bf(0x0)](a0_0x3673bf(0x1), a0_0x3673bf(0x2));
function a0_0x2999() {
    var _0x16e3eb = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'forEach',
        'log'
    ];
    a0_0x2999 = function () {
        return _0x16e3eb;
    };
    return a0_0x2999();
}
var arr = input[a0_0x3673bf(0x3)]()[a0_0x3673bf(0x4)]('\x0a');
while (!![]) {
    var n = arr[a0_0x3673bf(0x5)]() - 0x0;
    if (n === 0x0)
        break;
    var ary = arr['shift']()[a0_0x3673bf(0x4)]('\x20');
    var obj = {};
    ary[a0_0x3673bf(0x6)](function (v) {
        obj[v] = 0x0;
    });
    ary['forEach'](function (v) {
        obj[v]++;
    });
    var ans = 'NO\x20COLOR';
    var half = n / 0x2;
    for (var k in obj) {
        if (obj[k] > half) {
            ans = k;
            break;
        }
    }
    console[a0_0x3673bf(0x7)](ans);
}