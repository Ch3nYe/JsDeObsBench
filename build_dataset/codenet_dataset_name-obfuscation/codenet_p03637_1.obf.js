function Main(_0x3d6fc9) {
    _0x3d6fc9 = _0x3d6fc9['split']('\x0a');
    var _0x1ec0f6 = parseInt(_0x3d6fc9[0x0]);
    tmp = _0x3d6fc9[0x1]['split']('\x20');
    a = new Array(_0x1ec0f6);
    var _0x53adee = 0x0;
    var _0x522602 = 0x0;
    var _0x30c2c2 = 0x0;
    for (i = 0x0; i < _0x1ec0f6; i++) {
        a[i] = parseInt(tmp[i]);
        if (a[i] % 0x4 == 0x0) {
            _0x30c2c2++;
        } else if (a[i] % 0x2 == 0x0) {
            _0x522602++;
        } else {
            _0x53adee++;
        }
    }
    var _0x5a16e8 = 'No';
    if (_0x53adee <= _0x30c2c2) {
        _0x5a16e8 = 'Yes';
    } else if (_0x30c2c2 + 0x1 == _0x53adee && _0x522602 == 0x0) {
        _0x5a16e8 = 'Yes';
    }
    console['log']('%s', _0x5a16e8);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));