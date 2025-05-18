function seach(_0x2940cd, _0x4afdb8) {
    if (yx[_0x2940cd][_0x4afdb8] == '*')
        return 0x0;
    var _0x5198cd = [
        -0x1,
        -0x1,
        0x0
    ];
    var _0xfaa30a = [
        -0x1,
        0x0,
        -0x1
    ];
    var _0x2de238 = n;
    for (var _0x355e7d = 0x0; _0x355e7d < 0x3; _0x355e7d++) {
        var _0x5a3726 = _0x2940cd + _0x5198cd[_0x355e7d];
        var _0x354bdd = _0x4afdb8 + _0xfaa30a[_0x355e7d];
        if (_0x5a3726 < 0x0 || _0x5a3726 >= n || _0x354bdd < 0x0 || _0x354bdd >= n)
            return 0x1;
        _0x2de238 = Math['min'](_0x2de238, yx[_0x5a3726][_0x354bdd]);
    }
    return _0x2de238 + 0x1;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var max = 0x0;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var str = Arr['shift']();
        yx['push'](str['split'](''));
    }
    for (var y = 0x0; y < n; y++) {
        for (var x = 0x0; x < n; x++) {
            yx[y][x] = seach(y, x);
            max = Math['max'](max, yx[y][x]);
        }
    }
    console['log'](max);
}