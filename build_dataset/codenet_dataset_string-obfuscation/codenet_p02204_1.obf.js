var a0_0x1588ed = a0_0x3055;
(function (stringArrayFunction, comparisonValue) {
    var _0x58a1ab = a0_0x3055;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x58a1ab(0x16a)) / 0x1 + -parseInt(_0x58a1ab(0x16f)) / 0x2 + -parseInt(_0x58a1ab(0x16c)) / 0x3 + parseInt(_0x58a1ab(0x177)) / 0x4 * (-parseInt(_0x58a1ab(0x168)) / 0x5) + parseInt(_0x58a1ab(0x175)) / 0x6 + -parseInt(_0x58a1ab(0x16d)) / 0x7 * (-parseInt(_0x58a1ab(0x176)) / 0x8) + parseInt(_0x58a1ab(0x166)) / 0x9 * (parseInt(_0x58a1ab(0x16e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b7f, 0x9db9f));
var input = require('fs')[a0_0x1588ed(0x174)](a0_0x1588ed(0x16b), a0_0x1588ed(0x172));
var arr = input[a0_0x1588ed(0x178)]()['split']('\x0a');
var [m, n] = arr[a0_0x1588ed(0x169)]()['split']('\x20')[a0_0x1588ed(0x171)](Number);
function a0_0x3055(QOMFYj, key) {
    var stringArray = a0_0x2b7f();
    a0_0x3055 = function (index, key) {
        index = index - 0x166;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3055(QOMFYj, key);
}
function a0_0x2b7f() {
    var _0x245f6e = [
        '145044FQLGuR',
        'trim',
        '9hHjFDM',
        'log',
        '105LRDcyK',
        'shift',
        '374967eVGOHR',
        '/dev/stdin',
        '3445341TZtJSW',
        '6916189TibrWq',
        '6813670YJTxie',
        '1240844jJHAEP',
        'split',
        'map',
        'utf8',
        'min',
        'readFileSync',
        '6792216EknFHf',
        '8CQTLkq'
    ];
    a0_0x2b7f = function () {
        return _0x245f6e;
    };
    return a0_0x2b7f();
}
var a = arr[a0_0x1588ed(0x169)]()[a0_0x1588ed(0x170)]('\x20');
if (m == 0x2) {
    var cnt = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < n; i++) {
        if (a[i] - 0x1 == i % 0x2)
            cnt[0x0]++;
        if (a[i] - 0x1 == (i + 0x1) % 0x2)
            cnt[0x1]++;
    }
    console[a0_0x1588ed(0x167)](Math[a0_0x1588ed(0x173)](...cnt));
} else {
    var cnt = 0x0;
    for (var i = 0x1; i < n; i++) {
        if (a[i - 0x1] == a[i]) {
            cnt++;
            i++;
        }
    }
    console[a0_0x1588ed(0x167)](cnt);
}