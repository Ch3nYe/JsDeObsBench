function Main(_0x2787ac) {
    _0x2787ac = _0x2787ac['split']('\x0a');
    tmp = _0x2787ac[0x0]['split']('\x20');
    var _0x13909d = parseInt(tmp[0x0]);
    a = new Array(_0x13909d)['fill'](0x0);
    for (i = 0x0; i < _0x13909d; i++) {
        a[i] = parseInt(_0x2787ac[0x1]['split']('\x20')[i]);
    }
    b = new Array(_0x13909d)['fill'](0x0);
    var _0x34bfaa = Math['pow'](0xa, 0x9);
    var _0x4e57f1 = -0x1;
    for (i = 0x0; i < _0x13909d; i++) {
        _0x34bfaa = Math['min'](_0x34bfaa, a[i]);
        if (_0x4e57f1 < a[i] - _0x34bfaa) {
            ans = 0x1;
        }
        if (_0x4e57f1 == a[i] - _0x34bfaa) {
            ans++;
        }
        _0x4e57f1 = Math['max'](_0x4e57f1, a[i] - _0x34bfaa);
    }
    console['log']('%s', ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));