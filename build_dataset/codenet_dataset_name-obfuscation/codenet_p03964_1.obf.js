function Main(_0x13e4f8) {
    _0x13e4f8 = _0x13e4f8['split']('\x0a');
    var _0x4e7536 = parseInt(_0x13e4f8[0x0]);
    t = new Array(_0x4e7536)['fill'](0x0);
    a = new Array(_0x4e7536)['fill'](0x0);
    for (i = 0x0; i < _0x4e7536; i++) {
        t[i] = parseInt(_0x13e4f8[i + 0x1]['split']('\x20')[0x0]);
        a[i] = parseInt(_0x13e4f8[i + 0x1]['split']('\x20')[0x1]);
    }
    var _0x1368e0 = t[0x0];
    var _0x27a4ac = a[0x0];
    for (i = 0x1; i < _0x4e7536; i++) {
        if (Math['ceil'](_0x1368e0 / t[i]) * t[i] / t[i] * a[i] >= _0x27a4ac) {
            _0x1368e0 = Math['ceil'](_0x1368e0 / t[i]) * t[i];
            _0x27a4ac = Math['ceil'](_0x1368e0 / t[i]) * t[i] / t[i] * a[i];
        } else {
            _0x1368e0 = Math['ceil'](_0x27a4ac / a[i]) * a[i] / a[i] * t[i];
            _0x27a4ac = Math['ceil'](_0x27a4ac / a[i]) * a[i];
        }
    }
    var _0xd6f956 = _0x27a4ac + _0x1368e0;
    console['log']('%s', _0xd6f956);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));