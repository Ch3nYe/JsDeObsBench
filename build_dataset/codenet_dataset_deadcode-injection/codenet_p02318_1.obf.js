var a0_0x44c296 = a0_0x4563;
function LD(a, b) {
    var _0x1f3cf1 = a0_0x4563;
    var ar = new Array();
    for (var i = 0x0; i < a[_0x1f3cf1(0x0)] + 0x1; i++) {
        if ('FILBa' === _0x1f3cf1(0x1)) {
            ar[i][j] = Math[_0x1f3cf1(0x2)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1] + 0x1);
        } else {
            var subar = new Array();
            for (var j = 0x0; j < b['length'] + 0x1; j++) {
                subar[_0x1f3cf1(0x3)](0x0);
            }
            ar[_0x1f3cf1(0x3)](subar);
        }
    }
    for (var i = 0x0; i < a[_0x1f3cf1(0x0)] + 0x1; i++) {
        ar[i][0x0] = i;
    }
    for (var i = 0x0; i < b[_0x1f3cf1(0x0)] + 0x1; i++) {
        if ('mRigv' !== _0x1f3cf1(0x4)) {
            ar[0x0][i] = i;
        } else {
            if (a[_0x1f3cf1(0x5)](i - 0x1) == b['charAt'](j - 0x1)) {
                ar[i][j] = Math[_0x1f3cf1(0x2)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1]);
            } else {
                ar[i][j] = Math[_0x1f3cf1(0x2)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1] + 0x1);
            }
        }
    }
    for (var i = 0x1; i < a['length'] + 0x1; i++) {
        for (var j = 0x1; j < b[_0x1f3cf1(0x0)] + 0x1; j++) {
            if (a[_0x1f3cf1(0x5)](i - 0x1) == b['charAt'](j - 0x1)) {
                if (_0x1f3cf1(0x6) !== _0x1f3cf1(0x7)) {
                    ar[i][j] = Math[_0x1f3cf1(0x2)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1]);
                } else {
                    ar[i][j] = Math['min'](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1]);
                }
            } else {
                ar[i][j] = Math[_0x1f3cf1(0x2)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1] + 0x1);
            }
        }
    }
    return ar[a[_0x1f3cf1(0x0)]][b[_0x1f3cf1(0x0)]];
}
var input = require('fs')[a0_0x44c296(0x8)](a0_0x44c296(0x9), a0_0x44c296(0xa));
function a0_0x202d() {
    var _0x340d23 = [
        'length',
        'ACwaf',
        'min',
        'push',
        'KmrKU',
        'charAt',
        'lRpLN',
        'sDOMq',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'log'
    ];
    a0_0x202d = function () {
        return _0x340d23;
    };
    return a0_0x202d();
}
var strings = input[a0_0x44c296(0xb)]('\x0a');
function a0_0x4563(QKqrfH, key) {
    var stringArray = a0_0x202d();
    a0_0x4563 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4563(QKqrfH, key);
}
console[a0_0x44c296(0xc)](LD(strings[0x0], strings[0x1]));