function Main(_0x16562e) {
    _0x16562e = _0x16562e['split']('\x0a');
    if (_0x16562e[_0x16562e['length'] - 0x1] === '') {
        _0x16562e['pop']();
    }
    const _0x214283 = _0x16562e[0x0] - 0x0;
    var _0x3415c9 = [];
    var _0x196131;
    var _0x2cea24, _0x1c9c1b, _0x34b435;
    for (var _0x19acd5 = 0x1; _0x19acd5 < _0x16562e['length']; _0x19acd5++) {
        _0x196131 = _0x16562e[_0x19acd5] - 0x0;
        if (_0x3415c9['length'] === 0x0) {
            _0x3415c9['push'](_0x196131);
            continue;
        }
        if (_0x196131 <= _0x3415c9[0x0]) {
            _0x3415c9['unshift'](_0x196131);
            continue;
        }
        if (_0x196131 > _0x3415c9[_0x3415c9['length'] - 0x1]) {
            _0x3415c9[_0x3415c9['length'] - 0x1] = _0x196131;
            continue;
        }
        _0x2cea24 = 0x0;
        _0x1c9c1b = _0x3415c9['length'] - 0x1;
        while (_0x1c9c1b - _0x2cea24 > 0x1) {
            _0x34b435 = Math['floor']((_0x1c9c1b + _0x2cea24) / 0x2);
            if (_0x3415c9[_0x34b435] <= _0x196131) {
                _0x1c9c1b = _0x34b435;
            } else {
                _0x2cea24 = _0x34b435;
            }
        }
        _0x3415c9[_0x2cea24] = _0x196131;
    }
    console['log'](_0x3415c9['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));