log = console['log'];
var stdin = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
var lines = stdin['split']('\x0a');
var N = lines[0x0]['split']('\x20')['map'](Number)[0x0];
var T = lines['slice'](0x1)['filter'](_0x1f54b9 => _0x1f54b9 !== '')['map'](Number);
function gcd(_0x20c42a, _0xc04361) {
    if (_0xc04361 === 0x0)
        return _0x20c42a;
    return gcd(_0xc04361, _0x20c42a % _0xc04361);
}
function lcm(_0x585334, _0x4f078d) {
    return _0x585334 * _0x4f078d / gcd(_0x585334, _0x4f078d);
}
for (var i = 0x1; i < N; i++) {
    T[i] = lcm(T[i], T[i - 0x1]);
}
log(T[N - 0x1]);