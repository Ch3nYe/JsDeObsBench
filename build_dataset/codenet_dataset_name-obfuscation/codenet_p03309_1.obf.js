function myin() {
    return require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(_0x1dd776) {
    console['log'](_0x1dd776);
}
function myconv(_0x3df57f, _0x20cf09) {
    switch (_0x20cf09) {
    case 0x0:
        return _0x3df57f;
    case 0x1:
        return parseInt(_0x3df57f);
    case 0x2:
        return _0x3df57f['split']('\x20');
    case 0x3:
        return _0x3df57f['split']('\x0a');
    case 0x4:
        return _0x3df57f['split']('\x20')['map'](_0x2fd280 => Number(_0x2fd280));
    case 0x5:
        return _0x3df57f['split']('\x0a')['map'](_0x5ab54a => Number(_0x5ab54a));
    case 0x6:
        return _0x3df57f['split']('');
    case 0x7:
        return _0x3df57f['split']('')['map'](_0x5307a8 => Number(_0x5307a8));
    }
}
function Main(_0x515af4) {
    _0x515af4 = myconv(_0x515af4, 0x3);
    var _0xcd96dd = myconv(_0x515af4[0x0], 0x1);
    var _0x47d94c = myconv(_0x515af4[0x1], 0x4);
    var _0x51393d = [];
    for (var _0x1242cf = 0x0; _0x1242cf < _0xcd96dd; _0x1242cf++) {
        _0x51393d['push'](_0x47d94c[_0x1242cf] - (_0x1242cf + 0x1));
    }
    _0x51393d['sort'](function (_0xd5eac, _0x4c671d) {
        return _0xd5eac - _0x4c671d;
    });
    var _0x51c75e = _0x51393d[myconv(_0x51393d['length'] / 0x2, 0x1)];
    var _0x28aa04 = 0x0;
    for (var _0x1242cf = 0x0; _0x1242cf < _0xcd96dd; _0x1242cf++) {
        _0x28aa04 += Math['abs'](_0x47d94c[_0x1242cf] - (_0x51c75e + (_0x1242cf + 0x1)));
    }
    myout(_0x28aa04);
}
Main(myin());