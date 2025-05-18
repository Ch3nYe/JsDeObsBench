(function (_0x19839e) {
    var _0x50dc1a = _0x19839e['replace'](/\r/g, '')['split']('\x0a'), _0x310d02 = [], _0x287ecc, _0x3ae3ce, _0xbf9d2c, _0x151c5d, _0x2d8c7e;
    _0x287ecc = parseInt(_0x50dc1a['shift']());
    _0xbf9d2c = 0x65;
    max_value = -0x1;
    while (_0x287ecc--) {
        _0x3ae3ce = _0x50dc1a['shift']()['split']('\x20');
        _0x151c5d = parseInt(_0x3ae3ce[0x0]);
        _0x2d8c7e = parseInt(_0x3ae3ce[0x1]);
        if (_0x2d8c7e > max_value || _0x2d8c7e === max_value && _0x151c5d < _0xbf9d2c) {
            _0xbf9d2c = _0x151c5d;
            max_value = _0x2d8c7e;
        }
    }
    console['log'](_0xbf9d2c + '\x20' + max_value);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));