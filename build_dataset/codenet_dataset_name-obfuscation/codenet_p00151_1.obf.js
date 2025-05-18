function count(_0x422609, _0x16182c) {
    var _0x1ede89 = [
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var _0x3504ce = [
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    var _0x140c4a = 0x1;
    for (var _0x1e8892 = 0x0; _0x1e8892 < 0x4; _0x1e8892++) {
        var _0x3e9176 = 0x1;
        for (var _0xbf52d8 = 0x1; _0xbf52d8 <= n; _0xbf52d8++) {
            var _0x14ac94 = _0x422609 + _0x1ede89[_0x1e8892] * _0xbf52d8;
            var _0xbfc2e3 = _0x16182c + _0x3504ce[_0x1e8892] * _0xbf52d8;
            if (_0x14ac94 < 0x0 || _0xbfc2e3 < 0x0 || _0x14ac94 >= n || _0xbfc2e3 >= n)
                break;
            if (yx[_0x14ac94][_0xbfc2e3] != 0x1)
                break;
            _0x3e9176++;
        }
        _0x140c4a = Math['max'](_0x140c4a, _0x3e9176);
        _0x3e9176 = 0x1;
    }
    return _0x140c4a;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = Arr['shift']()['split']('')['map'](Number);
    }
    var max = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (yx[i][j] == 0x1)
                max = Math['max'](max, count(i, j));
        }
    }
    console['log'](max);
}