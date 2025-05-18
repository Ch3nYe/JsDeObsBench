function comb(_0x32f1c6) {
    var _0x254f28 = [];
    _0x254f28[0x0] = -0x1;
    var _0x274766 = 0x1;
    _0x254f28[0x1] = 0x0;
    var _0x5707d5 = [];
    while (_0x274766 != 0x0) {
        for (var _0x317b59 = _0x274766 + 0x1; _0x317b59 <= _0x32f1c6; _0x317b59++) {
            _0x254f28[_0x317b59] = _0x254f28[_0x317b59 - 0x1] + 0x1;
        }
        var _0x366121 = [];
        for (var _0x317b59 = 0x1; _0x317b59 <= _0x32f1c6; _0x317b59++) {
            _0x366121['push'](_0x254f28[_0x317b59]);
        }
        _0x5707d5['push'](_0x366121);
        _0x274766 = _0x32f1c6;
        while (_0x254f28[_0x274766] == 0x9 - _0x32f1c6 + _0x274766)
            _0x274766 = _0x274766 - 0x1;
        _0x254f28[_0x274766] = _0x254f28[_0x274766] + 0x1;
    }
    return _0x5707d5;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var nums = line['split']('\x20');
    var n = +nums[0x0];
    var s = +nums[0x1];
    if (n + s == 0x0)
        break;
    var c = comb(n);
    var cnt = 0x0;
    for (var i = 0x0; i < c['length']; i++) {
        var arr = c[i];
        if (s == arr['reduce'](function (_0xcb7b8e, _0x24ee8f) {
                return _0xcb7b8e + _0x24ee8f;
            })) {
            cnt++;
        }
    }
    console['log'](cnt);
}