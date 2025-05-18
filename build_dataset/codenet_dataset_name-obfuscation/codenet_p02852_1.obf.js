function Main(_0x273e98) {
    _0x273e98 = _0x273e98['split']('\x0a');
    if (_0x273e98[_0x273e98['length'] - 0x1] === '') {
        _0x273e98['pop']();
    }
    const _0x55dadd = _0x273e98[0x0]['split']('\x20')[0x0] - 0x0;
    const _0x59a674 = _0x273e98[0x0]['split']('\x20')[0x1] - 0x0;
    const _0x3a8c44 = _0x273e98[0x1];
    var _0x1aadf5 = _0x3a8c44['length'] - 0x1;
    var _0x5e37c1 = [];
    while (_0x1aadf5 > 0x0) {
        if (_0x1aadf5 <= _0x59a674) {
            _0x5e37c1['unshift'](_0x1aadf5);
            break;
        }
        for (var _0x402671 = 0x0; _0x402671 < _0x59a674; _0x402671++) {
            if (_0x3a8c44[_0x1aadf5 - _0x59a674 + _0x402671] === '0') {
                _0x5e37c1['unshift'](_0x59a674 - _0x402671);
                _0x1aadf5 = _0x1aadf5 - _0x59a674 + _0x402671;
                break;
            }
            if (_0x402671 === _0x59a674 - 0x1) {
                console['log'](-0x1);
                return;
            }
        }
    }
    console['log'](_0x5e37c1['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));