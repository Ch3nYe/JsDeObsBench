var m = [
    -0x1,
    0x2,
    0x3,
    0x5,
    0x7,
    0xb,
    0xd
];
function p(_0x3ace81) {
    if (m[_0x3ace81])
        return m[_0x3ace81];
    var _0x318e16 = m['length'] - 0x1;
    var _0x28293d = m[_0x318e16];
    for (var _0x333246 = _0x28293d + 0x2;; _0x333246 += 0x2) {
        if (isPrime(_0x333246)) {
            _0x318e16++;
            m[_0x318e16] = _0x333246;
            if (_0x318e16 == _0x3ace81)
                return _0x333246;
        }
    }
}
function isPrime(_0x2e8c1a) {
    if (_0x2e8c1a % 0x3 == 0x0)
        return ![];
    var _0x5debbf = Math['round'](Math['sqrt'](_0x2e8c1a));
    var _0x41fb14 = 0x1;
    while (_0x41fb14 * 0x6 - 0x1 <= _0x5debbf) {
        if (_0x2e8c1a % (_0x41fb14 * 0x6 - 0x1) == 0x0 || _0x2e8c1a % (_0x41fb14 * 0x6 + 0x1) == 0x0)
            return ![];
        _0x41fb14++;
    }
    return !![];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var num = +line;
    if (num == 0x0)
        break;
    var s = 0x0;
    for (var i = num; i > 0x0; i--) {
        s += p(i);
    }
    console['log'](s);
}