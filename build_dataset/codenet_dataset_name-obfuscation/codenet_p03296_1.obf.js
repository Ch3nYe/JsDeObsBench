'use strict';
function myin() {
    return require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(_0x5df302) {
    console['log'](_0x5df302);
}
function myconv(_0x37efdf, _0x4810b1) {
    switch (_0x4810b1) {
    case 0x0:
        return _0x37efdf;
    case 0x1:
        return parseInt(_0x37efdf);
    case 0x2:
        return _0x37efdf['split']('\x20');
    case 0x3:
        return _0x37efdf['split']('\x0a');
    case 0x4:
        return _0x37efdf['split']('\x20')['map'](_0x16191c => Number(_0x16191c));
    case 0x5:
        return _0x37efdf['split']('\x0a')['map'](_0x4260a3 => Number(_0x4260a3));
    case 0x6:
        return _0x37efdf['split']('');
    case 0x7:
        return _0x37efdf['split']('')['map'](_0x33880c => Number(_0x33880c));
    }
}
function Main(_0x10950f) {
    _0x10950f = myconv(_0x10950f, 0x3);
    var _0x59300b = myconv(_0x10950f[0x0], 0x1);
    var _0x4eb45a = myconv(_0x10950f[0x1], 0x4);
    var _0x45494c = 0x0;
    for (var _0x528f89 = 0x0; _0x528f89 < _0x59300b - 0x1; _0x528f89++) {
        var _0x5e4b6e = _0x4eb45a[_0x528f89];
        var _0x680dea = _0x4eb45a[_0x528f89 + 0x1];
        if (_0x5e4b6e == _0x680dea) {
            _0x45494c++;
            _0x4eb45a[_0x528f89 + 0x1] = -0x1;
        }
    }
    myout(_0x45494c);
}
Main(myin());