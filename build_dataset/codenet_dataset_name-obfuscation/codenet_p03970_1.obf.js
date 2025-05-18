function Main(_0x3a75a0) {
    _0x3a75a0 = _0x3a75a0['trim']();
    var _0x1d2a2b = 0x0;
    var _0x579310 = 'CODEFESTIVAL2016';
    for (var _0x313cf2 = 0x0; _0x313cf2 < _0x3a75a0['length']; _0x313cf2++) {
        var _0x2cad37 = _0x3a75a0['slice'](_0x313cf2, _0x313cf2 + 0x1);
        var _0x55e81d = _0x579310['slice'](_0x313cf2, _0x313cf2 + 0x1);
        if (_0x2cad37 != _0x55e81d) {
            _0x1d2a2b++;
        }
    }
    console['log'](_0x1d2a2b);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));