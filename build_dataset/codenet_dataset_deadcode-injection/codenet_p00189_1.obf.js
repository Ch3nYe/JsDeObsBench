var a0_0x6e12c0 = a0_0x3de1;
function warshall() {
    var _0x4305ad = a0_0x3de1;
    for (var k = 0x0; k < n; k++) {
        for (var i = 0x0; i < n; i++) {
            for (var j = 0x0; j < n; j++) {
                if ('IAjxd' !== _0x4305ad(0x0)) {
                    C[i][j] = Math[_0x4305ad(0x1)](C[i][j], C[i][k] + C[k][j]);
                } else {
                    for (var j = 0x0; j < n; j++) {
                        C[i][j] = Math['min'](C[i][j], C[i][k] + C[k][j]);
                    }
                }
            }
        }
    }
}
var input = require('fs')[a0_0x6e12c0(0x2)](a0_0x6e12c0(0x3), a0_0x6e12c0(0x4));
function a0_0x3de1(bsOOOW, key) {
    var stringArray = a0_0x4988();
    a0_0x3de1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3de1(bsOOOW, key);
}
var Arr = input[a0_0x6e12c0(0x5)]()['split']('\x0a');
while (!![]) {
    var n = 0xa;
    var m = Arr[a0_0x6e12c0(0x6)]() - 0x0;
    if (m == 0x0)
        break;
    var C = [];
    for (var i = 0x0; i < n; i++) {
        C[i] = [];
        for (var j = 0x0; j < n; j++) {
            C[i][j] = i === j ? 0x0 : Infinity;
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < m; i++) {
        var A = Arr[a0_0x6e12c0(0x6)]()[a0_0x6e12c0(0x7)]('\x20')[a0_0x6e12c0(0x8)](Number);
        max = Math[a0_0x6e12c0(0x9)](max, A[0x0], A[0x1]);
        C[A[0x0]][A[0x1]] = A[0x2];
        C[A[0x1]][A[0x0]] = A[0x2];
    }
    warshall();
    var min = [
        '',
        Infinity
    ];
    for (var i = max; i >= 0x0; i--) {
        var arr = C[i][a0_0x6e12c0(0xa)](0x0, max + 0x1);
        var sum = arr[a0_0x6e12c0(0xb)](function (a, b) {
            return a + b;
        });
        min[0x1] = Math[a0_0x6e12c0(0x1)](min[0x1], sum);
        if (min[0x1] == sum)
            min = [
                i,
                sum
            ];
    }
    console[a0_0x6e12c0(0xc)](min[a0_0x6e12c0(0xd)]('\x20'));
}
function a0_0x4988() {
    var _0x894bf8 = [
        'fZtDH',
        'min',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'max',
        'slice',
        'reduce',
        'log',
        'join'
    ];
    a0_0x4988 = function () {
        return _0x894bf8;
    };
    return a0_0x4988();
}