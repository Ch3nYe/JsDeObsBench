function a0_0x4416() {
    var _0x1ec3bf = [
        '24fMSsXc',
        '9FIsVPJ',
        '120195zkulBK',
        '201010RYkZpx',
        'trim',
        '80030eHvClm',
        'utf8',
        'push',
        'length',
        'sort',
        '40DKeZoD',
        '3111626PgsEdz',
        '693HhhiCf',
        '/dev/stdin',
        '439308cWPPaX',
        '4735096CMJkBg',
        'split',
        '6TJPxiS',
        'log',
        'shift',
        'readFileSync',
        '8159544yWYHAq'
    ];
    a0_0x4416 = function () {
        return _0x1ec3bf;
    };
    return a0_0x4416();
}
var a0_0x57f6ff = a0_0x4337;
function a0_0x4337(EZppCn, key) {
    var stringArray = a0_0x4416();
    a0_0x4337 = function (index, key) {
        index = index - 0x14c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4337(EZppCn, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2d2430 = a0_0x4337;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2d2430(0x15a)) / 0x1 * (-parseInt(_0x2d2430(0x152)) / 0x2) + parseInt(_0x2d2430(0x159)) / 0x3 * (parseInt(_0x2d2430(0x157)) / 0x4) + parseInt(_0x2d2430(0x161)) / 0x5 * (-parseInt(_0x2d2430(0x14f)) / 0x6) + -parseInt(_0x2d2430(0x14c)) / 0x7 + -parseInt(_0x2d2430(0x150)) / 0x8 * (-parseInt(_0x2d2430(0x158)) / 0x9) + parseInt(_0x2d2430(0x15c)) / 0xa * (parseInt(_0x2d2430(0x14d)) / 0xb) + parseInt(_0x2d2430(0x156)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4416, 0x5d8a0));
var ab = [];
for (var i = 0x0; i <= 0x3e8; i++) {
    for (var j = 0x0; j <= 0x3e8; j++) {
        ab[a0_0x57f6ff(0x15e)](i + j);
    }
}
ab[a0_0x57f6ff(0x160)](function (a, b) {
    return a - b;
});
var input = require('fs')[a0_0x57f6ff(0x155)](a0_0x57f6ff(0x14e), a0_0x57f6ff(0x15d));
var Arr = input[a0_0x57f6ff(0x15b)]()[a0_0x57f6ff(0x151)]('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var n = Arr[a0_0x57f6ff(0x154)]() - 0x0;
    var cnt = 0x0;
    var k = ab['length'] - 0x1;
    for (var i = 0x0; i < ab[a0_0x57f6ff(0x15f)]; i++) {
        while (ab[i] + ab[k] > n)
            k--;
        var memo = k;
        while (ab[i] + ab[memo] == n) {
            cnt++;
            memo--;
        }
    }
    console[a0_0x57f6ff(0x153)](cnt);
}