var a0_0xfead35 = a0_0x38b7;
(function (stringArrayFunction, comparisonValue) {
    var _0x32a855 = a0_0x38b7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x32a855(0x110)) / 0x1 * (parseInt(_0x32a855(0x115)) / 0x2) + -parseInt(_0x32a855(0x112)) / 0x3 + parseInt(_0x32a855(0x10e)) / 0x4 + -parseInt(_0x32a855(0x111)) / 0x5 + -parseInt(_0x32a855(0x116)) / 0x6 + -parseInt(_0x32a855(0x117)) / 0x7 + parseInt(_0x32a855(0x10d)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc524, 0x5d348));
function a0_0x38b7(xgZlWi, key) {
    var stringArray = a0_0xc524();
    a0_0x38b7 = function (index, key) {
        index = index - 0x10d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38b7(xgZlWi, key);
}
function lcs(x, y) {
    var _0x49cfd7 = a0_0x38b7;
    var m = x[_0x49cfd7(0x114)];
    var n = y[_0x49cfd7(0x114)];
    for (var i = 0x1; i <= m; i++) {
        c[i][0x0] = 0x0;
    }
    for (var j = 0x1; j <= n; j++) {
        c[0x0][j] = 0x0;
    }
    for (var i = 0x1; i <= m; i++) {
        for (var j = 0x1; j <= n; j++) {
            if (x[i] == y[j]) {
                c[i][j] = c[i - 0x1][j - 0x1] + 0x1;
            } else if (c[i - 0x1][j] >= c[i][j - 0x1]) {
                c[i][j] = c[i - 0x1][j];
            } else {
                c[i][j] = c[i][j - 0x1];
            }
        }
    }
}
var input = require('fs')['readFileSync'](a0_0xfead35(0x10f), a0_0xfead35(0x118))[a0_0xfead35(0x113)]();
var lines = input[a0_0xfead35(0x119)]('\x0a');
var n = +lines[a0_0xfead35(0x11b)]() - 0x0;
for (var idx = 0x0; idx < n; idx++) {
    var a = lines['shift']();
    var b = lines['shift']();
    var c = [[0x0]];
    for (var i = 0x1; i <= a[a0_0xfead35(0x114)]; i++) {
        var arr = [-0x1];
        c[a0_0xfead35(0x11a)](arr);
    }
    lcs(a, b);
    console['log'](c[a[a0_0xfead35(0x114)]][b['length']]);
}
function a0_0xc524() {
    var _0x42a8ff = [
        'split',
        'push',
        'shift',
        '17128744QDKWPh',
        '435988jNSfVx',
        '/dev/stdin',
        '1ctJTEy',
        '3426545Nbodte',
        '1554174EdnXVv',
        'trim',
        'length',
        '472588KZZvcw',
        '4566150GVHtTE',
        '981568SfxEAU',
        'utf8'
    ];
    a0_0xc524 = function () {
        return _0x42a8ff;
    };
    return a0_0xc524();
}