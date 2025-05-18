function a0_0x3207() {
    var _0x4c46bb = [
        '167150PQQlWB',
        'readFileSync',
        '394139hLFLuX',
        '37428Apfpdu',
        '1288236dbgDKv',
        '/dev/stdin',
        '30vADAZk',
        '187vZkizc',
        'split',
        '152slMJdn',
        'utf8',
        'length',
        '1873887QqkZpi',
        '215Xonfnd',
        'log',
        'shift',
        'replace',
        '10171mJWXzS',
        '4nJELNL',
        '88551FdPIUl'
    ];
    a0_0x3207 = function () {
        return _0x4c46bb;
    };
    return a0_0x3207();
}
var a0_0x1627dd = a0_0x3fac;
(function (stringArrayFunction, comparisonValue) {
    var _0x984042 = a0_0x3fac;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x984042(0x11a)) / 0x1 * (parseInt(_0x984042(0x116)) / 0x2) + -parseInt(_0x984042(0x124)) / 0x3 + -parseInt(_0x984042(0x11b)) / 0x4 * (-parseInt(_0x984042(0x125)) / 0x5) + parseInt(_0x984042(0x11e)) / 0x6 * (-parseInt(_0x984042(0x129)) / 0x7) + parseInt(_0x984042(0x121)) / 0x8 * (-parseInt(_0x984042(0x117)) / 0x9) + -parseInt(_0x984042(0x118)) / 0xa * (-parseInt(_0x984042(0x11f)) / 0xb) + -parseInt(_0x984042(0x11c)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3207, 0x85ef4));
var input = require('fs')[a0_0x1627dd(0x119)](a0_0x1627dd(0x11d), a0_0x1627dd(0x122));
function a0_0x3fac(tyECga, key) {
    var stringArray = a0_0x3207();
    a0_0x3fac = function (index, key) {
        index = index - 0x116;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3fac(tyECga, key);
}
var Arr = input[a0_0x1627dd(0x128)](/\n$/, '')[a0_0x1627dd(0x120)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x1627dd(0x127)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var x = Arr[a0_0x1627dd(0x127)]() - 0x0;
        arr['push'](x);
    }
    var L = 0x1;
    var cnt = 0x0;
    while (!![]) {
        if (arr[a0_0x1627dd(0x123)] == L)
            break;
        for (var i = 0x0; i < arr[a0_0x1627dd(0x123)] - L; i++) {
            var memo = arr[i];
            if (arr[i] > arr[i + 0x1]) {
                cnt++;
                arr[i] = arr[i + 0x1];
                arr[i + 0x1] = memo;
            }
        }
        L++;
    }
    console[a0_0x1627dd(0x126)](cnt);
}