function prime(_0x54a56e) {
    var _0x5e6048 = [];
    for (var _0xe76752 = 0x0; _0xe76752 <= _0x54a56e; _0xe76752++)
        _0x5e6048[_0xe76752] = _0xe76752;
    _0x5e6048[0x0] = ![];
    _0x5e6048[0x1] = ![];
    var _0x433b43 = Math['floor'](Math['sqrt'](_0x54a56e));
    for (var _0xe76752 = 0x2; _0xe76752 <= _0x433b43; _0xe76752++) {
        if (_0x5e6048[_0xe76752] == ![])
            continue;
        for (var _0x1382f4 = _0xe76752 + _0xe76752; _0x1382f4 <= _0x54a56e; _0x1382f4 += _0xe76752) {
            _0x5e6048[_0x1382f4] = ![];
        }
    }
    var _0x121b75 = {};
    for (var _0xe76752 = 0x0; _0xe76752 <= _0x54a56e; _0xe76752++) {
        if (_0x5e6048[_0xe76752] !== ![])
            _0x121b75[_0x5e6048[_0xe76752]] = !![];
    }
    return _0x121b75;
}
var p = prime(0xf4240);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var I = 0x0; I < Arr['length']; I++) {
    var v = Arr[I];
    if (v == 0x0)
        break;
    var cnt = 0x0;
    var obj = {};
    for (var k in p) {
        if (k >= v)
            break;
        if (obj['hasOwnProperty'](k))
            continue;
        obj[v - k] = !![];
        if (p['hasOwnProperty'](v - k))
            cnt++;
    }
    console['log'](cnt);
}