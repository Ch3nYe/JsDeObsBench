function bomb(_0x3224e6, _0x51517c, _0x55afb6) {
    max = Math['max'](max, _0x55afb6);
    if (max == n)
        return;
    var _0x2ef408 = [
        -0x1,
        0x0,
        0x1,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x1,
        0x0,
        0x1
    ];
    var _0x5f1b7c = [
        -0x2,
        -0x2,
        -0x2,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x2,
        0x2,
        0x2
    ];
    var _0x303015 = {};
    for (var _0xa9ccd = -0x1; _0xa9ccd <= 0x1; _0xa9ccd++) {
        for (var _0x2d1d97 = -0x1; _0x2d1d97 <= 0x1; _0x2d1d97++) {
            _0x303015[water[_0x55afb6 * 0x2] + _0xa9ccd + '\x20' + (water[_0x55afb6 * 0x2 + 0x1] + _0x2d1d97)] = !![];
        }
    }
    for (var _0xa9ccd = 0x0; _0xa9ccd < 0xc; _0xa9ccd++) {
        var _0x4f8296 = _0x3224e6 + _0x2ef408[_0xa9ccd];
        var _0x28280b = _0x51517c + _0x5f1b7c[_0xa9ccd];
        if (_0x4f8296 < 0x0 || _0x28280b < 0x0 || _0x4f8296 >= 0xa || _0x28280b >= 0xa)
            continue;
        if (_0x303015['hasOwnProperty'](_0x4f8296 + '\x20' + _0x28280b))
            bomb(_0x4f8296, _0x28280b, _0x55afb6 + 0x1);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var xy = Arr['shift']()['split']('\x20')['map'](Number);
    if (xy[0x0] == 0x0 && xy[0x1] == 0x0)
        break;
    var map = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var n = Arr['shift']() - 0x0;
    var water = Arr['shift']()['split']('\x20')['map'](Number);
    var max = 0x0;
    bomb(xy[0x0], xy[0x1], 0x0);
    console['log'](max == n ? 'OK' : 'NA');
}