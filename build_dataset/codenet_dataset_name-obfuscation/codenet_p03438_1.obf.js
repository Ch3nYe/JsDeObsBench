function Main(_0x4b62c6) {
    _0x4b62c6 = _0x4b62c6['split']('\x0a');
    var _0x6f018e = parseInt(_0x4b62c6[0x0]);
    a = new Array(_0x6f018e)['fill'](0x0);
    b = new Array(_0x6f018e)['fill'](0x0);
    tmpa = _0x4b62c6[0x1]['split']('\x20');
    tmpb = _0x4b62c6[0x2]['split']('\x20');
    var _0x35aa4c = 0x0;
    var _0x529c9d = 0x0;
    var _0x320cfc = 0x0;
    for (i = 0x0; i < _0x6f018e; i++) {
        a[i] = parseInt(tmpa[i]);
        _0x35aa4c += a[i];
        b[i] = parseInt(tmpb[i]);
        _0x529c9d += b[i];
        _0x320cfc += Math['abs'](a[i] - b[i]);
    }
    var _0x10db4f = 'No';
    if (_0x35aa4c <= _0x529c9d && _0x320cfc <= (_0x529c9d - _0x35aa4c) * 0x3) {
        _0x10db4f = 'Yes';
    }
    console['log']('%s', _0x10db4f);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));