function bomb(y, x) {
    var xBzPoq = {
        'QjUzw': function (x, y) {
            return x < y;
        },
        'qZYAK': function (x, y) {
            return x + y;
        },
        'vQnHX': function (x, y) {
            return x + y;
        },
        'PCTpg': function (x, y) {
            return x < y;
        },
        'BhCIT': function (x, y) {
            return x < y;
        },
        'gJdXo': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
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
    for (var i = 0x0; xBzPoq['QjUzw'](i, 0x4); i++) {
        var yy = xBzPoq['qZYAK'](y, dy[i]);
        var xx = xBzPoq['vQnHX'](x, dx[i]);
        if (xBzPoq['PCTpg'](yy, 0x0) || yy >= H || xBzPoq['BhCIT'](xx, 0x0) || xx >= W)
            continue;
        if (yx[yy][xx] == '.') {
            cnt++;
            yx[yy][xx] = cnt;
            xBzPoq['gJdXo'](bomb, yy, xx);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var WH = Arr['shift']()['split']('\x20')['map'](Number);
    var W = WH[0x0];
    var H = WH[0x1];
    if (W == 0x0 && H == 0x0)
        break;
    var yx = [];
    var Y, X;
    for (var i = 0x0; i < H; i++) {
        var arr = Arr['shift']()['split']('');
        if (arr['indexOf']('@') != -0x1) {
            Y = i;
            X = arr['indexOf']('@');
        }
        yx['push'](arr);
    }
    var cnt = 0x1;
    bomb(Y, X);
    console['log'](cnt);
}