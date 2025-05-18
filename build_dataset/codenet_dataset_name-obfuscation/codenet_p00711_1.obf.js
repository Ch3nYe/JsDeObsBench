function bomb(_0x476f9d, _0x4273d4) {
    var _0x2b3e7d = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var _0x564920 = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var _0x13f301 = 0x0; _0x13f301 < 0x4; _0x13f301++) {
        var _0x3cab89 = _0x476f9d + _0x2b3e7d[_0x13f301];
        var _0x11f8c6 = _0x4273d4 + _0x564920[_0x13f301];
        if (_0x3cab89 < 0x0 || _0x3cab89 >= H || _0x11f8c6 < 0x0 || _0x11f8c6 >= W)
            continue;
        if (yx[_0x3cab89][_0x11f8c6] == '.') {
            cnt++;
            yx[_0x3cab89][_0x11f8c6] = cnt;
            bomb(_0x3cab89, _0x11f8c6);
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