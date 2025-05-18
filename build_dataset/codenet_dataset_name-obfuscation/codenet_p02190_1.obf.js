var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var s = new Set();
a['forEach'](_0x3174ec => s['add'](_0x3174ec));
console['log'](s['size']);