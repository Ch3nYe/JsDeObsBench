function a0_0x2525() {
    var _0x2aa612 = [
        'YES',
        '399442qpLNGn',
        'utf8',
        '2358966vSEjOr',
        '21wEEmYc',
        '/dev/stdin',
        '6986064RulIPo',
        '848gzftMh',
        '2323635nqcOhG',
        '249VYSHfh',
        '114723jjjPmf',
        '29993579yRrCwI',
        '10fLuyCD',
        'readFileSync',
        'split',
        '24394vnPpfH',
        'trim'
    ];
    a0_0x2525 = function () {
        return _0x2aa612;
    };
    return a0_0x2525();
}
var a0_0x4fdb0c = a0_0x1994;
function a0_0x1994(zwRkPW, key) {
    var stringArray = a0_0x2525();
    a0_0x1994 = function (index, key) {
        index = index - 0x1c1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1994(zwRkPW, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3f88d2 = a0_0x1994;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3f88d2(0x1cc)) / 0x1 + -parseInt(_0x3f88d2(0x1c9)) / 0x2 * (parseInt(_0x3f88d2(0x1c3)) / 0x3) + parseInt(_0x3f88d2(0x1d1)) / 0x4 + parseInt(_0x3f88d2(0x1c2)) / 0x5 + -parseInt(_0x3f88d2(0x1ce)) / 0x6 * (parseInt(_0x3f88d2(0x1cf)) / 0x7) + parseInt(_0x3f88d2(0x1c1)) / 0x8 * (-parseInt(_0x3f88d2(0x1c4)) / 0x9) + -parseInt(_0x3f88d2(0x1c6)) / 0xa * (-parseInt(_0x3f88d2(0x1c5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2525, 0xf3092));
var input = require('fs')[a0_0x4fdb0c(0x1c7)](a0_0x4fdb0c(0x1d0), a0_0x4fdb0c(0x1cd));
var Arr = input[a0_0x4fdb0c(0x1ca)]()[a0_0x4fdb0c(0x1c8)]('\x0a');
Arr['forEach'](function (v) {
    var _0x3cd2b2 = a0_0x4fdb0c;
    var arr = v[_0x3cd2b2(0x1c8)]('\x20')['map'](Number);
    var m = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6,
        0x7,
        0x8,
        0x9,
        0xa
    ];
    m = m['filter'](function (v) {
        return v != arr[0x0] || v != arr[0x1] || v != arr[0x2];
    });
    var y = 0x0;
    var n = 0x0;
    m['forEach'](function (v) {
        arr[0x0] + arr[0x1] + v <= 0x14 ? y++ : n++;
    });
    console['log'](y >= n ? _0x3cd2b2(0x1cb) : 'NO');
});