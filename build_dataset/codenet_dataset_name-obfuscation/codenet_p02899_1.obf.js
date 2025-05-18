function Main(_0x6510f9) {
    _0x6510f9 = _0x6510f9['split']('\x0a');
    var _0x2318af = [];
    var _0x1ea0fa = _0x6510f9[0x1]['split']('\x20')['map'](Number);
    for (var _0x13d6b4 = 0x0; _0x13d6b4 < _0x1ea0fa['length']; _0x13d6b4++) {
        _0x2318af['push']([
            _0x1ea0fa[_0x13d6b4],
            _0x13d6b4 + 0x1
        ]);
    }
    _0x2318af = _0x2318af['sort'](function (_0x2991b6, _0x18ad9b) {
        return _0x2991b6[0x0] - _0x18ad9b[0x0];
    });
    var _0xecef7b = '';
    for (_0x13d6b4 = 0x0; _0x13d6b4 < _0x2318af['length']; _0x13d6b4++) {
        _0xecef7b += _0x2318af[_0x13d6b4][0x1];
        _0xecef7b += '\x20';
    }
    console['log'](_0xecef7b['trim']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());