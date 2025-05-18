var a0_0x288db8 = a0_0x2dd2;
function bomb(y, x) {
    var dy = [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    for (var i = 0x0; i < 0x8; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= H || xx < 0x0 || xx >= W)
            continue;
        if (yx[yy][xx] == 'a') {
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
var input = require('fs')['readFileSync'](a0_0x288db8(0x0), a0_0x288db8(0x1));
var Arr = input[a0_0x288db8(0x2)]()[a0_0x288db8(0x3)]('\x0a');
function a0_0x2dd2(quBkKx, key) {
    var stringArray = a0_0x45a9();
    a0_0x2dd2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2dd2(quBkKx, key);
}
function a0_0x45a9() {
    var _0x438e72 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'shift',
        'push'
    ];
    a0_0x45a9 = function () {
        return _0x438e72;
    };
    return a0_0x45a9();
}
while (!![]) {
    var WH = Arr['shift']()[a0_0x288db8(0x3)]('\x20')[a0_0x288db8(0x4)](Number);
    var W = WH[0x0];
    var H = WH[0x1];
    if (W == 0x0 && H == 0x0)
        break;
    var yx = [];
    var Y, X;
    for (var i = 0x0; i < H; i++) {
        var str = Arr[a0_0x288db8(0x5)]();
        str = str['replace'](/1/g, 'a');
        var arr = str[a0_0x288db8(0x3)]('\x20');
        yx[a0_0x288db8(0x6)](arr);
    }
    var cnt = 0x0;
    for (var i = 0x0; i < H; i++) {
        for (var j = 0x0; j < W; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console['log'](cnt);
}