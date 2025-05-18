function gcd(_0xd8e2e3, _0x2a565c) {
    if (_0x2a565c > _0xd8e2e3)
        return gcd(_0x2a565c, _0xd8e2e3);
    if (_0x2a565c == 0x0)
        return _0xd8e2e3;
    return gcd(_0x2a565c, _0xd8e2e3 % _0x2a565c);
}
function lcm(_0x3dcc14, _0xecc24c) {
    var _0x372261 = gcd(_0x3dcc14, _0xecc24c);
    return _0x3dcc14 * _0xecc24c / _0x372261;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var n = +lines['shift']();
var nums = lines['shift']()['split']('\x20')['map'](function (_0x2180cb) {
    return +_0x2180cb;
});
var p = 0x1;
for (var i = 0x0; i < n; i++) {
    p = lcm(p, nums[i]);
}
console['log'](p);