var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [p, m, c] = input['trim']()['split']('\x20')['map'](Number);
console['log'](p + m + c);