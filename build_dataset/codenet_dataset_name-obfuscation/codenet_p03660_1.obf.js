function Main(_0x524038) {
    _0x524038 = _0x524038['split']('\x0a');
    var _0x9f2601 = parseInt(_0x524038[0x0]);
    a = new Array(_0x9f2601 - 0x1)['fill'](0x0);
    b = new Array(_0x9f2601 - 0x1)['fill'](0x0);
    for (i = 0x0; i < _0x9f2601 - 0x1; i++) {
        tmp = _0x524038[i + 0x1]['split']('\x20');
        a[i] = parseInt(tmp[0x0]) - 0x1;
        b[i] = parseInt(tmp[0x1]) - 0x1;
    }
    d1 = new Array(_0x9f2601)['fill'](_0x9f2601);
    d1[0x0] = 0x0;
    d2 = new Array(_0x9f2601)['fill'](_0x9f2601);
    d2[_0x9f2601 - 0x1] = 0x0;
    function _0x32b819(_0x3b4162, _0x70cdda) {
        for (i = 0x0; i < _0x9f2601 - 0x1; i++) {
            if (a[i] == _0x3b4162 && _0x70cdda[b[i]] > _0x70cdda[a[i]]) {
                _0x70cdda[b[i]] = _0x70cdda[a[i]] + 0x1;
                var _0x196ace = i;
                _0x32b819(b[i], _0x70cdda);
                i = _0x196ace;
            }
            if (b[i] == _0x3b4162 && _0x70cdda[a[i]] > _0x70cdda[b[i]]) {
                _0x70cdda[a[i]] = _0x70cdda[b[i]] + 0x1;
                var _0x196ace = i;
                _0x32b819(a[i], _0x70cdda);
                i = _0x196ace;
            }
        }
        return _0x70cdda;
    }
    d1 = _0x32b819(0x0, d1);
    d2 = _0x32b819(_0x9f2601 - 0x1, d2);
    var _0x422517 = 0x0;
    for (i = 0x0; i < _0x9f2601; i++) {
        if (i != 0x0 && i != _0x9f2601 - 0x1) {
            if (d1[i] <= d2[i]) {
                _0x422517++;
            }
        }
    }
    var _0x4095e4 = 'Fennec';
    if (_0x422517 <= _0x9f2601 - 0x2 - _0x422517) {
        _0x4095e4 = 'Snuke';
    }
    console['log']('%s', _0x4095e4);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));