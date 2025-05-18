var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['trim']()['split']('\x0a');
arr = input[0x1]['split']('\x20')['map'](Number);
arr = arr['filter'](_0x3eaa80 => _0x3eaa80 % 0x2 == 0x0);
console['log'](arr['length']);