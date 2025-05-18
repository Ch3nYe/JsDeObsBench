var a0_0x15e646 = a0_0x1840;
(function (stringArrayFunction, comparisonValue) {
    var _0x2c42c8 = a0_0x1840;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2c42c8(0x127)) / 0x1 * (parseInt(_0x2c42c8(0x128)) / 0x2) + -parseInt(_0x2c42c8(0x131)) / 0x3 + -parseInt(_0x2c42c8(0x134)) / 0x4 + -parseInt(_0x2c42c8(0x135)) / 0x5 * (-parseInt(_0x2c42c8(0x12b)) / 0x6) + -parseInt(_0x2c42c8(0x12a)) / 0x7 + -parseInt(_0x2c42c8(0x136)) / 0x8 + parseInt(_0x2c42c8(0x12e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1b3b, 0xe4cba));
function a0_0x1840(BgugLm, key) {
    var stringArray = a0_0x1b3b();
    a0_0x1840 = function (index, key) {
        index = index - 0x127;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1840(BgugLm, key);
}
var input = require('fs')[a0_0x15e646(0x137)]('/dev/stdin', a0_0x15e646(0x12c));
var Arr = input['trim']()[a0_0x15e646(0x130)]('\x0a');
while (!![]) {
    var AL = Arr[a0_0x15e646(0x12d)]();
    if (AL == 0x0)
        break;
    var pd = [];
    for (var i = 0x0; i < AL; i++) {
        var arr = Arr[a0_0x15e646(0x12d)]()[a0_0x15e646(0x130)]('\x20')[a0_0x15e646(0x133)](Number);
        var p = arr[0x0];
        var d = arr[0x1] + arr[0x2];
        pd[a0_0x15e646(0x12f)]([
            p,
            d
        ]);
    }
    pd['sort'](function (a, b) {
        if (a[0x1] <= b[0x1])
            return 0x1;
        else
            return -0x1;
    });
    console[a0_0x15e646(0x132)](pd[0x0][a0_0x15e646(0x129)]('\x20'));
}
function a0_0x1b3b() {
    var _0x39ef4d = [
        'map',
        '4009400dmRQno',
        '3661290tcfzFA',
        '10187040rljGXa',
        'readFileSync',
        '2619BgjKpO',
        '1046AoWPFU',
        'join',
        '8770272ssYcJj',
        '6UEuQbY',
        'utf8',
        'shift',
        '31550301sPWtgP',
        'push',
        'split',
        '3425436chueJR',
        'log'
    ];
    a0_0x1b3b = function () {
        return _0x39ef4d;
    };
    return a0_0x1b3b();
}