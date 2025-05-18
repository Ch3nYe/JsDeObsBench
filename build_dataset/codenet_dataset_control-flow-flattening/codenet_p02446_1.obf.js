var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var b = [];
var memo = '';
for (var i = 0x0; i < a['length']; i++) {
    if (a[i] !== memo)
        b['push'](a[i]);
    memo = a[i];
}
console['log'](b['join']('\x20'));