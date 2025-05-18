function prime(_0x5b8b3d) {
    var _0x269a0f = [];
    for (var _0x46e435 = 0x0; _0x46e435 <= _0x5b8b3d; _0x46e435++)
        _0x269a0f[_0x46e435] = _0x46e435;
    _0x269a0f[0x0] = ![];
    _0x269a0f[0x1] = ![];
    var _0x5b8f0b = Math['floor'](Math['sqrt'](_0x5b8b3d));
    for (var _0x46e435 = 0x2; _0x46e435 <= _0x5b8f0b; _0x46e435++) {
        if (_0x269a0f[_0x46e435] == ![])
            continue;
        for (var _0x37b273 = _0x46e435 + _0x46e435; _0x37b273 <= _0x5b8b3d; _0x37b273 += _0x46e435) {
            _0x269a0f[_0x37b273] = ![];
        }
    }
    var _0x3d7b83 = [];
    for (var _0x46e435 = 0x0; _0x46e435 <= _0x5b8b3d; _0x46e435++) {
        if (_0x269a0f[_0x46e435] !== ![])
            _0x3d7b83['push'](_0x269a0f[_0x46e435]);
    }
    return _0x3d7b83;
}
var p = prime(0x2710);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var cnt = [];
for (var i = 0x0; i <= 0x2710; i++)
    cnt[i] = 0x0;
p['forEach'](function (_0x2f3f9c, _0x4fefd6) {
    cnt[_0x2f3f9c]++;
    for (var _0x3ff8d3 = _0x4fefd6 + 0x1; _0x3ff8d3 < p['length']; _0x3ff8d3++) {
        _0x2f3f9c += p[_0x3ff8d3];
        if (_0x2f3f9c > 0x2710)
            break;
        cnt[_0x2f3f9c]++;
    }
});
arr['some'](function (_0x41bdd1) {
    if (_0x41bdd1 == 0x0)
        return !![];
    console['log'](cnt[_0x41bdd1]);
});