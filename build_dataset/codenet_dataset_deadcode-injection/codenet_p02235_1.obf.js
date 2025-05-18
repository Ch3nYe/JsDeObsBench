var a0_0x356546 = a0_0x39d0;
function a0_0x18a2() {
    var _0x15445c = [
        'length',
        'PqqOg',
        'RGciJ',
        'iRJze',
        'xEFIU',
        'KGpbR',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'log'
    ];
    a0_0x18a2 = function () {
        return _0x15445c;
    };
    return a0_0x18a2();
}
function lcs(x, y) {
    var _0xab737c = a0_0x39d0;
    var m = x[_0xab737c(0x0)];
    var n = y['length'];
    for (var i = 0x1; i <= m; i++) {
        if ('GVidO' === _0xab737c(0x1)) {
            c[i][j] = c[i - 0x1][j];
        } else {
            c[i][0x0] = 0x0;
        }
    }
    for (var j = 0x1; j <= n; j++) {
        c[0x0][j] = 0x0;
    }
    for (var i = 0x1; i <= m; i++) {
        if (_0xab737c(0x2) !== 'YYKOv') {
            for (var j = 0x1; j <= n; j++) {
                if ('hZeht' === _0xab737c(0x3)) {
                    var arr = [-0x1];
                    c['push'](arr);
                } else {
                    if (x[i] == y[j]) {
                        c[i][j] = c[i - 0x1][j - 0x1] + 0x1;
                    } else if (c[i - 0x1][j] >= c[i][j - 0x1]) {
                        c[i][j] = c[i - 0x1][j];
                    } else {
                        if (_0xab737c(0x4) !== _0xab737c(0x5)) {
                            c[i][j] = c[i][j - 0x1];
                        } else {
                            c[i][0x0] = 0x0;
                        }
                    }
                }
            }
        } else {
            c[0x0][j] = 0x0;
        }
    }
}
var input = require('fs')[a0_0x356546(0x6)](a0_0x356546(0x7), a0_0x356546(0x8))[a0_0x356546(0x9)]();
var lines = input['split']('\x0a');
function a0_0x39d0(dosWdO, key) {
    var stringArray = a0_0x18a2();
    a0_0x39d0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x39d0(dosWdO, key);
}
var n = +lines[a0_0x356546(0xa)]() - 0x0;
for (var idx = 0x0; idx < n; idx++) {
    var a = lines['shift']();
    var b = lines['shift']();
    var c = [[0x0]];
    for (var i = 0x1; i <= a['length']; i++) {
        var arr = [-0x1];
        c['push'](arr);
    }
    lcs(a, b);
    console[a0_0x356546(0xb)](c[a[a0_0x356546(0x0)]][b[a0_0x356546(0x0)]]);
}