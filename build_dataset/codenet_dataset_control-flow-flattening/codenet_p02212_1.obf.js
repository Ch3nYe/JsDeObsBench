var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x20')['map'](Number);
var [a, b, c, d] = arr['sort']((a, b) => b - a);
console['log'](Math['abs'](a + d - (b + c)));