var a0_0x6408f3 = a0_0xb690;
(function (stringArrayFunction, comparisonValue) {
    var _0x44ed74 = a0_0xb690;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x44ed74(0xc2)) / 0x1 + -parseInt(_0x44ed74(0xb6)) / 0x2 * (parseInt(_0x44ed74(0xc7)) / 0x3) + -parseInt(_0x44ed74(0xbb)) / 0x4 + -parseInt(_0x44ed74(0xb9)) / 0x5 * (parseInt(_0x44ed74(0xc6)) / 0x6) + -parseInt(_0x44ed74(0xca)) / 0x7 * (parseInt(_0x44ed74(0xb7)) / 0x8) + -parseInt(_0x44ed74(0xcc)) / 0x9 * (parseInt(_0x44ed74(0xc0)) / 0xa) + -parseInt(_0x44ed74(0xb8)) / 0xb * (-parseInt(_0x44ed74(0xc9)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5712, 0x24d73));
function stoneRemove() {
    var _0x40fca5 = a0_0xb690;
    yx[_0x40fca5(0xc5)](function (v, i) {
        var _0x40769e = _0x40fca5;
        var str = v[_0x40769e(0xcb)]('')['replace'](/([1-9])\1{2,}/, function (x) {
            var _0x596908 = _0x40769e;
            point += (x[0x0] - 0x0) * x[_0x596908(0xba)];
            return x[_0x596908(0xc8)](/./g, '0');
        });
        yx[i] = str[_0x40769e(0xbf)]('')['map'](Number);
    });
    var flag = !![];
    while (flag) {
        flag = ![];
        for (var i = 0x0; i < H - 0x1; i++) {
            for (var j = 0x0; j < 0x5; j++) {
                if (yx[i][j] != 0x0 && yx[i + 0x1][j] == 0x0) {
                    yx[i + 0x1][j] = yx[i][j];
                    yx[i][j] = 0x0;
                    flag = !![];
                }
            }
        }
    }
}
function a0_0x5712() {
    var _0x4f8b17 = [
        'replace',
        '14460vVVEei',
        '49rkVbhO',
        'join',
        '9tTcPbr',
        '2VudTqc',
        '264224yAneZs',
        '10890xRojAx',
        '5GqfRyv',
        'length',
        '651032ztrvIT',
        'trim',
        'utf8',
        '/dev/stdin',
        'split',
        '2810020qHmRRo',
        'map',
        '255863rQpkOg',
        'log',
        'shift',
        'forEach',
        '488646IMCbvx',
        '89373tolWvK'
    ];
    a0_0x5712 = function () {
        return _0x4f8b17;
    };
    return a0_0x5712();
}
var input = require('fs')['readFileSync'](a0_0x6408f3(0xbe), a0_0x6408f3(0xbd));
function a0_0xb690(YGXzaI, key) {
    var stringArray = a0_0x5712();
    a0_0xb690 = function (index, key) {
        index = index - 0xb6;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb690(YGXzaI, key);
}
var arr = input[a0_0x6408f3(0xbc)]()[a0_0x6408f3(0xbf)]('\x0a');
while (!![]) {
    var h = arr[a0_0x6408f3(0xc4)]() - 0x0;
    if (h == 0x0)
        break;
    var H = h;
    var yx = [];
    while (h--)
        yx['push'](arr[a0_0x6408f3(0xc4)]()[a0_0x6408f3(0xbf)]('\x20')[a0_0x6408f3(0xc1)](Number));
    var point = 0x0;
    var p = point;
    while (!![]) {
        stoneRemove();
        if (p == point)
            break;
        p = point;
    }
    console[a0_0x6408f3(0xc3)](point);
}