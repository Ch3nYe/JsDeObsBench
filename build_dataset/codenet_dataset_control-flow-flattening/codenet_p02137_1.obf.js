var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var p = input['trim']() - 0x0;
console['log'](p - p % 0x1f4);