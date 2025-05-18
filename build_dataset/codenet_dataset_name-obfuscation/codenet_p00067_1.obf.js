function bomb(_0x4c6d88, _0x2e94e6) {
    var _0x12da9d = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var _0x57886c = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var _0x58c4a9 = 0x0; _0x58c4a9 < 0x4; _0x58c4a9++) {
        var _0x1bed6a = _0x4c6d88 + _0x12da9d[_0x58c4a9];
        var _0x4f2950 = _0x2e94e6 + _0x57886c[_0x58c4a9];
        if (_0x1bed6a < 0x0 || _0x1bed6a >= 0xc || _0x4f2950 < 0x0 || _0x4f2950 >= 0xc)
            continue;
        if (yx[_0x1bed6a][_0x4f2950] == 'a') {
            yx[_0x1bed6a][_0x4f2950] = cnt;
            bomb(_0x1bed6a, _0x4f2950);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = 0x0;
var cnt = 0x0;
var yx = [];
for (var I = 0x0; I < Arr['length']; I++) {
    n++;
    var v = Arr[I]['replace'](/1/g, 'a');
    var arr = v['split']('');
    yx['push'](arr);
    if (n != 0xc)
        continue;
    cnt = 0x0;
    for (var i = 0x0; i < 0xc; i++) {
        for (var j = 0x0; j < 0xc; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console['log'](cnt);
    n = 0x0;
    yx = [];
    I++;
}