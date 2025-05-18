function bomb(_0x316dc7, _0x22ce54, _0x401f44) {
    var _0x18d18c = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var _0x53e5c4 = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var _0x2d022b = 0x0; _0x2d022b < 0x4; _0x2d022b++) {
        var _0x55ccd7 = _0x316dc7 + _0x18d18c[_0x2d022b];
        var _0xfcaa38 = _0x22ce54 + _0x53e5c4[_0x2d022b];
        if (_0x55ccd7 < 0x0 || _0x55ccd7 >= n[0x0] || _0xfcaa38 < 0x0 || _0xfcaa38 >= n[0x1])
            continue;
        if (_0x401f44 == yx[_0x55ccd7][_0xfcaa38]) {
            yx[_0x55ccd7][_0xfcaa38] = 0x0;
            bomb(_0x55ccd7, _0xfcaa38, _0x401f44);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']()['split']('\x20')['map'](Number);
    if (n[0x0] == 0x0 && n[0x1] == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n[0x0]; i++) {
        var arr = Arr['shift']()['split']('');
        yx['push'](arr);
    }
    var cnt = 0x0;
    for (var i = 0x0; i < n[0x0]; i++) {
        for (var j = 0x0; j < n[0x1]; j++) {
            var v = yx[i][j];
            if (v == '@' || v == '#' || v == '*') {
                cnt++;
                yx[i][j] = 0x0;
                bomb(i, j, v);
            }
        }
    }
    console['log'](cnt);
}