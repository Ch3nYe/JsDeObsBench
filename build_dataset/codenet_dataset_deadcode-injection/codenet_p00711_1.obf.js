function a0_0xa0d0() {
    var _0x395082 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'indexOf',
        'push',
        'log'
    ];
    a0_0xa0d0 = function () {
        return _0x395082;
    };
    return a0_0xa0d0();
}
function a0_0xf30c(pBUYJa, key) {
    var stringArray = a0_0xa0d0();
    a0_0xf30c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf30c(pBUYJa, key);
}
var a0_0x15f0ca = a0_0xf30c;
function bomb(y, x) {
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= H || xx < 0x0 || xx >= W)
            continue;
        if (yx[yy][xx] == '.') {
            cnt++;
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
var input = require('fs')[a0_0x15f0ca(0x0)](a0_0x15f0ca(0x1), a0_0x15f0ca(0x2));
var Arr = input[a0_0x15f0ca(0x3)]()[a0_0x15f0ca(0x4)]('\x0a');
while (!![]) {
    var WH = Arr['shift']()[a0_0x15f0ca(0x4)]('\x20')['map'](Number);
    var W = WH[0x0];
    var H = WH[0x1];
    if (W == 0x0 && H == 0x0)
        break;
    var yx = [];
    var Y, X;
    for (var i = 0x0; i < H; i++) {
        var arr = Arr[a0_0x15f0ca(0x5)]()[a0_0x15f0ca(0x4)]('');
        if (arr[a0_0x15f0ca(0x6)]('@') != -0x1) {
            Y = i;
            X = arr[a0_0x15f0ca(0x6)]('@');
        }
        yx[a0_0x15f0ca(0x7)](arr);
    }
    var cnt = 0x1;
    bomb(Y, X);
    console[a0_0x15f0ca(0x8)](cnt);
}