var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x20')['map'](Number);
var [a, b, c, d] = arr['sort']((_0x199f14, _0x28c2d8) => _0x28c2d8 - _0x199f14);
console['log'](Math['abs'](a + d - (b + c)));