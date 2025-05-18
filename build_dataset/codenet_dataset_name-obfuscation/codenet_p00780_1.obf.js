function prime(_0x4e7e69) {
    var _0xcbc714 = [];
    for (var _0x3aac9a = 0x0; _0x3aac9a <= _0x4e7e69; _0x3aac9a++)
        _0xcbc714[_0x3aac9a] = _0x3aac9a;
    _0xcbc714[0x0] = ![];
    _0xcbc714[0x1] = ![];
    var _0x47927b = Math['floor'](Math['sqrt'](_0x4e7e69));
    for (var _0x3aac9a = 0x2; _0x3aac9a <= _0x47927b; _0x3aac9a++) {
        if (_0xcbc714[_0x3aac9a] == ![])
            continue;
        for (var _0x571937 = _0x3aac9a + _0x3aac9a; _0x571937 <= _0x4e7e69; _0x571937 += _0x3aac9a) {
            _0xcbc714[_0x571937] = ![];
        }
    }
    var _0xc3af4b = [];
    for (var _0x3aac9a = 0x0; _0x3aac9a <= _0x4e7e69; _0x3aac9a++) {
        if (_0xcbc714[_0x3aac9a] !== ![])
            _0xc3af4b['push'](_0xcbc714[_0x3aac9a]);
    }
    return _0xc3af4b;
}
var p = prime(0xc350);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var cnt = 0x0;
    var k = p['length'] - 0x1;
    for (var i = 0x0; i < p['length']; i++) {
        while (p[i] + p[k] > n)
            k--;
        if (k < i)
            break;
        if (p[i] + p[k] == n)
            cnt++;
    }
    console['log'](cnt);
}