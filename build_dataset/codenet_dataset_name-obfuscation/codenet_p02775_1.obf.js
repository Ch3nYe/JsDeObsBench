function Main(_0x2ede04) {
    _0x2ede04 = _0x2ede04['split']('\x0a');
    if (_0x2ede04[_0x2ede04['length'] - 0x1] === '') {
        _0x2ede04['pop']();
    }
    const _0x251ae9 = _0x2ede04[0x0];
    var _0x2c0f9a = 0x1;
    var _0xa420aa = 0x0;
    var _0x829077, _0x3041de;
    for (var _0xb5d325 = 0x0; _0xb5d325 < _0x251ae9['length']; _0xb5d325++) {
        _0x829077 = Math['min'](0x9 - _0x251ae9[_0xb5d325] + _0x2c0f9a, 0x1 + _0xa420aa + (_0x251ae9[_0xb5d325] - 0x0));
        _0x3041de = Math['min'](0xa - _0x251ae9[_0xb5d325] + _0x2c0f9a, _0xa420aa + (_0x251ae9[_0xb5d325] - 0x0));
        _0x2c0f9a = _0x829077;
        _0xa420aa = _0x3041de;
    }
    console['log'](_0xa420aa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));