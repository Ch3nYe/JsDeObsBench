function Main(_0x207bd0) {
    _0x207bd0 = _0x207bd0['split']('\x0a');
    var _0x1577d4 = Math['pow'](0x3, _0x207bd0[0x0]);
    var _0x26cc88 = 0x1;
    var _0x228002 = _0x207bd0[0x1]['split']('\x20')['map'](Number);
    _0x228002['forEach'](function (_0x52aeee) {
        if (_0x52aeee % 0x2 == 0x0)
            _0x26cc88 *= 0x2;
    });
    console['log'](_0x1577d4 - _0x26cc88);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());