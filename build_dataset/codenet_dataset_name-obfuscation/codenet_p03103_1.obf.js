function Main(_0x523dfc) {
    _0x523dfc = _0x523dfc['split']('\x0a');
    inputStr = _0x523dfc[0x0]['split']('\x20');
    var _0x50f10a = Number['parseInt'](inputStr[0x0]);
    var _0x15e912 = Number['parseInt'](inputStr[0x1]);
    var _0x34b25e = [];
    var _0x31c63e = [];
    var _0x41a28e = 0x0;
    var _0x2a668e = 0x0;
    var _0x302204 = _0x15e912;
    for (i = 0x0; i < _0x50f10a; i++) {
        _0x34b25e = _0x523dfc[i + 0x1]['split']('\x20');
        _0x31c63e[i] = _0x34b25e['map'](_0x350ee9 => parseInt(_0x350ee9, 0xa));
        _0x31c63e[i][0x0] = ('0000000000' + _0x31c63e[i][0x0])['substr'](-0xa);
    }
    _0x31c63e['sort']();
    for (i = 0x0; i < _0x50f10a; i++) {
        if (_0x302204 > parseInt(_0x31c63e[i][0x1])) {
            _0x2a668e += parseInt(_0x31c63e[i][0x0]) * parseInt(_0x31c63e[i][0x1]);
            _0x302204 -= parseInt(_0x31c63e[i][0x1]);
        } else {
            _0x2a668e += parseInt(_0x31c63e[i][0x0]) * _0x302204;
            break;
        }
    }
    console['log'](_0x2a668e);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));