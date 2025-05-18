function Main(_0xed009f) {
    _0xed009f = _0xed009f['split']('\x0a');
    var _0x17ab2d = _0xed009f[0x0];
    var _0x5ecf18 = _0xed009f[0x1];
    var _0xea66be = 'Yes';
    while (_0x5ecf18['length'] != 0x0) {
        for (i = 0x1; i < _0x5ecf18['length']; i++) {
            if (_0x5ecf18['substr'](0x0, 0x1) == _0x5ecf18['substr'](i, 0x1)) {
                if (_0x17ab2d['substr'](0x0, 0x1) != _0x17ab2d['substr'](i, 0x1)) {
                    _0xea66be = 'No';
                    break;
                }
            }
            if (_0x17ab2d['substr'](0x0, 0x1) == _0x17ab2d['substr'](i, 0x1)) {
                if (_0x5ecf18['substr'](0x0, 0x1) != _0x5ecf18['substr'](i, 0x1)) {
                    _0xea66be = 'No';
                    break;
                }
            }
        }
        if (_0xea66be == 'No') {
            break;
        }
        _0x17ab2d = _0x17ab2d['substr'](0x1);
        _0x5ecf18 = _0x5ecf18['substr'](0x1);
    }
    console['log']('%s', _0xea66be);
}
function debug() {
    var _0x4243f6 = document['getElementById']('input')['value'];
    Main(_0x4243f6);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));