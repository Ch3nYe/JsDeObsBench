function Main(_0x40dd43) {
    _0x40dd43 = _0x40dd43['split']('\x0a');
    tmp = _0x40dd43[0x0]['split']('\x20');
    var _0x50330f = parseInt(tmp[0x0], 0xa);
    var _0x4fcc13 = parseInt(tmp[0x1], 0xa);
    var _0x2ae7d5 = divisor(_0x4fcc13);
    var _0x20cfb5 = 0x0;
    for (var _0x611d0a = 0x0; _0x611d0a < _0x2ae7d5['length']; _0x611d0a++) {
        var _0x1041f3 = _0x2ae7d5[_0x611d0a];
        if (_0x4fcc13 / _0x1041f3 >= _0x50330f) {
            _0x20cfb5 = Math['max'](_0x20cfb5, _0x1041f3);
        }
    }
    console['log']('%d', _0x20cfb5);
}
function divisor(_0x5ea00d) {
    var _0x23ebe0 = [];
    for (var _0x6762e7 = 0x1; _0x6762e7 * _0x6762e7 <= _0x5ea00d; _0x6762e7++) {
        if (_0x5ea00d % _0x6762e7 == 0x0) {
            _0x23ebe0['push'](_0x6762e7);
            if (_0x5ea00d / _0x6762e7 != _0x6762e7) {
                _0x23ebe0['push'](_0x5ea00d / _0x6762e7);
            }
        }
    }
    return _0x23ebe0;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));