var a0_0x4f5cdf = a0_0x450f;
function bomb(y, x) {
    var _0x4c10e9 = a0_0x450f;
    if (yx[y][x] == 0x1)
        return;
    else if (yx[y][x] == 0x2) {
        var Y = y + 0x2;
        var X = x;
        if (Y >= h) {
            cnt++;
            return;
        }
        bomb(Y, X);
    } else if (yx[y][x] == 0x0) {
        var dx = [
            -0x1,
            0x0,
            0x1
        ];
        for (var i = 0x0; i < dx[_0x4c10e9(0x0)]; i++) {
            var Y = y + 0x1;
            var X = x + dx[i];
            if (X < 0x0 || X >= w)
                continue;
            if (Y >= h) {
                cnt++;
                return;
            }
            if (yx[Y][X] == 0x2 && dx[i] != 0x0)
                continue;
            bomb(Y, X);
        }
    }
}
function a0_0x310f() {
    var _0x514521 = [
        'length',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'push'
    ];
    a0_0x310f = function () {
        return _0x514521;
    };
    return a0_0x310f();
}
var input = require('fs')['readFileSync'](a0_0x4f5cdf(0x1), a0_0x4f5cdf(0x2));
function a0_0x450f(RsMkvq, key) {
    var stringArray = a0_0x310f();
    a0_0x450f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x450f(RsMkvq, key);
}
var arr = input[a0_0x4f5cdf(0x3)]()[a0_0x4f5cdf(0x4)]('\x0a');
while (!![]) {
    var wh = arr[a0_0x4f5cdf(0x5)]()[a0_0x4f5cdf(0x4)]('\x20')[a0_0x4f5cdf(0x6)](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    if (w == 0x0 && h == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx[a0_0x4f5cdf(0x7)](arr[a0_0x4f5cdf(0x5)]()['split']('\x20')[a0_0x4f5cdf(0x6)](Number));
    var cnt = 0x0;
    for (var i = 0x0; i < w; i++) {
        bomb(0x0, i);
    }
    console['log'](cnt);
}