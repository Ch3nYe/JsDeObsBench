var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary['push'](arr['shift']()['split']('\x20')['map'](Number));
    ary['sort'](function (_0xfc0feb, _0x3cd627) {
        if (_0xfc0feb[0x2] == _0x3cd627[0x2] && _0xfc0feb[0x3] == _0x3cd627[0x3])
            return _0xfc0feb[0x0] - _0x3cd627[0x0];
        else if (_0xfc0feb[0x2] == _0x3cd627[0x2])
            return _0xfc0feb[0x3] - _0x3cd627[0x3];
        else
            return _0x3cd627[0x2] - _0xfc0feb[0x2];
    });
    var ans = [];
    var U = [];
    for (var i = 0x0; i <= 0x3e8; i++)
        U[i] = 0x0;
    ary['forEach'](function (_0x3649b0, _0x390e3c) {
        var _0xe45b = _0x3649b0[0x0];
        var _0x1e2732 = _0x3649b0[0x1];
        if (_0x390e3c < 0xa) {
            if (U[_0x1e2732] < 0x3) {
                ans['push'](_0xe45b);
                U[_0x1e2732]++;
            }
        } else if (_0x390e3c < 0x14) {
            if (U[_0x1e2732] < 0x2) {
                ans['push'](_0xe45b);
                U[_0x1e2732]++;
            }
        } else if (_0x390e3c < 0x1a) {
            if (U[_0x1e2732] == 0x0) {
                ans['push'](_0xe45b);
                U[_0x1e2732]++;
            }
        }
    });
    console['log'](ans['join']('\x0a'));
}