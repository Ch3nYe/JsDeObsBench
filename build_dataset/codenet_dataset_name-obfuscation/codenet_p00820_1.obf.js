var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
arr['some'](function (_0x27b42f) {
    if (_0x27b42f == 0x0)
        return !![];
    var _0x26f2cf = 0x0;
    for (var _0x147a2f = 0x1; _0x147a2f <= 0xb5; _0x147a2f++) {
        var _0x54d89e = _0x147a2f * _0x147a2f;
        if (_0x27b42f < _0x54d89e)
            break;
        if (_0x54d89e == _0x27b42f)
            _0x26f2cf++;
        for (var _0x5d10a5 = _0x147a2f; _0x5d10a5 <= 0xb5; _0x5d10a5++) {
            var _0x340703 = _0x54d89e + _0x5d10a5 * _0x5d10a5;
            if (_0x27b42f < _0x340703)
                break;
            if (_0x340703 == _0x27b42f)
                _0x26f2cf++;
            for (var _0x4aeaee = _0x5d10a5; _0x4aeaee <= 0xb5; _0x4aeaee++) {
                var _0x5b3bc9 = _0x340703 + _0x4aeaee * _0x4aeaee;
                if (_0x27b42f < _0x5b3bc9)
                    break;
                if (_0x5b3bc9 == _0x27b42f)
                    _0x26f2cf++;
                for (var _0x187067 = _0x4aeaee; _0x187067 <= 0xb5; _0x187067++) {
                    var _0x165b1d = _0x5b3bc9 + _0x187067 * _0x187067;
                    if (_0x27b42f < _0x165b1d)
                        break;
                    if (_0x165b1d == _0x27b42f)
                        _0x26f2cf++;
                }
            }
        }
    }
    console['log'](_0x26f2cf);
});