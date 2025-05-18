var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var x = input['trim']() - 0x0;
var time = 0xc * 0x3c / 0x168 * x;
var h = (time - time % 0x3c) / 0x3c;
var m = time % 0x3c;
console['log'](h + '\x20' + m);