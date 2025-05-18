function Main(_0x531843) {
    _0x531843 = _0x531843['split']('\x0a')['map'](Number);
    _0x531843['shift']();
    var _0x5e5ff5 = arrsum(_0x531843);
    if (_0x5e5ff5 == _0x531843['length']) {
        _0x5e5ff5 = 0x1;
    }
    if (_0x5e5ff5 % 0x2 == 0x1) {
        console['log']('first');
    } else {
        console['log']('second');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function arrsum(_0x11e025) {
    var _0xa182f9 = 0x0;
    for (var _0x532d71 = 0x0, _0x456ea2 = _0x11e025['length']; _0x532d71 < _0x456ea2; ++_0x532d71) {
        _0xa182f9 += _0x11e025[_0x532d71];
    }
    ;
    return _0xa182f9;
}