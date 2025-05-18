var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var ans = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20');
        var name = arr['shift']();
        arr = arr['map'](Number);
        arr['unshift'](name);
        (function (_0x146df2, _0x1959e2, _0x2ebaa9, _0x312c48, _0x11540e, _0x2c676f, _0x194dfc, _0x5c5d96, _0x49e57a, _0x43b168) {
            var _0x5b42d0 = _0x2ebaa9 + _0x312c48 + _0x11540e + (_0x2c676f + _0x194dfc) * _0x43b168;
            var _0x3b0da0 = _0x5c5d96 * _0x49e57a * _0x43b168 - _0x1959e2;
            ans['push']([
                _0x146df2,
                _0x3b0da0 / _0x5b42d0
            ]);
        }['apply'](null, arr));
    }
    ans['sort'](function (_0x4ec84b, _0x5e8b4b) {
        if (_0x4ec84b[0x1] == _0x5e8b4b[0x1])
            return _0x4ec84b[0x0]['toString']() > _0x5e8b4b[0x0]['toString']() ? 0x1 : -0x1;
        else
            return _0x5e8b4b[0x1] - _0x4ec84b[0x1];
    });
    ans['forEach'](function (_0x49f128) {
        console['log'](_0x49f128[0x0]);
    });
    console['log']('#');
}