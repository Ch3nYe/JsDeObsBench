var a0_0x1118cb = a0_0xa809;
function a0_0xa809(vQBvKs, key) {
    var stringArray = a0_0x140d();
    a0_0xa809 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa809(vQBvKs, key);
}
function count(y, x) {
    var _0x4d55f5 = a0_0xa809;
    var dy = [
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var dx = [
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    var max = 0x1;
    for (var i = 0x0; i < 0x4; i++) {
        var cnt = 0x1;
        for (var j = 0x1; j <= n; j++) {
            var yy = y + dy[i] * j;
            var xx = x + dx[i] * j;
            if (yy < 0x0 || xx < 0x0 || yy >= n || xx >= n)
                break;
            if (yx[yy][xx] != 0x1)
                break;
            cnt++;
        }
        max = Math[_0x4d55f5(0x0)](max, cnt);
        cnt = 0x1;
    }
    return max;
}
function a0_0x140d() {
    var _0x64d017 = [
        'max',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'log'
    ];
    a0_0x140d = function () {
        return _0x64d017;
    };
    return a0_0x140d();
}
var input = require('fs')[a0_0x1118cb(0x1)](a0_0x1118cb(0x2), a0_0x1118cb(0x3));
var Arr = input[a0_0x1118cb(0x4)]()[a0_0x1118cb(0x5)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x1118cb(0x6)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = Arr[a0_0x1118cb(0x6)]()[a0_0x1118cb(0x5)]('')['map'](Number);
    }
    var max = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (yx[i][j] == 0x1)
                max = Math[a0_0x1118cb(0x0)](max, count(i, j));
        }
    }
    console[a0_0x1118cb(0x7)](max);
}