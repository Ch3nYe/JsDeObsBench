function prime(_0x419f78) {
    var _0x1530be = [];
    for (var _0x3831f4 = 0x0; _0x3831f4 <= _0x419f78; _0x3831f4++)
        _0x1530be[_0x3831f4] = _0x3831f4;
    _0x1530be[0x0] = ![];
    _0x1530be[0x1] = ![];
    var _0x22288d = Math['floor'](Math['sqrt'](_0x419f78));
    for (var _0x3831f4 = 0x2; _0x3831f4 <= _0x22288d; _0x3831f4++) {
        if (_0x1530be[_0x3831f4] == ![])
            continue;
        for (var _0xa35e7a = _0x3831f4 + _0x3831f4; _0xa35e7a <= _0x419f78; _0xa35e7a += _0x3831f4) {
            _0x1530be[_0xa35e7a] = ![];
        }
    }
    var _0xda1c7b = [];
    for (var _0x3831f4 = 0x0; _0x3831f4 <= _0x419f78; _0x3831f4++) {
        if (_0x1530be[_0x3831f4] !== ![])
            _0xda1c7b['push'](_0x1530be[_0x3831f4]);
    }
    return _0xda1c7b;
}
var PRIME = prime(0x186a0);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['some'](function (_0x17917a) {
    if (_0x17917a == '0\x200\x200')
        return !![];
    var _0x1c56d6 = _0x17917a['split']('\x20')['map'](Number);
    var _0x52767f = _0x1c56d6[0x0];
    var _0x4e6d53 = _0x1c56d6[0x1];
    var _0x16f22a = _0x1c56d6[0x2];
    var _0x2a2834 = [
        0x0,
        0x0,
        0x0
    ];
    for (var _0x4aebd7 = 0x0; _0x4aebd7 < PRIME['length']; _0x4aebd7++) {
        for (var _0x54e361 = _0x4aebd7; _0x54e361 < PRIME['length']; _0x54e361++) {
            var _0x9b195d = PRIME[_0x4aebd7] * PRIME[_0x54e361];
            if (_0x9b195d > _0x52767f)
                break;
            if (PRIME[_0x54e361] * _0x4e6d53 <= PRIME[_0x4aebd7] * _0x16f22a && _0x2a2834[0x2] < _0x9b195d)
                _0x2a2834 = [
                    PRIME[_0x4aebd7],
                    PRIME[_0x54e361],
                    _0x9b195d
                ];
        }
    }
    console['log'](_0x2a2834[0x0] + '\x20' + _0x2a2834[0x1]);
});