'use strict';
function Main(_0x545a64) {
    _0x545a64 = _0x545a64['split']('\x0a');
    let _0x3dad6e = parseInt(_0x545a64[0x0]);
    let _0x13a817 = '';
    if (_0x3dad6e === 0x0) {
        console['log'](0x0);
        return;
    }
    while (_0x3dad6e !== 0x0) {
        _0x13a817 = String(Math['abs'](_0x3dad6e % -0x2)) + _0x13a817;
        if (_0x3dad6e % -0x2 < 0x0)
            _0x3dad6e += _0x3dad6e < 0x0 ? -0x1 : 0x1;
        _0x3dad6e = parseInt(_0x3dad6e / -0x2);
    }
    console['log'](_0x13a817);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));