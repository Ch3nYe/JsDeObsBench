var a0_0x574955 = a0_0x38a9;
function a0_0x38a9(eVPcJA, key) {
    var stringArray = a0_0x2519();
    a0_0x38a9 = function (index, key) {
        index = index - 0x1cf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38a9(eVPcJA, key);
}
function a0_0x2519() {
    var _0x584d99 = [
        '6DmaQpK',
        'shift',
        '1429286ayxOsV',
        '482015CjlnJe',
        'readFileSync',
        '70habhRX',
        '18mFMSkO',
        'push',
        '4416305cboYPc',
        'log',
        '2696APCWDu',
        '345XUQMXq',
        '39142169vjjDOF',
        '/dev/stdin',
        'trim',
        'utf8',
        '5519750cslhGJ',
        'forEach',
        'split',
        '912536kMCNhq'
    ];
    a0_0x2519 = function () {
        return _0x584d99;
    };
    return a0_0x2519();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3fbc0f = a0_0x38a9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3fbc0f(0x1e0)) / 0x1 + parseInt(_0x3fbc0f(0x1df)) / 0x2 + parseInt(_0x3fbc0f(0x1d4)) / 0x3 * (-parseInt(_0x3fbc0f(0x1d3)) / 0x4) + -parseInt(_0x3fbc0f(0x1d1)) / 0x5 * (parseInt(_0x3fbc0f(0x1dd)) / 0x6) + -parseInt(_0x3fbc0f(0x1e2)) / 0x7 * (parseInt(_0x3fbc0f(0x1dc)) / 0x8) + -parseInt(_0x3fbc0f(0x1cf)) / 0x9 * (parseInt(_0x3fbc0f(0x1d9)) / 0xa) + parseInt(_0x3fbc0f(0x1d5)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2519, 0x8ef90));
function bomb(name) {
    var _0x10ac2c = a0_0x38a9;
    var min = obj[name];
    M[_0x10ac2c(0x1da)](function (v) {
        var _0x196af9 = _0x10ac2c;
        if (name == v[0x0]) {
            var sum = 0x0;
            v[0x1][_0x196af9(0x1da)](function (value) {
                sum += bomb(value);
            });
            min = Math['min'](min, sum);
        }
    });
    return min;
}
var input = require('fs')[a0_0x574955(0x1e1)](a0_0x574955(0x1d6), a0_0x574955(0x1d8));
var arr = input[a0_0x574955(0x1d7)]()[a0_0x574955(0x1db)]('\x0a');
while (!![]) {
    var n = arr[a0_0x574955(0x1de)]() - 0x0;
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var data = arr[a0_0x574955(0x1de)]()[a0_0x574955(0x1db)]('\x20');
        obj[data[0x0]] = data[0x1] - 0x0;
    }
    var m = arr['shift']() - 0x0;
    var M = [];
    for (var i = 0x0; i < m; i++) {
        var data = arr[a0_0x574955(0x1de)]()[a0_0x574955(0x1db)]('\x20');
        var name = data['shift']();
        data[a0_0x574955(0x1de)]();
        M[a0_0x574955(0x1d0)]([
            name,
            data
        ]);
    }
    var item = arr[a0_0x574955(0x1de)]();
    console[a0_0x574955(0x1d2)](bomb(item));
}