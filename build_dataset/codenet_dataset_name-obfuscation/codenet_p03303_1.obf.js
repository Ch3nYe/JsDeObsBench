function myout(_0x3b71e6) {
    console['log'](_0x3b71e6);
}
function Main(_0x445e8b) {
    _0x445e8b = _0x445e8b['split']('\x0a');
    var _0x24b8d6 = _0x445e8b[0x0];
    var _0x40bd48 = parseInt(_0x445e8b[0x1]);
    if (_0x40bd48 == 0x1) {
        myout(_0x24b8d6);
        return;
    }
    _0x24b8d6 = _0x24b8d6['split']('');
    var _0x5d2f77 = [];
    while (_0x24b8d6['length'] != 0x0) {
        var _0x1b46fb = '';
        for (var _0x18573a = 0x0; _0x18573a < _0x40bd48; _0x18573a++) {
            if (_0x24b8d6['length'] != 0x0) {
                _0x1b46fb += _0x24b8d6['shift']();
            }
        }
        _0x5d2f77['push'](_0x1b46fb);
    }
    var _0x109fa9 = '';
    for (var _0x18573a = 0x0; _0x18573a < _0x5d2f77['length']; _0x18573a++) {
        _0x109fa9 += _0x5d2f77[_0x18573a]['slice'](0x0, 0x1);
    }
    myout(_0x109fa9);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());