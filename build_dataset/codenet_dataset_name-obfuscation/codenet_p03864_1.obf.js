function Main(_0x373410) {
    _0x373410 = _0x373410['trim']()['split']('\x0a')['map'](function (_0x1ce0cb) {
        return _0x1ce0cb['split']('\x20');
    });
    var _0x45d02f = parseInt(_0x373410[0x0][0x0], 0xa);
    var _0x532da5 = parseInt(_0x373410[0x0][0x1], 0xa);
    var _0x17fe62 = _0x373410[0x1]['map'](_0x358fc2 => parseInt(_0x358fc2, 0xa));
    var _0x50f4a5 = function (_0x1027d4) {
        var _0x4d93b4 = 0x0;
        _0x1027d4['forEach'](function (_0x47e2c9) {
            _0x4d93b4 += _0x47e2c9;
        });
        return _0x4d93b4;
    };
    var _0x2fb392 = [];
    var _0x540bae = 0x0;
    for (var _0x5cca2b = 0x0; _0x5cca2b < _0x45d02f; _0x5cca2b++) {
        if (_0x17fe62[_0x5cca2b] >= _0x532da5 - _0x540bae)
            _0x2fb392['push'](_0x532da5 - _0x540bae);
        else
            _0x2fb392['push'](_0x17fe62[_0x5cca2b]);
        _0x540bae = _0x2fb392[_0x5cca2b];
    }
    console['log'](_0x50f4a5(_0x17fe62) - _0x50f4a5(_0x2fb392));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));