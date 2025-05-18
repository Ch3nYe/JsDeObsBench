var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var pqan = arr['shift']()['split']('\x20')['map'](Number);
    if (pqan['join']('\x20') == '0\x200\x200\x200')
        break;
    var p = pqan[0x0];
    var q = pqan[0x1];
    var a = pqan[0x2];
    var n = pqan[0x3];
    var ans = 0x0;
    var loop = function (_0x4c8339, _0x15570d, _0x2c1730, _0x3997bc, _0xfdbf65) {
        if (_0xfdbf65 > 0x0) {
            if (_0xfdbf65 > n)
                return;
            if (p * _0x2c1730 == _0x15570d * q) {
                ans++;
                return;
            } else if (p * _0x2c1730 < _0x15570d * q)
                return;
        }
        for (var _0x3bbbb1 = _0x4c8339; _0x3997bc * _0x3bbbb1 <= a; _0x3bbbb1++) {
            loop(_0x3bbbb1, 0x1 * _0x2c1730 + _0x3bbbb1 * _0x15570d, _0x2c1730 * _0x3bbbb1, _0x3997bc * _0x3bbbb1, _0xfdbf65 + 0x1);
        }
    };
    loop(0x1, 0x0, 0x1, 0x1, 0x0);
    console['log'](ans);
}