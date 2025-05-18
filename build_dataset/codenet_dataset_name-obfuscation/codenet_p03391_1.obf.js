'use strict';
function myin() {
    return require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(_0x55039f) {
    console['log'](_0x55039f);
}
function myconv(_0xcd9811, _0x16328a) {
    switch (_0x16328a) {
    case 0x0:
        return _0xcd9811;
    case 0x1:
        return parseInt(_0xcd9811);
    case 0x2:
        return _0xcd9811['split']('\x20');
    case 0x3:
        return _0xcd9811['split']('\x0a');
    case 0x4:
        return _0xcd9811['split']('\x20')['map'](_0x5b5a4f => Number(_0x5b5a4f));
    case 0x5:
        return _0xcd9811['split']('\x0a')['map'](_0x26dd25 => Number(_0x26dd25));
    case 0x6:
        return _0xcd9811['split']('');
    case 0x7:
        return _0xcd9811['split']('')['map'](_0x1abbd8 => Number(_0x1abbd8));
    }
}
function Main(_0x5c0e6a) {
    _0x5c0e6a = myconv(_0x5c0e6a, 0x3);
    _0x5c0e6a['shift']();
    var _0x45ecef = 0x0;
    for (var _0xe2246a = 0x0; _0xe2246a < _0x5c0e6a['length']; _0xe2246a++) {
        var _0x7b65cc = parseInt(_0x5c0e6a[_0xe2246a]['split']('\x20')[0x0]);
        var _0x377bf7 = parseInt(_0x5c0e6a[_0xe2246a]['split']('\x20')[0x1]);
        if (_0x7b65cc < _0x377bf7) {
            _0x45ecef += _0x377bf7;
        }
    }
    myout(_0x45ecef);
}
Main(myin());