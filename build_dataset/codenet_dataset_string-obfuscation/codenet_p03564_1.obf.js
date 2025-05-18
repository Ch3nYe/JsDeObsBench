function a0_0xed67() {
    var _0x4b9166 = [
        '20643CniPlD',
        '99670xPsDgY',
        '1577862qhBhBM',
        'setEncoding',
        'stdin',
        '36386UIeNhO',
        '6827712fCmWZH',
        '738168FYijxp',
        '/dev/stdin',
        'utf8',
        'split',
        '15LiwCzD',
        '681064CJFSoG'
    ];
    a0_0xed67 = function () {
        return _0x4b9166;
    };
    return a0_0xed67();
}
var a0_0x55dfdb = a0_0x1441;
(function (stringArrayFunction, comparisonValue) {
    var _0x59d14e = a0_0x1441;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x59d14e(0x97)) / 0x1 + parseInt(_0x59d14e(0x99)) / 0x2 + -parseInt(_0x59d14e(0x98)) / 0x3 + -parseInt(_0x59d14e(0x92)) / 0x4 + -parseInt(_0x59d14e(0x96)) / 0x5 * (-parseInt(_0x59d14e(0x9a)) / 0x6) + parseInt(_0x59d14e(0x9d)) / 0x7 + -parseInt(_0x59d14e(0x9e)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xed67, 0x7538d));
function a0_0x1441(Qalmje, key) {
    var stringArray = a0_0xed67();
    a0_0x1441 = function (index, key) {
        index = index - 0x92;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1441(Qalmje, key);
}
process['stdin']['resume']();
process[a0_0x55dfdb(0x9c)][a0_0x55dfdb(0x9b)](a0_0x55dfdb(0x94));
function Main(input) {
    var _0x4d12c6 = a0_0x55dfdb;
    var tmp = input[_0x4d12c6(0x95)]('\x0a');
    var line0 = tmp[0x0]['split']('\x20');
    var line1 = tmp[0x1][_0x4d12c6(0x95)]('\x20');
    var n = Number(line0[0x0]);
    var k = Number(line1[0x0]);
    var ans = 0x1;
    for (var i = 0x1; i <= n; i++) {
        if (ans < k)
            ans *= 0x2;
        else
            ans += k;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync'](a0_0x55dfdb(0x93), a0_0x55dfdb(0x94)));