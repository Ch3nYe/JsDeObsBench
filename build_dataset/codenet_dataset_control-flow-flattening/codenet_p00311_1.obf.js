var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [h1, h2] = arr['shift']()['split']('\x20')['map'](Number);
var [k1, k2] = arr['shift']()['split']('\x20')['map'](Number);
var [a, b, c, d] = arr['shift']()['split']('\x20')['map'](Number);
var h = h1 * a + h2 * b + Math['floor'](h1 / 0xa) * c + Math['floor'](h2 / 0x14) * d;
var k = k1 * a + k2 * b + Math['floor'](k1 / 0xa) * c + Math['floor'](k2 / 0x14) * d;
if (h == k)
    console['log']('even');
else if (h > k)
    console['log']('hiroshi');
else
    console['log']('kenjiro');