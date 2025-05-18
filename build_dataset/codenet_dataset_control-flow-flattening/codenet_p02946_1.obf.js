var input = '\x0a3\x207\x0a';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var k = arr[0x0]['split']('\x20')[0x0] - 0x0;
var x = arr[0x0]['split']('\x20')[0x1] - 0x0;
var a = [];
for (var i = x - k + 0x1; i < x + k; i++)
    a['push'](i);
console['log'](a['join']('\x20'));