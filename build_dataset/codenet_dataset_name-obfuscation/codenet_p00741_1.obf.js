function bomb(_0x3373ed, _0x3c945f) {
    var _0x5dd8f7 = [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var _0x48881c = [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    for (var _0x1f8edb = 0x0; _0x1f8edb < 0x8; _0x1f8edb++) {
        var _0x362358 = _0x3373ed + _0x5dd8f7[_0x1f8edb];
        var _0x2e2b1b = _0x3c945f + _0x48881c[_0x1f8edb];
        if (_0x362358 < 0x0 || _0x362358 >= H || _0x2e2b1b < 0x0 || _0x2e2b1b >= W)
            continue;
        if (yx[_0x362358][_0x2e2b1b] == 'a') {
            yx[_0x362358][_0x2e2b1b] = cnt;
            bomb(_0x362358, _0x2e2b1b);
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
        var str = Arr['shift']();
        str = str['replace'](/1/g, 'a');
        var arr = str['split']('\x20');
        yx['push'](arr);
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