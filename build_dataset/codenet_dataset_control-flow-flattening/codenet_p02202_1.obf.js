var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var v = arr['shift']()['split']('\x20')['map'](Number);
var sum = 0x0;
for (var i = 0x0; i < n; i++) {
    sum += v[i] - (i + 0x1);
}
console['log'](sum);