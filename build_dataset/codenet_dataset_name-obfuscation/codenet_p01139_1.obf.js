function bomb(_0x267c5a, _0x59bb85) {
    cnt++;
    var _0x2e5e59 = [
        0x0,
        -0x1,
        0x1,
        0x0
    ];
    var _0xfabd3a = [
        -0x1,
        0x0,
        0x0,
        0x1
    ];
    for (var _0x63d00d = 0x0; _0x63d00d < 0x4; _0x63d00d++) {
        var _0xe53c64 = _0x59bb85 + _0x2e5e59[_0x63d00d];
        var _0x247ab0 = _0x267c5a + _0xfabd3a[_0x63d00d];
        if (_0x247ab0 >= h || _0x247ab0 < 0x0 || _0xe53c64 >= w || _0xe53c64 < 0x0)
            continue;
        if (yx[_0x247ab0][_0xe53c64] == 'S')
            continue;
        else if (yx[_0x247ab0][_0xe53c64] == '.') {
            yx[_0x247ab0][_0xe53c64] = 'S';
            bomb(_0x247ab0, _0xe53c64);
        } else {
            if (color == '' || color == yx[_0x247ab0][_0xe53c64])
                color = yx[_0x247ab0][_0xe53c64];
            else
                color = 'bad';
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wh = arr['shift']();
    if (wh == '0\x200')
        break;
    wh = wh['split']('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx['push'](arr['shift']()['split'](''));
    var ans = [
        0x0,
        0x0
    ];
    for (var y = 0x0; y < h; y++) {
        for (var x = 0x0; x < w; x++) {
            var color = '';
            var cnt = 0x0;
            if (yx[y][x] == '.') {
                yx[y][x] = 'S';
                bomb(y, x);
            }
            if (color == 'B')
                ans[0x0] += cnt;
            else if (color == 'W')
                ans[0x1] += cnt;
        }
    }
    console['log'](ans[0x0] + '\x20' + ans[0x1]);
}