function Main(_0x16f899) {
    _0x16f899 = _0x16f899['split']('\x20')['map'](_0x3fe807 => _0x3fe807 * 0x1);
    function _0x33b09b(_0x685120, _0x48f05d) {
        return _0x48f05d == 0x0 ? _0x685120 : _0x33b09b(_0x48f05d, _0x685120 % _0x48f05d);
    }
    var _0xd37bf0 = _0x33b09b(_0x16f899[0x0], _0x16f899[0x1]);
    var _0x103677 = 0x1;
    for (var _0x55e197 = 0x2; _0x55e197 * _0x55e197 < _0xd37bf0; _0x55e197++) {
        if (_0xd37bf0 % _0x55e197 === 0x0) {
            _0x103677++;
            while (_0xd37bf0 % _0x55e197 === 0x0) {
                _0xd37bf0 /= _0x55e197;
            }
        }
    }
    if (_0xd37bf0 !== 0x1) {
        _0x103677++;
    }
    console['log'](_0x103677);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));