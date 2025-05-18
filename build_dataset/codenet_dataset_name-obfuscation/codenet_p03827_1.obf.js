function Main(_0x221762) {
    _0x221762 = _0x221762['split']('\x0a');
    var _0x35bb77 = _0x221762[0x0];
    var _0x3255ed = _0x221762[0x1];
    var _0x4d56b1 = 0x0;
    var _0x6b108e = 0x0;
    for (var _0x3beeb7 = 0x0; _0x3beeb7 < _0x3255ed['length']; _0x3beeb7++) {
        if (_0x3255ed[_0x3beeb7] === 'I') {
            _0x6b108e++;
        } else {
            _0x6b108e--;
        }
        if (_0x4d56b1 < _0x6b108e) {
            _0x4d56b1 = _0x6b108e;
        }
    }
    console['log'](_0x4d56b1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));