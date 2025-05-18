var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [a, b, c] = input['trim']()['split']('\x20')['map'](Number);
console['log'](Math['min'](a, b, c) + '\x20' + Math['max'](a, b, c));